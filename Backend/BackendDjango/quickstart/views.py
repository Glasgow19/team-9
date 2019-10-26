from rest_framework import viewsets
from quickstart.serializers import PersonSerializer, ThingSerializer
from quickstart.models import Person, Thing


class PersonViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class ThingViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Thing.objects.all()
    serializer_class = ThingSerializer
