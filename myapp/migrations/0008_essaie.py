# Generated by Django 3.2.13 on 2022-05-03 21:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0007_rename_id_indicateurimport_id_indice'),
    ]

    operations = [
        migrations.CreateModel(
            name='Essaie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('début', models.DateTimeField(blank=True)),
                ('fin', models.DateTimeField(blank=True)),
                ('équipe', models.CharField(max_length=400)),
                ('nomMatérielle', models.CharField(max_length=400)),
                ('référenceMatérielle', models.CharField(max_length=400)),
                ('état', models.CharField(choices=[('Pas encore', 'Pas encore'), ('En cours', 'En cours'), ('Cloturer', 'Cloturer')], max_length=400)),
            ],
        ),
    ]
