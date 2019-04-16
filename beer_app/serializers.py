from rest_framework import serializers

from .models import User, Beer, Review

class BeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer
        fields = ('name', 'description', 'abv')

class ReviewSerializer(serializers.ModelSerializer):
    beer = BeerSerializer(many=True, read_only=True)
    class Meta:
        model = Review
        fields = ('beer', 'title', 'content', 'rating')

class UserSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'image_link', 'reviews')