import requests
from django.shortcuts import render
from git_commit.models import Commit, Comment

from git_authorization.models import AuthorizeUser
from git_repository.models import Repository
from rest_framework.generics import ListAPIView

from git_commit.serializers import CommitSerializers, CommentSerializers


def getCommit(authorize_user):
    counter_i = 0
    authorize_user = AuthorizeUser.objects.get(
        username=authorize_user)
    repository_data = Repository.objects.filter(
        authorization_user=authorize_user)

    """Converting repository queryset into list"""
    repository_data_list = repository_data.values(
        'id', 'repository_id', 'repository_name')
    list_result = [entry for entry in repository_data_list]
    
    while(counter_i < len(list_result)):
        repository_list = list_result[counter_i]
        repository_name = repository_list['repository_name']
        url = 'https://api.github.com/repos/' + \
            authorize_user.username + '/' + repository_name + '/commits'

        response = requests.get(url, headers={
                                'Authorization': 'Bearer ' + authorize_user.authorization_access_token})
        branch_data = response.json()
        

        counter_j = 0

        while(counter_j < len(branch_data)):
            data = branch_data[counter_j]

            repository_instance = Repository.objects.get(
                repository_id=repository_list['repository_id'])
            commit_object = Commit.objects.get_or_create(
                commit_repository_id=repository_instance,
                commit_id=data['sha'],
                committer_name=data['commit']['author']['name'],
                committer_email=data['commit']['author']['email'],
                commit_date=data['commit']['author']['date'],
                commit_message = data['commit']['message'],
                commit_total_comment = data['commit']['comment_count'],
                commit_url = data['comments_url']
                )
            
            comment_count = data['commit']['comment_count']
            if(comment_count!=0):

                url = 'https://api.github.com/repos/' + \
                    authorize_user.username + '/' + repository_name + '/commits' + \
                    '/' + data['sha'] + '/comments'
                
                response = requests.get(url, headers={
                                'Authorization': 'Bearer ' + authorize_user.authorization_access_token})
                comment_data = response.json()
                counter_k=0

                while(counter_k < len(comment_data)):
                    data_comment = comment_data[counter_k]

                    commit_obj = Commit.objects.get(commit_id=data['sha'])
                
                    Comment.objects.get_or_create(
                        comment_commit_id=commit_obj,
                        comment_id=data_comment['id'],
                        comment_date=data_comment['created_at'],
                        comment_body=data_comment['body']
                    )
                    counter_k = counter_k+1
            counter_j = counter_j+1
        counter_i = counter_i+1

class GetCommitData(ListAPIView):

    serializer_class = CommitSerializers

    def get_queryset(self):
        authorize_user = AuthorizeUser.objects.get(
            username=self.request.user)
        """Refreshing Database data by hitting git API"""
        getCommit(authorize_user)

        pk = self.kwargs['pk']
        commit = Commit.objects.filter(commit_repository_id=pk)
        return commit

class GetCommentData(ListAPIView):

    serializer_class = CommentSerializers

    def get_queryset(self):
        pk=self.kwargs['pk']
        comment = Comment.objects.filter(comment_commit_id=pk)
        return comment