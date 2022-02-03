from django.db import models

from account.models import CustomUser

# Create your models here.
class ToDos(models.Model):
    STATUSCHOICE = [
        ( 'Pending', 'Pending'),
        ( 'Completed', 'Completed'),
    ]

    whattodo = models.CharField(max_length=500, default="")
    is_completed = models.BooleanField(default=False)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)

    def __str__(self) :
        return str(self.whattodo)