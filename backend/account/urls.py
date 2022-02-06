from django.urls import path
from django.urls.conf import include
from rest_framework_simplejwt.views import TokenRefreshView

from account.views import RegisterView, CustomTokenObtainPairView

urlpatterns = [
    path('login/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
]   
