from django.db import models

# Create your models here.
class Food(models.Model):
    name = models.CharField(max_length=200)
    listName = models.CharField(max_length=50)
    price = models.FloatField()
    image = models.ImageField(null=True, blank=True)
    description = models.CharField(max_length=1500)

    def __str__(self):
        return self.name
