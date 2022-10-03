import imp
from rest_framework import generics
from rest_framework.permissions import AllowAny
from git_authorization.serializers import CreateUserSerializer


class CreateUserView(generics.CreateAPIView):

    permission_classes = (AllowAny,)
    serializer_class = CreateUserSerializer
