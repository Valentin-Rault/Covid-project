# Generated by Django 3.1.3 on 2020-12-10 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('who_data', '0005_auto_20201206_0801'),
    ]

    operations = [
        migrations.AddField(
            model_name='whodata',
            name='country_code',
            field=models.CharField(default=1, max_length=5),
            preserve_default=False,
        ),
    ]
