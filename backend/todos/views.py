from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from todos.models import ToDos
from todos.serializers import ToDosSerializer
from account.models import CustomUser
from rest_framework.exceptions import NotAuthenticated
from .models import  ToDos

# Create your views here.
class TodoView(viewsets.ModelViewSet):
    queryset = ToDos.objects.all()
    serializer_class = ToDosSerializer
    permission_classes  = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            queryset = ToDos.objects.filter(user=CustomUser.objects.filter(username=request.user)[0])
            serializer = ToDosSerializer(queryset, many=True)
            return Response(serializer.data)
        else :
            raise NotAuthenticated('User not authenticated')

    def get_queryset(self):
        # if self.request.user.is_authenticated:
        #     return ToDos.objects.filter(user=CustomUser.objects.filter(username=self.request.user)[0])
        # else :
        #     return super().get_queryset()

        return ToDos.objects.filter(user=CustomUser.objects.filter(username=self.request.user)[0])


    def create(self, request, *args, **kwargs):
        print('here')
        print('request', request.user)
        todo = ToDosSerializer(data=request.data)
        if todo.is_valid():
            todo.save(user=CustomUser.objects.filter(username=request.user)[0])
            print('todo',todo)
            return Response(todo.data)
        return Response(todo.errors)

    def retrieve(self, request, *args, **kwargs):
        # if request.user.is_authenticated:
        #     return super().retrieve(request, *args, **kwargs)
        # else :
        #     raise NotAuthenticated('User not authenticated')

        return super().retrieve(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        # if request.user.is_authenticated:
        #     return super().update(request, *args, **kwargs)
        # else :
        #     raise NotAuthenticated('User not authenticated')

        return super().update(request, *args, **kwargs)