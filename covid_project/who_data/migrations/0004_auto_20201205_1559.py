# Generated by Django 3.1.3 on 2020-12-05 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('who_data', '0003_auto_20201205_1451'),
    ]

    operations = [
        migrations.AlterField(
            model_name='whodata',
            name='hash_column',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
