from re import template
from unicodedata import name
from rest_framework import status, generics, mixins, viewsets, filters
from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.parsers import JSONParser
from .models import Indicateur, IndicateurImport , Essaie , Utilisateur
from .serializers import IndicateurSerializer, IndicImportSerilizer, EssaieSerializer , UserSerializer
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import permission_required
from rest_framework.decorators import api_view
from rest_framework.response import Response
import csv, io

from django.contrib import messages
from tablib import Dataset
from django.core.files.base import ContentFile
from django.core.files.storage import FileSystemStorage
from rest_framework.decorators import action
fs = FileSystemStorage(location='tmp/')

# Create your views here.
def IndicateurSuivre(request):
    return render(request, 'Indicateur/IndicateurSuivre.html')

def CréerIndicateur(request):
    return render(request, 'Indicateur/CréerIndicateur.html')

def Home(request):
    return render(request, 'Home/home.html')

def Dashbord(request):
    return render(request, "mon-app/src/pages/Dashbord/Dashbord.jsx")

def LoginPage(request):
    return render(request, "login/login.html")

# API_View_Indicateur

class GenericIndiceAPIViews(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = IndicateurSerializer
    queryset = Indicateur.objects.all()
    lookup_field = 'id'

    def get(self, request, id =None):
            return self.retrieve(request, id)

    def put(self, request, id=None):
        return self.update(request, id) 
    
    def delete(self, request, id):
        return self.destroy(request, id)

class GenericIndiceAPIViewsGETPOST(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = IndicateurSerializer
    queryset = Indicateur.objects.all()

    def get(self, request):
        return self.list(request)
    
    def post(self, request):
        return self.create(request)

# API_View_Essaie

class GenericEssaieAPIViews(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = EssaieSerializer
    queryset = Essaie.objects.all()
    lookup_field = 'id'

    def get(self, request, id =None):
            return self.retrieve(request, id)

    def put(self, request, id=None):
        return self.update(request, id) 
    
    def delete(self, request, id):
        return self.destroy(request, id)

class GenericEssaieAPIViewsGETPOST(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = EssaieSerializer
    queryset = Essaie.objects.all()

    def get(self, request):
        return self.list(request)
    
    def post(self, request):
        return self.create(request)

# API_View_Utilisateur
class GenericUserAPIViews(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = UserSerializer
    queryset = Utilisateur.objects.all()
    lookup_field = 'id'

    def get(self, request, id =None):
            return self.retrieve(request, id)

    def put(self, request, id=None):
        return self.update(request, id) 
    
    def delete(self, request, id):
        return self.destroy(request, id)

class GenericUserAPIViewsGETPOST(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = UserSerializer
    queryset = Utilisateur.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['username']
    ordering = ['username'] 

    def get(self, request):
        return self.list(request)
    
    def post(self, request):
        return self.create(request)




@api_view(['GET', 'POST'])
def indicateur_list(request):
    if request.method == 'GET':
        indice = Indicateur.objects.all()
        serializer = IndicateurSerializer(indice, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = IndicateurSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status =status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class IndiceImporteViewSet(viewsets.ModelViewSet):
    queryset = IndicateurImport.objects.all()
    serializer_class = IndicImportSerilizer

    @action(detail=False, methods=['POST'])
    def upload_data(self, request):
        file = request.FILES['file']
        content = file.read()

        file_content = ContentFile(content)
        file_name = fs.save("_tmp.csv", file_content)
        tmp_file = fs.path(file_name)

        csv_file = open(tmp_file, errors='ignore')
        reader = csv.reader(csv_file)
        next(reader)
        list_indicateur = []
        for id, row in enumerate(reader):
            (
                id,
                horaire,
                name,
                valeur,
                enregistreur,
            ) = row

            list_indicateur.append(
                IndicateurImport(
                    id_indice=id,
                    name=name,
                    enregistreur=enregistreur,
                    valeur=valeur,
                    horaire=horaire,
                )
            )
        IndicateurImport.objects.bulk_create(list_indicateur)
        return Response("Success adding §§")

@permission_required('admin.can_add_log_entry')
def indicareur_upload(request):
    template = 'indic_upload.html'
    prompt ={
        'order': 'order of csv file should be : id , horaire , name, valeur, enregistreur'
    }
    if request.method == "GET":
        return render(request, template, prompt)
    csv_file = request.FILES['file']
    if not csv_file.name.endswith('.csv'):
        messages.error(request, 'This in not a csv file')
    dataset = csv_file.read().decode('UTF-8')
    io_string = io.StringIO(dataset)
    next(io_string)
    for column in csv.reader(io_string, delimiter=',', quotechar='|'):
        _, created = IndicateurImport.objects.update_or_create(
            id_indice = column[0],
            horaire= column[1],
            name= column[2],
            valeur = column[3],
            enregistreur= column[4],
        )
    context = {}
    return render(request, template, context)

def user_login(request):
    émail =  request.POST['émail']
    password = request.POST['password']
    userData = Utilisateur.objects.get(émail=émail, password=password)
    if userData:
        return JsonResponse({'bool': True})
    else:
        return JsonResponse({'bool': False})
