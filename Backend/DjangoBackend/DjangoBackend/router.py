from django.http import Http404

from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response


class MyOwnViewSet(ModelViewSet):
    def get_30_l(self, request):
        return self.get_n(request)

    def get_n(self, request, ordering='l', start="0", end="30"):
        if (ordering == 'l'):
            objects = self.queryset.order_by("-created")[int(start):int(end)]
        if ordering == 'p':
            raise Http404
        serializer = self.serializer_class(objects, many=True)
        return Response(serializer.data)
