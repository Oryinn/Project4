from rest_framework import serializers

from .models import User, Beer, Review

class BeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer
        fields = ('name', 'description', 'abv', 'style')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'image_link', 'reviews')

class ReviewSerializer(serializers.ModelSerializer):
    beer = BeerSerializer(many=False, read_only=True)
    author = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Review
        fields = ('beer', 'title', 'content', 'rating', 'author')
