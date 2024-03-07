from django.urls import path
# from .views import openai_conversation

from .views import AIChat

urlpatterns = [
    path('openai/conversation/', AIChat.as_view() , name='openai_conversation'),
]
