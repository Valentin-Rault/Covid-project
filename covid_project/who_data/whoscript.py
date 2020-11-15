import pandas as pd

def fetch_format_csv():
    url = 'https://covid19.who.int/WHO-COVID-19-global-data.csv'
    df = pd.read_csv(url)
    df.drop([' Country_code', ' WHO_region'], axis='columns', inplace=True)
    return df

