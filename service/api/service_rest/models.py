from django.db import models

# Create your models here.
class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.SmallIntegerField()


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=100)
    import_href = models.CharField(max_length=200, unique=True)

class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=200)
    status = models.CharField(max_length=100)
    vin = models.CharField(max_length=100)
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE
    )
