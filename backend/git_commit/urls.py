from django.urls import path
from . import views

urlpatterns = [
    path('getCommit/<int:pk>', views.GetCommitData.as_view(),
         name='getCommitData'),
    path('getComment/<int:pk>', views.GetCommentData.as_view(),
         name='getCommentData')
]
