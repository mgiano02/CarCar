from django.db import models
from django.urls import reverse


class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.SmallIntegerField(unique=True)

    def __str__(self):
        return self.employee_id

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=100)
    import_href = models.CharField(max_length=200, unique=True)

class Appointment(models.Model):
    date_time = models.DateTimeField(blank=True, null=True)
    reason = models.CharField(max_length=200)
    status = models.CharField(max_length=100)
    vin = models.CharField(max_length=100)
    customer = models.CharField(max_length=100)

    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.PROTECT
    )

    def get_api_url(self):
        return reverse("api_cancel_appointment", kwargs={"id": self.id})

    def pending(self):
        status = Appointment.objects.get(status="PENDING")
        self.status = status
        self.save()

    def finished(self):
        status = "FINISHED"
        self.status = status
        self.save()

    def cancel(self):
        status = "CANCEL"
        self.status = status
        self.save()
