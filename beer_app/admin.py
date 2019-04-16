from django.contrib import admin
from .models import User, Beer, Review
# Register your models here.

admin.site.register([User, Beer, Review])