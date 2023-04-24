from django.urls import path
from .views import api_list_salespeople, api_delete_salespeople, api_list_customers, api_delete_customer

urlpatterns = [
    path('salespeople/', api_list_salespeople, name='api_list_salespeople'),
    path('salespeople/<int:pk>', api_delete_salespeople, name="api_delete_salespeople"),
    path('customers/', api_list_customers, name="api_list_customers"),
    path('customers/<int:pk>', api_delete_customer, name="api_delete_customer"),
]
