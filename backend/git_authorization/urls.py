from django.urls import path
from git_authorization import views

urlpatterns = [
    path('createUser/', views.CreateUserView.as_view(), name='createUser'),
]
