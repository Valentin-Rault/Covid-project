# Generated by Django 3.1.3 on 2020-12-05 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('who_data', '0002_auto_20201115_1259'),
    ]

    operations = [
        migrations.AddField(
            model_name='whodata',
            name='hash_column',
            field=models.CharField(default='needsupdate', max_length=30),
        ),
        migrations.AlterField(
            model_name='whodata',
            name='country',
            field=models.CharField(max_length=40),
        ),
    ]
