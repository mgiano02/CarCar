from django.db import models

class Salesperson(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.PositiveSmallIntegerField(unique=True)

class Customer(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    phone_number = models.CharField(max_length=15)

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)

    def __str__(self):
        return self.vin

class Sale(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sale",
        on_delete=models.CASCADE
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sale",
        on_delete=models.CASCADE
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sale",
        on_delete=models.CASCADE
    )
    price = models.CharField(max_length=20)
