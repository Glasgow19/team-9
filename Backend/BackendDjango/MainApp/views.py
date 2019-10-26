from rest_framework import viewsets
from MainApp.models import Subject, Content, Article, ActualUser
from MainApp.serializers import SubjectSerializer, ContentSerializer, ArticleSerializer, ActualUserSerializer


class SubjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer


class ContentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Content.objects.all()
    serializer_class = ContentSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ActualUserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = ActualUser.objects.all()
    serializer_class = ActualUserSerializer
