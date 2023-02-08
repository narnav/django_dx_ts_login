from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('test/', views.test),
    path('pri/', views.test_pri),
    path('student/', views.StudentView.as_view()),
     path('student/<pk>', views.StudentView.as_view()),
    path('login/', views.MyTokenObtainPairView.as_view()),
]
