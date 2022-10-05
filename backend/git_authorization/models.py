from django.db import models
from django.contrib.auth.models import AbstractUser

class AuthorizeUser(AbstractUser):
    authorization_user_id = models.CharField(max_length=200)
    authorization_access_token = models.CharField(max_length=200)

    def __str__(self):
        return '{}'.format(self.username)
