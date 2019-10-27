from django.db import models
from Content.models import Content

################################################################################
# User
################################################################################
class ActualUser(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    favourites = models.ManyToManyField(Content)
