#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
import sys

if sys.stdout.encoding is None:
    reload(sys)
    sys.setdefaultencoding('UTF-8')
sys.path += ["."]
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'covid_project.settings')
import django

django.setup()

import pandas as pd

def fetch_format_csv():
    url = 'https://covid19.who.int/WHO-COVID-19-global-data.csv'
    df = pd.read_csv(url)
    df.drop([' Country_code', ' WHO_region'], axis='columns', inplace=True)
    return df
