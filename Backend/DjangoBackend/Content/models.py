from django.db import models


class Subject(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Content(models.Model):
    subjects = models.ManyToManyField(Subject, blank=True)
    created = models.DateTimeField(auto_now_add=True)

    @property
    def content_type(self):
        try:
            if self.article:
                return 'A'
        except:
            pass
        try:
            if self.event:
                return 'E'
        except:
            pass
        try:
            if self.quiz:
                return 'Q'
        except:
            pass
        try:
            if self.media:
                return 'M'
        except:
            pass
        return 'U'

    def __str__(self):
        desc = ''
        if self.content_type == 'A':
            desc = self.article.title
        elif self.content_type == 'E':
            desc = self.event.title
        elif self.content_type == 'Q':
            desc = self.quiz.title
        elif self.content_type == 'M':
            desc = self.media.title
        return "[" + self.content_type + "] "+ desc


################################################################################
# Content types
################################################################################
# Article
class Article(Content):
    title = models.CharField(max_length=100)
    title_picture = models.ImageField(upload_to="static/upload_pictures/%Y/%m/%d/%H:%M:%S", blank=True)
    text = models.TextField()

# Event
class Event(Content):
    title = models.CharField(max_length=100)
    description = models.TextField()
    date_time = models.DateTimeField()

# Quiz
class Answer(models.Model):
    text = models.CharField(max_length=50)
    question = models.ForeignKey('Question', related_name="possibilities", on_delete=models.CASCADE)

class Question(models.Model):
    # possibilities
    correct_answer = models.OneToOneField(Answer, on_delete=None, related_name="mother_question")

class Quiz(Content):
    title = models.CharField(max_length=100)
    questions = models.ManyToManyField(Question)

# Media and it's subtypes
class Media(Content):
    media_type = "M"
    description = models.CharField(max_length=100)

class Image(Media):
    media_type = "I"
    the_image = models.ImageField()

