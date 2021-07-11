# Covid-project
Final project for SDA studies

## How to run it
### With SQLite
Use  

``` 
docker run --net=host -e DJANGO_SECRET_KEY="@czgjf(!68ap^5+mcd**bgl=$b*vyx5eb701cfs$xs))7oj^0c" valentinrault/covid:latest
```


### With empty postgreSQL
Use  
```
docker-compose up
```

## Project Description
This project is aiming to analyse data for the coronavirus and present it in a clear way using charts.

## Project Architecture
Data would be gathered from the WHO website on a daily basis to have them up-to-date, the logic part is handle in our back-end by the django framework.  
In order to render the data, the front-end will be render using HTML/CSS as well as JavaScript to create interactive charts.

## Project Schedule
1. 1st week
  * Framing the project
  * Setting up the initial databases and their structure
  * Creating views and urls structure, i.e. rough structure of the final website
  * Script to format the data retrieved from WHO
  * Decide on which front-end technology to use
2. 2nd week
  * Styling of the website
  * Create login for practice
  * Creating graphs with JS
3. 3rd week
  * Connecting back-end (Python) with front-end (JS)
4. 4th week
  * Optimizing
  * Addition of features
