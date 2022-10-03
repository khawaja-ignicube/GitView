from django.contrib import admin
from .models import Repository

class RepositoryAdmin(admin.ModelAdmin):
    list_display = ('authorization_user', 'repository_id', 'repository_name',
                    'repository_type', 'repository_description', 
                    'repository_created', 'repository_default_branch')

admin.site.register(Repository, RepositoryAdmin)
