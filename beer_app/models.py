from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.


class Beer(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=2000)
    abv = models.DecimalField(max_digits=3, decimal_places=1)
    style = models.CharField(max_length=255, default='beer')
    
    def __str__(self):
        return self.name

class User(models.Model):
    username = models.CharField(max_length=255)
    email = models.EmailField(max_length=64)
    password = models.CharField(max_length=400)
    image_link = models.CharField(max_length=255)

    def __str__(self):
        return self.username
        
class Review(models.Model):
    beer = models.ForeignKey(Beer, on_delete=models.CASCADE, related_name='beers')
    title = models.CharField(max_length=64)
    content = models.CharField(max_length=600)
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews')
    def __str__(self):
        return self.title

        