from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from django.http import JsonResponse
from django.core import serializers
from django.core.urlresolvers import reverse

import json
import os

from .models import Artist, Artifact

# Create your views here.

def helloWorld(request):
	response=JsonResponse("helloworld", safe=False)
	return response


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
