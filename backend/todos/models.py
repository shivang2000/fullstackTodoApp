from django.db import models

# Create your models here.
class ToDos(models.Model):
    STATUSCHOICE = [
        ( 'Pending', 'Pending'),
        ( 'Completed', 'Completed'),
    ]

    whattodo = models.CharField(max_length=500, default="")
    status = models.CharField(max_length=20, choices=STATUSCHOICE, default=STATUSCHOICE[0][0])

    def __str__(self) :
        return str(self.whattodo)