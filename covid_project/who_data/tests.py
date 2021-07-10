from django.test import TestCase
from django.test import Client
from .models import WhoData
from datetime import datetime
import json

# Create your tests here.

def populate_countries():
    country1 = WhoData.objects.create(date_reported=datetime.strptime('2020-02-01', "%Y-%m-%d"), country_code='DK',
                                      country='Denmark', new_cases=0, cumulative_cases=0, new_deaths=0,
                                      cumulative_deaths=0, hash_column='2020-02-01DK')
    country2 = WhoData.objects.create(date_reported=datetime.strptime('2020-02-02', "%Y-%m-%d"), country_code='DK',
                                      country='Denmark', new_cases=0, cumulative_cases=0, new_deaths=0,
                                      cumulative_deaths=0, hash_column='2020-02-02DK')
    country3 = WhoData.objects.create(date_reported=datetime.strptime('2020-02-03', "%Y-%m-%d"), country_code='DK',
                                      country='Denmark', new_cases=0, cumulative_cases=0, new_deaths=0,
                                      cumulative_deaths=0, hash_column='2020-02-03DK')

    map(lambda x: x.save(), [country1, country2, country3])


class TestGetCountry(TestCase):

    def setUp(self):
        populate_countries()

    def test_get(self):
        c = Client()
        response = c.get('/api/get-country', {'code': 'DK', 'start_date': '2020-02-01', 'end_date': '2020-02-03'})
        self.assertEqual(response.status_code, 200)

    def test_entry_not_found(self):
        c = Client()
        response = c.get('/api/get-country', {'code': 'DK'})
        json_res = json.loads(response.content.decode('utf-8'))
        self.assertEqual(response.status_code, 404)
        self.assertEqual(json_res['message'], 'Country code not found')

    def test_country_code_not_found(self):
        c = Client()
        response = c.get('/api/get-country', {})
        json_res = json.loads(response.content.decode('utf-8'))
        self.assertEqual(response.status_code, 400)
        self.assertEqual(json_res['message'], 'Code parameter not found in request')

    def test_format_single_data(self):
        c = Client()
        response = c.get('/api/get-country', {'code': 'DK', 'start_date': '2020-02-01', 'end_date': '2020-02-01'})
        json_res = json.loads(response.content.decode('utf-8'))
        expected = {'date_reported': ['2020-02-01'], 'new_cases': [0], 'cumulative_cases': [0],
                    'new_deaths': [0], 'cumulative_deaths': [0], 'country': 'Denmark'}
        self.assertEqual(json_res, expected)

    def test_format_multiple_data(self):
        c = Client()
        response = c.get('/api/get-country', {'code': 'DK', 'start_date': '2020-02-01', 'end_date': '2020-02-02'})
        json_res = json.loads(response.content.decode('utf-8'))
        expected = {'date_reported': ['2020-02-01', '2020-02-02'], 'new_cases': [0, 0], 'cumulative_cases': [0, 0],
                    'new_deaths': [0, 0], 'cumulative_deaths': [0, 0], 'country': 'Denmark'}
        self.assertEqual(json_res, expected)


class TestCountryList(TestCase):
    def setUp(self):
        populate_countries()

    def test_status_code(self):
        c = Client()
        response = c.get('/api/country-list')
        self.assertEqual(response.status_code, 200)

    def test_format_single_country(self):
        c = Client()
        response = c.get('/api/country-list')
        json_res = json.loads(response.content.decode('utf-8'))
        expected = {'DK': 'Denmark'}
        self.assertEqual(json_res, expected)

    def test_format_countries(self):
        country4 = WhoData.objects.create(date_reported=datetime.strptime('2020-02-02', "%Y-%m-%d"), country_code='FR',
                                          country='France', new_cases=0, cumulative_cases=0, new_deaths=0,
                                          cumulative_deaths=0, hash_column='2020-02-02FR')
        country4.save()
        c = Client()
        response = c.get('/api/country-list')
        json_res = json.loads(response.content.decode('utf-8'))
        expected = {'DK': 'Denmark', 'FR': 'France'}
        self.assertEqual(json_res, expected)
