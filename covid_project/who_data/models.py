from django.db import models


class Country(models.Model):
    code = models.CharField(max_length=5, primary_key=True)
    name = models.CharField(max_length=25)
    who_region = models.CharField(max_length=5)
    continent = models.CharField(max_length=20)
    is_island = models.BooleanField()
    political_view = models.CharField(max_length=15)
    gdp = models.DecimalField(max_digits=9, decimal_places=2)
    free_healthcare = models.BooleanField()
    religion = models.CharField(max_length=20)


class WhoData(models.Model):
    date_reported = models.DateField()
    # country = models.ForeignKey(Country, on_delete=models.DO_NOTHING)
    country = models.CharField(max_length=100)
    new_cases = models.IntegerField()
    cumulative_cases = models.PositiveIntegerField()
    new_deaths = models.IntegerField()
    cumulative_deaths = models.PositiveIntegerField()
    hash_column = models.CharField(max_length=30, null=True)


class Date(models.Model):
    MONDAY = "MO"
    TUESDAY = "TU"
    WEDNESDAY = "WE"
    THURSDAY = "TH"
    FRIDAY = "FR"
    SATURDAY = "SA"
    SUNDAY = "SU"
    WEEKDAY_CHOICES = [
        (MONDAY, "Monday"),
        (TUESDAY, "Tuesday"),
        (WEDNESDAY, "Wednesday"),
        (THURSDAY, "Thursday"),
        (FRIDAY, "Friday"),
        (SATURDAY, "Saturday"),
        (SUNDAY, "Sunday"),
    ]
    JANUARY = "JAN"
    FEBRUARY = "FEB"
    MARS = "MAR"
    APRIL = "APR"
    MAY = "MAY"
    JUNE = "JUN"
    JULY = "JUL"
    AUGUST = "AUG"
    SEPTEMBER = "SEP"
    OCTOBER = "OCT"
    NOVEMBER = "NOV"
    DECEMBER = "DEC"
    MONTH_CHOICES = [
        (JANUARY, "January"),
        (FEBRUARY, "February"),
        (MARS, "Mars"),
        (APRIL, "April"),
        (MAY, "May"),
        (JUNE, "June"),
        (JULY, "July"),
        (AUGUST, "August"),
        (SEPTEMBER, "September"),
        (OCTOBER, "October"),
        (NOVEMBER, "November"),
        (DECEMBER, "December"),
    ]
    date = models.DateField(primary_key=True)
    weekday = models.CharField(max_length=2, choices=WEEKDAY_CHOICES)
    month = models.CharField(max_length=3, choices=MONTH_CHOICES)
    year = models.PositiveSmallIntegerField()
    quarter = models.CharField(max_length=2)


class CalculatedData(models.Model):
    country_code = models.ForeignKey(Country, on_delete=models.DO_NOTHING)
    population = models.PositiveIntegerField()
    percentage_positive = models.PositiveSmallIntegerField()
    positive_100_000 = models.PositiveIntegerField()
    deaths_100_000 = models.PositiveIntegerField()
