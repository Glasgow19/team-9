from django.db import models


class Subject(models.Model):
    name = models.CharField(max_length=30)


class Content(models.Model):
    subjects = models.ManyToManyField(Subject)


class Article(Content):
    title = models.CharField(max_length=50)
    text = models.TextField()


class Quiz(Content):
    title = models.CharField(max_length=50)
    text = models.TextField()


class Media(Content):
    title = models.CharField(max_length=50)
    text = models.TextField()


class Event(Content):
    title = models.CharField(max_length=50)
    description = models.TextField()
    date_time = models.DateTimeField()


class ActualUser(models.Model):
    favourites = models.ManyToManyField(Content)
