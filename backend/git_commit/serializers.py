from rest_framework import serializers
from .models import Commit, Comment

class CommitSerializers(serializers.ModelSerializer):
    class Meta:
        model = Commit
        fields = ['id', 'commit_repository_id', 'commit_id',
                  'committer_name', 'committer_email', 'commit_date',
                  'commit_message', 'commit_total_comment', 'commit_url']

class CommentSerializers(serializers.ModelSerializer):
    class Meta:
         model = Comment
         fields = ['id', 'comment_commit_id', 'comment_id', 'comment_date',
                   'comment_body']
