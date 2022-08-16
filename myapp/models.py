
import email
from email.policy import default
from pyexpat import model
from unicodedata import name
from wsgiref.handlers import format_date_time
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.html import format_html
# Create your models here.

class Indicateur(models.Model):
    name = models.CharField(max_length=40)
    valeur = models.FloatField()
    enregistreur = models.CharField(max_length=40)
    horaire = models.DateTimeField(auto_now_add=True)

    @property
    def code_couleur(self):
        if (self.name == 'débit_gaz'):
            if (self.valeur < 5000 and self.valeur > 2000):
                code_couleur = '#fffff'
            else :
                code_couleur = '#00000'
            return code_couleur
                
            
            



    def __str__(self):
        return self.name

class IndicateurImport(models.Model):
    id_indice = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    horaire = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=40)
    valeur = models.FloatField()
    enregistreur = models.CharField(max_length=40)
    

    def __str__(self):
        return self.name

class UtilisateurManager(BaseUserManager):
    def create_user(self, émail, username,grade , service, password , **other_fields):
        if not émail:
            raise ValueError("L'Utilisateur faut avoir un adresse email")
        émail = self.normalize_email(émail)
        user = self.model(émail=émail, username=username, grade=grade, service=service,password=password, **other_fields)
        user.set_password(password)
        user.save(using = self._db)
        return user


    def create_superuser(self, émail, username,grade , service, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_active', True)
        other_fields.setdefault('is_superuser', True)

        user = self.create_user(émail, username,grade , service, password, **other_fields)
        user.save(using = self._db)
        return user
        



class Utilisateur(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=400)
    grade = models.CharField(max_length=400)
    service = models.CharField(max_length=400)
    émail = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=400)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UtilisateurManager()

    USERNAME_FIELD = 'émail'
    REQUIRED_FIELDS = ['username','grade','service']

    #def is_staff(self):
        #return self.is_staff

    def __str__(self):
        return self.émail

class Essaie(models.Model):
    début = models.DateTimeField(blank=True)
    équipe = models.ManyToManyField(Utilisateur)
    fin = models.DateTimeField(blank=True)
    nomMatérielle = models.CharField(max_length=400)
    référenceMatérielle = models.CharField(max_length=400)
    état = models.CharField(max_length=400)


    def __str__(self):
        return self.état




