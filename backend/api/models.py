from django.db import models
from django.contrib.auth.models import User
from django.db import models
# Create your models here.

class Notes(models.Model):
    author = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'notes')
    title = models.CharField(max_length = 255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.author.username + ":" + self.title