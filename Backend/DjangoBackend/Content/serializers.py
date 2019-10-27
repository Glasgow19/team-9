from rest_framework import serializers
from Content.models import Content, Article, Event


class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['id', 'content_type', 'subjects', 'created']


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'subjects', 'created', 'title', 'title_picture', 'text']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'subjects', 'created', 'title', 'description', 'date_time']
