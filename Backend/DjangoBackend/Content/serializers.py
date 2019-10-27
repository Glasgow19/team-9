from rest_framework import serializers
from Content.models import Subject, Content, Article, Event


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['id', 'name']


class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['id', 'content_type', 'subjects', 'created']


class ArticleSerializer(serializers.ModelSerializer):
    title_picture_url = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ['id', 'subjects', 'created', 'title', 'title_picture', 'title_picture_url', 'text']

    def get_title_picture_url(self, article):
        request = self.context.get('request')
        return request.scheme + "://" + request.META['HTTP_HOST'] + '/' + article.title_picture.url


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'subjects', 'created', 'title', 'description', 'date_time']
