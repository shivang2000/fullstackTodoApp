from django.shortcuts import render
from rest_framework import mixins
from rest_framework import generics

from .serializers import UserSerializer

# Create your views here.
class RegisterView(mixins.CreateModelMixin, generics.GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)