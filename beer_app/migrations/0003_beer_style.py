# Generated by Django 2.2 on 2019-04-16 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beer_app', '0002_user_reviews'),
    ]

    operations = [
        migrations.AddField(
            model_name='beer',
            name='style',
            field=models.CharField(default='beer', max_length=255),
        ),
    ]
