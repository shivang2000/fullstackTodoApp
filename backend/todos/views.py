from django.shortcuts import render
from rest_framework import viewsets

from todos.models import ToDos
from todos.serializers import ToDosSerializer

# Create your views here.
class TodoViewSet(viewsets.ModelViewSet):
    queryset = ToDos.objects.all()
    serializer_class = ToDosSerializer