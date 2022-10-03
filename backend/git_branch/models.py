from email.policy import default
from django.db import models
from git_repository.models import Repository

class Branch(models.Model):
    branch_repository_id = models.ForeignKey(
        Repository, on_delete=models.CASCADE)
    branch_name = models.CharField(max_length=200)
    branch_commit = models.CharField(max_length=200)
    branch_protected = models.BooleanField(default=False)

    def __str__(self):
        return '{}'.format(self.branch_name)
