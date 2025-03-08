from django.urls import path
from .views import NotesCreate, NotesDelete

urlpatterns = [
    path('notes/', NotesCreate.as_view(), name='notes_list'),
    path('notes/delete/<int:pk>/', NotesDelete.as_view(), name='notes_delete'),
]