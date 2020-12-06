from rest_framework import serializers
from .models import WhoData


class WhoDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhoData
        fields = (
            'id',
            'date_reported',
            'country',
            'new_cases',
            'cumulative_cases',
            'new_deaths',
            'cumulative_deaths',
        )
