import requests
from rest_framework.generics import ListAPIView
from git_branch.models import Branch
from git_branch.serializers import BranchSerializers
from git_authorization.models import AuthorizeUser
from git_repository.models import Repository

def getBranch(authorize_user):
    counter_i=0
    repository_data = Repository.objects.filter(
        authorization_user=authorize_user)

    """Converting repository queryset into list"""
    repository_data_list = repository_data.values(
        'id', 'repository_id', 'repository_name')
    list_result = [entry for entry in repository_data_list]

    while(counter_i < len(list_result)):
        repository_list = list_result[counter_i]
        repository_name = repository_list['repository_name']
        url = 'https://api.github.com/repos/' + authorize_user.username + '/' + repository_name + '/branches'
        
        response = requests.get(
            url,headers={'Authorization': 'Bearer '+
            authorize_user.authorization_access_token})
        branch_data = response.json()
        counter_i = counter_i+1
        counter_j=0

        while(counter_j < len(branch_data)):
            data = branch_data[counter_j]
            
            repository_instance = Repository.objects.get(
                repository_id=repository_list['repository_id'])
            Branch.objects.get_or_create(
                branch_repository_id=repository_instance,
                branch_name=data['name'],
                branch_commit=data['commit']['sha'],
                branch_protected=False)
            counter_j = counter_j+1

class GetBranchData(ListAPIView):

    serializer_class = BranchSerializers
    
    def get_queryset(self):
        authorize_user = AuthorizeUser.objects.get(
            username=self.request.user)
        """Refreshing Database data by hitting git API"""
        getBranch(authorize_user)

        pk = self.kwargs['pk']
        branch = Branch.objects.filter(branch_repository_id=pk)
        return branch
