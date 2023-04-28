from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import AutomobileVO, Salesperson, Customer, Sale

class SalespeopleListEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id", "id"]

class SalespersonDetailEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id", "id"]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["first_name", "last_name", "address", "phone_number", "id"]

class SalesListEncoder(ModelEncoder):
    model = Sale
    properties = ["automobile", "salesperson", "customer"]

class SaleDetailEncoder(ModelEncoder):
    model = Sale
    properties=["id", "price"]
    def get_extra_data(self, o):
        return {
            "automobile": o.automobile.vin,
            "customer": o.customer.first_name + " " + o.customer.last_name,
            "customer_id": o.customer.id,
            "salesperson": o.salesperson.first_name + " " + o.salesperson.last_name,
            "salesperson_id": o.salesperson.employee_id,
            }


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        try:
            salespeople = Salesperson.objects.all()
            return JsonResponse(
                {"salespeople": salespeople},
                encoder=SalespeopleListEncoder
            )
        except:
            response = JsonResponse({"message": "Could not load list of Salespeople"})
            response.status_code = 400
            return response
    else:
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonDetailEncoder,
                safe=False
        )
        except:
            response = JsonResponse({"message": "Could not create a salesperson"})
            response.status_code = 400
            return response

@require_http_methods(["DELETE"])
def api_delete_salespeople(request, pk):
    try:
        Salesperson.objects.get(id=pk).delete()
        response = JsonResponse({"message": "Salesperson got deleted"})
        response.status_code = 200
        return response
    except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "No Salesperson to delete"})
            response.status_code = 400
            return response



@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        try:
            customers = Customer.objects.all()
            return JsonResponse(
                {"customers": customers},
                encoder=CustomerListEncoder
            )
        except:
            response = JsonResponse({"message": "Could not load list of Customers"})
            response.status_code = 400
            return response
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerListEncoder,
                safe=False
            )
        except:
            response = JsonResponse({"message": "Could not create a customer"})
            response.status_code = 400
            return response

@require_http_methods(["DELETE"])
def api_delete_customer(request, pk):
    try:
        Customer.objects.get(id=pk).delete()
        return JsonResponse({"message": "Customer got deleted"})

    except Customer.DoesNotExist:
            response = JsonResponse({"message": "Customer does not exist"})
            response.status_code = 400
            return response


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        try:
            sales = Sale.objects.all()
            return JsonResponse(
                {"sales": sales},
                encoder=SaleDetailEncoder
        )
        except:
            response = JsonResponse({"message": "Could not load list of Sales"})
            response.status_code = 400
            return response
    else:
        content = json.loads(request.body)
        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            response = JsonResponse({"message": "Invalid automobile vin"})
            response.status_code = 400
            return response
        try:
            salesperson = Salesperson.objects.get(employee_id=content["salesperson"])
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Invalid salesperson"})
            response.status_code = 400
            return response
        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Invalid customer"})
            response.status_code = 400
            return response

        try:
            Sale.objects.create(**content)
            return JsonResponse({
                "automobile": automobile.vin,
                "salesperson": salesperson.first_name + " " + salesperson.last_name,
                "customer": customer.first_name + " " + customer.last_name
            },
            )
        except:
            response = JsonResponse({"message": "Could not create a Sale"})
            response.status_code = 400
            return response

@require_http_methods(["DELETE"])
def api_delete_sale(request, pk):
    try:
        Sale.objects.filter(id=pk).delete()
        return JsonResponse({"message": "Sale got deleted"})
    except Sale.DoesNotExist:
            response = JsonResponse({"message": "Sale does not exist"})
            response.status_code = 400
            return response
