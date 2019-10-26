from django.db import models

SUBJECTS = [('M', "MATH"), ('E', "ENGLISH"), ('P', "PHYSICS")]

class Person(models.Model):
    fst_nm = models.CharField(max_length=30)
    snd_nm = models.CharField(max_length=30)
    fav_sub = models.CharField(choices=SUBJECTS, max_length=1, blank=True)


class Thing(models.Model):
    owner = models.ForeignKey(Person, on_delete=models.CASCADE)
