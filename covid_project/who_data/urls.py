from django.urls import path
from django.views.generic import TemplateView

from . import views
from .views import WhoDataListView

urlpatterns = [
    path('', TemplateView.as_view(template_name='who_data/base.html'), name='home'),
    path('db_list', WhoDataListView.as_view(), name='db_list'),
]