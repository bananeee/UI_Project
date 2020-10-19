from . import views
from django.urls import path

urlpatterns = [
    path('', views.index, name="home"),
    path('menu/', views.menu, name="menu"),
    path('form/', views.form, name="form"),
]
