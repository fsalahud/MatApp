from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from django.http import JsonResponse
from django.core import serializers
from django.core.urlresolvers import reverse

import json
import os

from .models import Artist, Artifact, Multimedia, AudioFile

# Create your views here.


def allArtists(request):
    artist_list = Artist.objects.all()
    data = serializers.serialize('json', artist_list)
    return HttpResponse(data, content_type = "application/json")

def allArtifacts(request):
    artifact_list = Artifact.objects.all()
    data = serializers.serialize('json', artifact_list)
    return HttpResponse(data, content_type = "application/json")

def getArtifact(request,id):
    artifact=Artifact.objects.filter(pk=id)
    data = serializers.serialize('json', artifact)
    return HttpResponse(data, content_type = "application/json")

def getArtist(request,id):
    artist=Artifact.objects.filter(pk=id).values('artist')
    artist=Artist.objects.filter(id=artist)
    data = serializers.serialize('json', artist)
    return HttpResponse(data, content_type = "application/json")



def getImage(request,id):
    img = Multimedia.objects.filter(artifact_id=id)
    data = serializers.serialize('json', img)
    return HttpResponse(data, content_type = "application/json")

def getAudio(request,id):
    audio = AudioFile.objects.filter(artifact_id=id)
    data = serializers.serialize('json', audio)
    return HttpResponse(data, content_type = "application/json")

def upView(request,id):
    artifact=Artifact.objects.get(pk=id)
    artifact.views+=1
    artifact.save()
    return HttpResponse(artifact, content_type = "application/json")

