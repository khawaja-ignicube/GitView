from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator
from rest_framework import serializers
from .models import AuthorizeUser

class CreateUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True,
                                   validators=[UniqueValidator(queryset=AuthorizeUser.objects.all())])
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = AuthorizeUser
        fields = (
            'id', 'username', 'password', 'password2', 'email','first_name',
            'authorization_user_id', 'authorization_access_token')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = AuthorizeUser.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            authorization_user_id=validated_data['authorization_user_id'],
            authorization_access_token=validated_data['authorization_access_token'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
