from django.shortcuts import render

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import WhoDataSerializer, ListCountrySerializer
from .models import WhoData

import datetime


class WhoDataView(generics.ListAPIView):
    queryset = WhoData.objects.filter(country='Denmark')
    serializer_class = WhoDataSerializer


class GetCountry(APIView):
    serializer_class = WhoDataSerializer

    def get(self, request, format=None):
        country_code = request.GET.get('code')
        start_date = request.GET.get('start_date')
        end_date = request.GET.get('end_date')
        if country_code is not None:
            country_datas = WhoData.objects.filter(country_code=country_code, date_reported__range=(start_date, end_date))
            if len(country_datas) > 0:
                data = self.serializer_class(country_datas, many=True).data
                formatted_data = self.format_data_to_list(data)
                return Response(formatted_data, status=status.HTTP_200_OK)
            return Response({'message': 'Country code not found'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'message': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)

    def format_data_to_list(self, data):
        data_list = dict()
        data_list['date_reported'] = list()
        data_list['new_cases'], data_list['cumulative_cases'] = list(), list()
        data_list['new_deaths'], data_list['cumulative_deaths'] = list(), list()
        data_list['country'] = data[0]['country']

        for dic in data:
            for key, value in dic.items():
                if 'country' not in key:
                    data_list[key].append(value)

        return data_list


class CountryList(APIView):
    serializer_class = ListCountrySerializer

    def get(self, format=None):
        country = WhoData.objects.filter(date_reported='2020-02-02')
        data = self.serializer_class(country, many=True).data
        formatted_data = self.format_data(data)
        return Response(formatted_data, status=status.HTTP_200_OK)

    def format_data(self, data):
        data_list = dict()
        data_list['country_code'], data_list['country'] = list(), list()

        for dic in data:
            for key, item in dic.items():
                data_list[key].append(item)

        data_dict = dict(zip(data_list['country_code'], data_list['country']))

        return data_dict
