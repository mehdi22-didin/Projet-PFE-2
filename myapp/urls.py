from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('indicateurSuivre/', views.IndicateurSuivre),
    path('CréerIndicateur/', views.CréerIndicateur),
    path('login/', views.LoginPage),

    path('', views.Home),
    path('article/', views.indicateur_list),
    path('generic/article/<int:id>/', views.GenericIndiceAPIViews.as_view()),
    path('generic/article/', views.GenericIndiceAPIViewsGETPOST.as_view()),
    path('generic/essaie/<int:id>/', views.GenericEssaieAPIViews.as_view()),
    path('generic/essaie/', views.GenericEssaieAPIViewsGETPOST.as_view()),
    path('generic/user/<int:id>/', views.GenericUserAPIViews.as_view()),
    path('generic/user/', views.GenericUserAPIViewsGETPOST.as_view()),
    path('auth/', obtain_auth_token),
    path('upload-csv/', views.indicareur_upload),
    path('user_login/', views.user_login)
]

