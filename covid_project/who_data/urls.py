from django.urls import path
from django.views.generic import TemplateView

from . import views
from .views import WhoDataView

urlpatterns = [
    path('', TemplateView.as_view(template_name='who_data/base.html'), name='home'),
    path('who-data/', WhoDataView.as_view(), name='db_list'),
]