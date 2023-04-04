from . import views

from django.urls import path

urlpatterns = [
    path("", views.index, name="Shipx"),
    path("about/", views.about, name="About Us")
]
