from rest_framework import serializers
from .models import Branch

class BranchSerializers(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = ['id', 'branch_repository_id', 'branch_name',
                  'branch_commit', 'branch_protected']
