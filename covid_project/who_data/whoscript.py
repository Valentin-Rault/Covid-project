#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
import sys

if sys.stdout.encoding is None:
    reload(sys)
    sys.setdefaultencoding("UTF-8")
sys.path += ["."]
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "covid_project.settings")
import django

django.setup()

import pandas as pd
import csv

# from sqlalchemy import create_engine
from datetime import datetime

from who_data.models import WhoData

"""
engine = create_engine(
    "postgresql+psycopg2://usercovid:Secretpassword@localhost:5432/covid_project1"
)
df.to_sql("table_name", engine)
"""


def fetch_format_csv():
    url = "https://covid19.who.int/WHO-COVID-19-global-data.csv"
    df = pd.read_csv(url)
    df["hash_column"] = df["Date_reported"].astype(str) + df["Country_code"].astype(str)
    df.drop(["Country_code", "WHO_region"], axis="columns", inplace=True)
    df["Date_reported"] = pd.to_datetime(df["Date_reported"])
    df.rename(
        columns={
            "Date_reported": "date_reported",
            "Country_code": "country_code",
            "Country": "country",
            "WHO_region": "who_region",
            "New_cases": "new_cases",
            "Cumulative_cases": "cumulative_cases",
            "New_deaths": "new_deaths",
            "Cumulative_deaths": "cumulative_deaths",
        },
        inplace=True,
    )
    df.to_csv("whodata.csv", index=False, header=False)
    # df.to_sql("who_data_whodata", engine, if_exists="append", index=False)


def update_database():
    with open("whodata.csv") as f:
        reader = csv.reader(f)
        for line in reader:
            if WhoData.objects.filter(hash_column=line[6]).exists():
                pass
            else:
                entry = WhoData.objects.create(
                    date_reported=datetime.strptime(line[0], "%Y-%m-%d"),
                    country=line[1],
                    new_cases=int(line[2]),
                    cumulative_cases=int(line[3]),
                    new_deaths=int(line[4]),
                    cumulative_deaths=int(line[5]),
                    hash_column=line[6],
                )
                entry.save()


if __name__ == "__main__":
    fetch_format_csv()
    update_database()
