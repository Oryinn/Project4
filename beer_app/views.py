from rest_framework import viewsets
from django.http import JsonResponse
from .serializers import UserSerializer, BeerSerializer, ReviewSerializer
from .models import User, Beer, Review
from django.shortcuts import render
import json
import requests

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class BeerView(viewsets.ModelViewSet):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer

class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


def pull_beers(request):
    response = requests.get('https://sandbox-api.brewerydb.com/v2/beers?key=API_KEY&?format=json')
    json_dict = json.loads(response.text)
    return JsonResponse(json_dict)



    
    