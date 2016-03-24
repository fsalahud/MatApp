from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from django.http import JsonResponse
from django.core import serializers
from django.core.urlresolvers import reverse

import json
import os

from .models import Artist

# Create your views here.

def helloWorld(request):
	response=JsonResponse("helloworld", safe=False)
	return response


def getArtists(request):
    artist_list = Artist.objects.all()
    data = serializers.serialize('json', artist_list)
    return HttpResponse(data, content_type = "application/json")
