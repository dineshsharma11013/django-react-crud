from django.db import models
from rest_framework import serializers

gender = (
    ('male', 'Male'),
    ('female', 'Female')
    )


class Enquery(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=10)
    gender = models.CharField(max_length=10, choices=gender, default=('male'))


    def __str__(self):
        return self.name


class EnquerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquery
        fields = '__all__'




