from ActualUsers.models import ActualUser
from ActualUsers.serializers import ActualUserSerializer

from DjangoBackend.router import MyOwnViewSet


class ActualUserViewSet(MyOwnViewSet):
    queryset = ActualUser.objects.all()
    serializer_class = ActualUserSerializer
