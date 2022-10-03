from django.contrib import admin
from .models import Commit

class CommitAdmin(admin.ModelAdmin):
    list_display = ('commit_repository_id', 'commit_id',
                    'committer_name', 'committer_email', 'commit_date', 
                    'commit_message', 'commit_total_comment','commit_url')

admin.site.register(Commit, CommitAdmin)
