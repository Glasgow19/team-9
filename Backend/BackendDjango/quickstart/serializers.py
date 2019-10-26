from rest_framework import serializers
from quickstart.models import Person, Thing


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'fst_nm', 'snd_nm', 'thing_set']


class ThingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thing
        fields = ['id', 'owner']
