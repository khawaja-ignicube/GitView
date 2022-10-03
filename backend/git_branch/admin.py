from django.contrib import admin
from .models import Branch

class BranchAdmin(admin.ModelAdmin):
    list_display = ('branch_repository_id', 'branch_name',
                    'branch_commit', 'branch_protected')

admin.site.register(Branch, BranchAdmin)