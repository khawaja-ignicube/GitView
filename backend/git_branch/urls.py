from django.urls import path
from . import views

urlpatterns = [
    path('getBranch/<int:pk>', views.GetBranchData.as_view(),
         name='getBranchData'),
]
