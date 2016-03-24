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
