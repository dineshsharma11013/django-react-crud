from django.urls import path
from .views import *

urlpatterns = [
    path('contact', ContactView),
    path('contact/<id>', contactDetailsView)
]

