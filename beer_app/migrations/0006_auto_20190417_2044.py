# Generated by Django 2.2 on 2019-04-17 20:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('beer_app', '0005_auto_20190417_1918'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='beer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='beer', to='beer_app.Beer'),
        ),
    ]
