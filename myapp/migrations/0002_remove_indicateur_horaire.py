# Generated by Django 3.2.13 on 2022-04-11 12:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='indicateur',
            name='horaire',
        ),
    ]
