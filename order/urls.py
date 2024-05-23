from django.urls import path
from order import views

path("checkout/", views.checkout)