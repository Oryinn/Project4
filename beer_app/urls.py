from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('users', views.UserView)
router.register('beers', views.BeerView)
router.register('reviews', views.ReviewView)


urlpatterns = [
    path('mybeers/', views.pull_beers, name="mybeer"),
    path('', include(router.urls)),
]
