from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Artist(models.Model):
	firstName = models.CharField(max_length=150, blank=True, null=True)
	lastName = models.CharField(max_length=150, blank=True, null=True)
	nationality = models.CharField(max_length=150, blank=True, null=True )
	description = models.TextField(blank=True, null=True)

	def __unicode__(self):
		return self.lastName

class Artifact(models.Model):
	accessionID = models.CharField(primary_key=True, max_length=150, unique=True)
	artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
	title = models.CharField(max_length=150)
	year = models.CharField(max_length=10)
	description = models.TextField()
	genre = models.CharField(max_length=50, null=True)
	location = models.CharField(max_length=150, null=True)
	views=models.IntegerField(default=0)
	inGallery=models.BooleanField(default=True)


	def __unicode__(self):
		return self.title


class Multimedia(models.Model):
	artifact = models.ForeignKey(Artifact, on_delete=models.CASCADE)
	image = models.ImageField(upload_to='media')
	mimeType = models.CharField(max_length=20)
	def __unicode__(self):
		return self.artifact.title

class AudioFile(models.Model):
	artifact = models.ForeignKey(Artifact, on_delete=models.CASCADE)
	audio = models.FileField(upload_to='media')
	mimeType = models.CharField(max_length=20)
	def __unicode__(self):
		return self.artifact.title

