from django.shortcuts import render
from rest_framework import mixins
from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView


from .serializers import UserSerializer, CustomTokenObtainPairSerializer

# Create your views here.
class RegisterView(mixins.CreateModelMixin, generics.GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

