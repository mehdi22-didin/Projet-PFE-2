# Generated by Django 3.2.13 on 2022-05-07 11:16

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0009_utilisateur'),
    ]

    operations = [
        migrations.AddField(
            model_name='utilisateur',
            name='value',
            field=models.CharField(default=datetime.datetime(2022, 5, 7, 11, 16, 38, 818552, tzinfo=utc), max_length=400),
            preserve_default=False,
        ),
        migrations.RemoveField(
            model_name='essaie',
            name='équipe',
        ),
        migrations.AddField(
            model_name='essaie',
            name='équipe',
            field=models.ManyToManyField(to='myapp.Utilisateur'),
        ),
        migrations.AlterField(
            model_name='essaie',
            name='état',
            field=models.CharField(max_length=400),
        ),
    ]
