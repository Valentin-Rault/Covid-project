from django.shortcuts import render
from django.views.generic import ListView

from .models import WhoData


class WhoDataListView(ListView):
    model = WhoData
    template_name = 'who_data/db_list.html'
    context_object_name = 'datas'
