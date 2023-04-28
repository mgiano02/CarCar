from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Technician, AutomobileVO, Appointment

# Create your views here.
# Used to access automobile property data from automobiles in inventory
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href"
    ]

# Used to access technician property data for a list
class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id"
    ]

# Used to access technician property data for details
class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id"
    ]

# Used to access appointment property data for a list
class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "reason",
        "status",
        "customer",
        "id",
        "vin"
    ]

    def get_extra_data(self, o):
        return {"technician": o.technician.first_name + " " + o.technician.last_name}

class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
    ]
    encoders = {
        "technician": TechnicianDetailEncoder(),
    }

# Used to access appointment property data for details
class AppointmentUpdateEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "status",
    ]


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    # Obtain technician list
    if request.method == "GET":
        try:
            technicians = Technician.objects.all()
            return JsonResponse(
                {"technicians": technicians},
                encoder=TechnicianListEncoder,
            )
        except:
            response = JsonResponse(
                {"message": "Could not load technicians list"}
            )
            response.status_code = 400
            return response
    # Create a new technician
    else:
        try:
            content = json.loads(request.body)

            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianListEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create a technician"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_delete_technician(request, pk):
    if request.method == "DELETE":
        try:
            count, _ = Technician.objects.filter(id=pk).delete()
            return JsonResponse({"deleted": count > 0})
        except Technician.DoesNotExist:
            response = JsonResponse(
                {"message": "Technician does not exist"}
            )
            response.status_code = 404
            return response

@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    # Obtain appointment list
    if request.method == "GET":
        try:
            appointments = Appointment.objects.all()
            return JsonResponse(
                {"appointments": appointments},
                encoder=AppointmentListEncoder,
            )
        except:
            response = JsonResponse(
                {"message": "Could not load appointments list"}
            )
            response.status_code = 400
            return response
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.get(first_name=content["technician"])
            content["technician"] = technician
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentListEncoder,
                safe=False,
            )
        # May consider adding a catch later if a technician can't be accessed
        except:
            response = JsonResponse(
                {"message": "Could not create an appointment"}
            )
            response.status_code = 400
            return response



@require_http_methods(["DELETE"])
def api_delete_appointment(request, pk):
    if request.method == "DELETE":
        try:
            count, _ = Appointment.objects.filter(id=pk).delete()
            return JsonResponse({"deleted": count > 0})
        except Appointment.DoesNotExist:
            response = JsonResponse(
                {"message": "Appointment does not exist"}
            )
            response.status_code = 404
            return response


@require_http_methods(["PUT"])
def api_cancel_appointment(request, id):
    if request.method == "PUT":
        try:
            appointment = Appointment.objects.get(id=id)
            appointment.cancel()
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            response = JsonResponse(
                {"message": "Appointment does not exist"}
            )
            response.status_code = 404
            return response

@require_http_methods(["PUT"])
def api_finish_appointment(request, id):
    if request.method == "PUT":
        try:
            appointment = Appointment.objects.get(id=id)
            appointment.finished()
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            response = JsonResponse(
                {"message": "Appointment does not exist"}
            )
            response.status_code = 404
            return response
