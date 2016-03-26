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
	date = models.DateField(blank=True, null=True)
	description = models.TextField()
	genre = models.CharField(max_length=50, null=True)
	location = models.CharField(max_length=150, null=True)

	def __unicode__(self):
		return self.title


class Multimedia(models.Model):
	artifact = models.ForeignKey(Artifact, on_delete=models.CASCADE)
	image = models.ImageField(upload_to='media')
	mineType = models.CharField(max_length=20)


