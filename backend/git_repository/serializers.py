from rest_framework import serializers
from .models import Repository

class RepositorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Repository
        fields = ['id','authorization_user','repository_id', 'repository_name', 
                  'repository_type', 'repository_description', 'repository_created',
                  'repository_default_branch']
