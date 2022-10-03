from django.urls import path
from . import views

urlpatterns = [
    path('getRepository/', views.GetRepositoryData.as_view(),
         name='getRepositoryData'),
]
