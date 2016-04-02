"""simpsonsapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url

from . import views

urlpatterns=[
    url(r'^helloWorld/$', views.helloWorld, name='helloWorld'),
    url(r'^allartists/$', views.allArtists, name='allArtists'),
    url(r'^allartifacts/$', views.allArtifacts, name='allArtifacts'),
    url(r'^getartifact/(?P<id>[-\w.]+)/$', views.getArtifact, name='getArtifact'),
    url(r'^getartist/(?P<id>[-\w.]+)/$', views.getArtist, name='getArtist'),
    url(r'^getimage/(?P<id>[-\w.]+)/$', views.getImage, name='getImage'),
    # url(r'^img/(?P<id>\w+)/getcomment/$', views.getComment, name='getComment'),
    # url(r'^img/(?P<id>\w+)/delimage/$', views.delImage, name='delImage'),
    # url(r'^img/(?P<id>\w+)/delcomment/$', views.delComment, name='delComment'),
    # url(r'^addimage/$', views.addImage, name='addImage'),
    # url(r'^img/(?P<id>\d+)/$', views.getImage, name='getImage'),
    # url(r'^img/(?P<id>\d+)/addcomment/$', views.addComment, name='addComment'),
    # url(r'^img/(?P<id>\d+)/adddrawing/$', views.addDrawing, name='addDrawing'),
    # url(r'^img/(?P<id>\d+)/getdrawing/$', views.getDrawing, name='getDrawing')
]
