# Generated by Django 4.0.3 on 2023-04-26 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_alter_automobilevo_vin_alter_salesperson_employee_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='sale',
            name='price',
            field=models.CharField(default=0, max_length=20),
            preserve_default=False,
        ),
    ]