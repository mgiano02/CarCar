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
    properties=["id"]
    def get_extra_data(self, o):
        return {
            "automobile": o.automobile.vin,
            "customer": o.customer.first_name,
            "salesperson": o.salesperson.first_name,
            "salesperson_id": o.salesperson.employee_id,
            }


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespeopleListEncoder
        )
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
    count, _ = Salesperson.objects.filter(id=pk).delete()
    return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerListEncoder
        )
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
    count, _ = Customer.objects.filter(id=pk).delete()
    return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleDetailEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile vin"}
            )
        try:
            salesperson = Salesperson.objects.get(employee_id=content["salesperson"])
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesperson"}
            )
        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer"}
            )
        try:
            sale = Sale.objects.create(**content)
            return JsonResponse({
                "automobile": automobile.vin,
                "salesperson": salesperson.first_name,
                "customer": customer.first_name
            },
            )
        except:
            response = JsonResponse({"message": "Could not create the a Sale"})
            response.status_code = 400
            return response

@require_http_methods(["DELETE"])
def api_delete_sale(request, pk):
    count, _ = Sale.objects.filter(id=pk).delete()
    return JsonResponse({"deleted": count > 0})
