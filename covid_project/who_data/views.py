from django.shortcuts import render

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import WhoDataSerializer
from .models import WhoData


class WhoDataView(generics.ListAPIView):
    queryset = WhoData.objects.filter(country='Denmark')
    serializer_class = WhoDataSerializer


class GetCountry(APIView):
    serializer_class = WhoDataSerializer
    lookup_url_kwarg = 'code'

    def get(self, request, format=None):
        country_code = request.GET.get(self.lookup_url_kwarg)
        if country_code is not None:
            country_datas = WhoData.objects.filter(country_code=country_code)
            if len(country_datas) > 0:
                data = WhoDataSerializer(country_datas, many=True).data
                formatted_data = self.format_data_to_list(data)
                return Response(formatted_data, status=status.HTTP_200_OK)
            return Response({'message': 'Country code not found'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)

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
