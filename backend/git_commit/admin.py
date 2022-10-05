from django.contrib import admin
from .models import Commit, Comment

class CommitAdmin(admin.ModelAdmin):
    list_display = ('commit_repository_id', 'commit_id',
                    'committer_name', 'committer_email', 'commit_date', 
                    'commit_message', 'commit_total_comment','commit_url')

class CommentAdmin(admin.ModelAdmin):
    list_display = ('comment_commit_id', 'comment_id', 'comment_date',
                    'comment_body')

admin.site.register(Commit, CommitAdmin)
admin.site.register(Comment, CommentAdmin)
