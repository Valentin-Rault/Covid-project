from django.urls import path

from .views import index

urlpatterns = [
    path('', index, name='index'),
    path('country/', index, name='country'),
    path('country/<str:countryCode>', index, name='countries'),
]
