from rest_framework import serializers
from MainApp.models import Subject, Content, Article, ActualUser


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['id', 'name']


class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['id', 'subjects']


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'subjects', 'title', 'text']


class ActualUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActualUser
        fields = ['id', 'favourites']
