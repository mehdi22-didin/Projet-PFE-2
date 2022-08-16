from pyexpat import model
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Indicateur, IndicateurImport , Essaie, Utilisateur

class IndicateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Indicateur
        fields= ['id', 'name', 'valeur', 'enregistreur', 'horaire', 'code_couleur']

class IndicImportSerilizer(serializers.ModelSerializer):
    class  Meta:
        model = IndicateurImport
        fields= "__all__"

class EssaieSerializer(serializers.ModelSerializer):
    équipe = serializers.SlugRelatedField(
        slug_field='username',
        many=True,
        queryset=Utilisateur.objects.all()
    )
    class Meta:
        model = Essaie
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields =['id',"username","émail","password","grade","service","is_active"]
        #extra_kwargs = {'password': {'write_only':True, 'required':True}}

    def create(self, validated_data):
        user = Utilisateur.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
