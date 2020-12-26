from django.urls import path
from django.views.generic import TemplateView

from . import views
from .views import WhoDataView, GetCountry, CountryList

urlpatterns = [
    path('who-data/', WhoDataView.as_view(), name='db_list'),
    path('get-country', GetCountry.as_view(), name='get_country'),
    path('country-list', CountryList.as_view(), name='country_list'),
]