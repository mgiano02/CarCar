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
        "vin",
        "customer",
    ]

    def get_extra_data(self, o):
        return {"technician": o.technician.employee_id}

# Used to access appointment property data for details
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

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    # Obtain technician list
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianListEncoder,
        )
    # Create a new technician
    else:
        content = json.loads(request.body)

        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianListEncoder,
            safe=False,
        )

