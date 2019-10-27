from rest_framework import serializers
from ActualUsers.models import ActualUser

class ActualUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActualUser
        fields = ['id', 'username', 'password', 'favourites']
