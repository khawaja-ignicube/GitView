from django.urls import path
from . import views

urlpatterns = [
    path('getCommit/<int:pk>', views.GetCommitData.as_view(),
         name='getBranchData'),
]
