from django.db import models

# Create your models here.
class Student(models.Model):
    sName = models.CharField(max_length=50,null=True,blank=True)
    email = models.EmailField(null=True,blank=True)
    age = models.IntegerField()
    active=models.BooleanField()
    createdTime=models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
           return self.sName
