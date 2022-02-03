from django.db import router
from django.urls import path
from rest_framework import routers

from todos.views import TodoView

router = routers.SimpleRouter()
router.register(r'', TodoView)


urlpatterns = router.urls