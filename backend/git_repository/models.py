from django.db import models
from git_authorization.models import AuthorizeUser

class Repository(models.Model):
    authorization_user = models.ForeignKey(
        AuthorizeUser, on_delete=models.CASCADE, related_name='AuthorizeUser')
    repository_id = models.IntegerField(default=0)
    repository_name = models.CharField(max_length=200)
    repository_type = models.BooleanField(default=False)
    repository_description = models.TextField(null=True,max_length=500)
    repository_created = models.DateTimeField()
    repository_default_branch = models.CharField(max_length=200)

    def __str__(self):
        return '{}'.format(self.repository_name)
