# Generated by Django 3.2.13 on 2022-05-12 19:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0017_rename_fullname_utilisateur_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='utilisateur',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='utilisateur',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
    ]