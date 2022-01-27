from django.db import models

# Create your models here.
class ToDos(models.Model):
    STATUSCHOICE = [
        ( 'Pending', 'Pending'),
        ( 'Completed', 'Completed'),
    ]

    whattodo = models.CharField(max_length=500, default="")
    is_completed = models.BooleanField(default=False)

    def __str__(self) :
        return str(self.whattodo)