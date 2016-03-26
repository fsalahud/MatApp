from django.contrib import admin

# Register your models here.

from .models import Artist, Artifact, Multimedia

admin.site.register(Artist)
admin.site.register(Artifact)
admin.site.register(Multimedia)
