# Generated by Django 2.2 on 2019-04-17 13:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('beer_app', '0003_beer_style'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='reviews',
        ),
        migrations.AddField(
            model_name='review',
            name='author',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='beer_app.User'),
            preserve_default=False,
        ),
    ]
