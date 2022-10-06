import requests
from git_repository.models import Repository
from git_repository.serializers import RepositorySerializers
from git_authorization.models import AuthorizeUser
from rest_framework.generics import ListAPIView

def getRepository(authorize_user):
    counter_i = 0
    response = requests.get('https://api.github.com/user/repos',
                            headers={'Authorization': 'Bearer ' +
                                     authorize_user.authorization_access_token})
    repository_data = response.json()

    while(counter_i < len(repository_data)):
        data = repository_data[counter_i]

        Repository.objects.get_or_create(
            authorization_user=authorize_user,
                    repository_id=data['id'],
                    repository_name=data['name'],
                    repository_type=data['private'],
                    repository_description=data['description'],
                    repository_created=data['created_at'],
                    repository_default_branch=data['default_branch'])
        counter_i = counter_i+1

class GetRepositoryData(ListAPIView):
    
    serializer_class = RepositorySerializers

    def get_queryset(self):
        authorize_user = AuthorizeUser.objects.get(
            username=self.request.user)
        """Refreshing Database data by hitting git API"""
        getRepository(authorize_user)

        repository_data = Repository.objects.filter(
            authorization_user=authorize_user)
        return repository_data
