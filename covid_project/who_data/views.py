from django.shortcuts import render
from django.views.generic import ListView

from rest_framework import generics

from .serializers import WhoDataSerializer
from .models import WhoData


class WhoDataView(generics.ListAPIView):
    queryset = WhoData.objects.all()
    serializer_class = WhoDataSerializer
