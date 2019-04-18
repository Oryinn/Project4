from rest_framework import serializers

from .models import User, Beer, Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'beer', 'title', 'content', 'rating', 'author')

class BeerSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    class Meta:
        model = Beer
        fields = ('id', 'name', 'description', 'abv', 'style', 'reviews')

class UserSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'image_link', 'reviews')