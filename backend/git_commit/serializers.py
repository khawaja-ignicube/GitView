from rest_framework import serializers
from .models import Commit

class CommitSerializers(serializers.Serializer):
    class Meta:
        model = Commit
        fields = ['id', 'commit_repository_id', 'commit_id',
                  'committer_name', 'committer_email', 'commit_date',
                  'commit_message', 'commit_total_comment', 'commit_url']
