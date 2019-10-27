from Content.models import Subject, Content, Article, Event
from Content.serializers import SubjectSerializer, ContentSerializer, ArticleSerializer, EventSerializer

from DjangoBackend.router import MyOwnViewSet


class SubjectViewSet(MyOwnViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer


class ContentViewSet(MyOwnViewSet):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer


class ArticleViewSet(MyOwnViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class EventViewSet(MyOwnViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
