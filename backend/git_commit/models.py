from django.db import models
from git_repository.models import Repository

class Commit(models.Model):
    commit_repository_id = models.ForeignKey(
        Repository, on_delete=models.CASCADE)
    commit_id = models.CharField(max_length=50)
    committer_name = models.CharField(max_length=50)
    committer_email = models.EmailField()
    commit_date = models.DateTimeField()
    commit_message = models.TextField(max_length=300)
    commit_total_comment = models.IntegerField()
    commit_url = models.CharField(max_length=250)

    def __str__(self):
        return '{}'.format(self.commit_repository_id)

class Comment(models.Model):
    comment_commit_id = models.ForeignKey(
        Commit, on_delete=models.CASCADE)
    comment_id = models.CharField(max_length=100)
    comment_date = models.DateTimeField()
    comment_body = models.TextField(max_length=300)

    def __str__(self):
        return '{}'.format(self.comment_commit_id)
