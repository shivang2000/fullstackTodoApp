from django.db import router
from django.urls import path
from rest_framework import routers

from todos.views import TodoViewSet

router = routers.SimpleRouter()
router.register(r'', TodoViewSet)


urlpatterns = router.urls