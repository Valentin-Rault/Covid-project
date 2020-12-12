from django.urls import path
from django.views.generic import TemplateView

from . import views
from .views import WhoDataView, GetCountry

urlpatterns = [
    path('who-data/', WhoDataView.as_view(), name='db_list'),
    path('get-country', GetCountry.as_view(), name='get_country'),
]