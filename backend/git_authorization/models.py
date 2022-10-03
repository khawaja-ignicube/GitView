from django.db import models
from django.contrib.auth.models import AbstractUser

class AuthorizeUser(AbstractUser):
    authorization_public_repository = models.IntegerField(null=True)
    authorization_own_private_repository = models.IntegerField(null=True)
    authorization_total_private_repository = models.IntegerField(null=True)
    authorization_access_token = models.CharField(max_length=200)

    def __str__(self):
        return '{}'.format(self.username)
