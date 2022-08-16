from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import Indicateur, IndicateurImport, Essaie, Utilisateur

# Register your models here.

admin.site.register(Indicateur)
admin.site.register(Essaie)
admin.site.register(Utilisateur)



# class IndiceAdmine(admin.ModelAdmin):
#     Indice_Liste = ('name', 'valeur', 'enregistreur')
# admin.site.register(Indicateur, IndiceAdmine)

# class EssaieAdmine(admin.ModelAdmin):
#     Essaie_Liste = ('name', 'valeur', 'enregistreur')
# admin.site.register(Essaie, EssaieAdmine)

# class UtilisateurAdmine(admin.ModelAdmin):
#     User_Liste = ('fullname', 'valeur', 'enregistreur')
# admin.site.register(Utilisateur, Utilisateur)


class IndicImporterAdmine(admin.ModelAdmin):
    IndicImporter_Liste = ('name', 'valeur', 'enregistreur')
admin.site.register(IndicateurImport, IndicImporterAdmine)


