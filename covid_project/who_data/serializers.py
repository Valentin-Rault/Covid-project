from rest_framework import serializers
from .models import WhoData


class WhoDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhoData
        fields = (
            'date_reported',
            'country_code',
            'country',
            'new_cases',
            'cumulative_cases',
            'new_deaths',
            'cumulative_deaths',
        )


class ListCountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = WhoData
        fields = (
            'country_code',
            'country',
        )
