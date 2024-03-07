from django.shortcuts import render
from openai import OpenAI
from dotenv import load_dotenv
import os
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Chat
from django.contrib.auth.models import User
import json
from rest_framework.views import APIView , Response
from rest_framework import status
from .serializers import ChatSerializer

class AIChat(APIView):

    def get(self , request , *args , **kwargs):
        return Response(status=status.HTTP_200_OK)

    def post(self , request , *args , **kwargs):

        data = json.loads(request.body)
            
        key_activities = data.get('key-activities')
        key_resources = data.get('key-resources')
        value_proposition = data.get('value-proposition')
        customer_segments = data.get('customer-segments')

        # Define the URL and payload
        url = "https://open-ai21.p.rapidapi.com/conversationgpt35"
        payload = {
            "messages": [
                
                    {"role": "user", "content": f"Key Activities: {key_activities}"},
                    {"role": "user", "content": f"Key Resources: {key_resources}"},
                    {"role": "user", "content": f"Value Proposition: {value_proposition}"},
                    {"role": "user", "content": f"Customer Segments: {customer_segments}"}
                
            ],
            "web_access": False,
            "system_prompt": "",
            "temperature": 0.9,
            "top_k": 5,
            "top_p": 0.9,
            "max_tokens": 256
        }
        headers = {
            "content-type": "application/json",
            "X-RapidAPI-Key": "1087d2a555msh9a746609943dfc0p113ca6jsn74860a2c3f73",
            "X-RapidAPI-Host": "open-ai21.p.rapidapi.com"
        }

        # Send POST request to OpenAI API
        response = requests.post(url, json=payload, headers=headers)
        response = response.json()
        user_input = key_activities + key_resources + customer_segments + value_proposition
        print(response)
        result = response['message']

        user = User.objects.get(username = 'admin')
        data = {
            'user' : user.pk,
            'prompt' : user_input,
            'result' : result
        }
      
        serializer = ChatSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

# @csrf_exempt
# def openai_conversation(request):
#     if request.method == 'POST':
#         # Retrieve user input from the request data
#         # user_input = request.POST.get('user-input')

#         # key_activities = request.POST.get('key-activities')
#         # key_resources = request.POST.get('key-resources')
#         # value_proposition = request.POST.get('value-proposition')
#         # customer_segments = request.POST.get('customer-segments')

#         data = json.loads(request.body)
            
#             # Extract parameters from the JSON data
#         key_activities = data.get('key-activities')
#         key_resources = data.get('key-resources')
#         value_proposition = data.get('value-proposition')
#         customer_segments = data.get('customer-segments')

#         print(key_activities , key_resources , value_proposition , customer_segments)

#         # Define the URL and payload
#         url = "https://open-ai21.p.rapidapi.com/conversationgpt35"
#         payload = {
#             "messages": [
                
#                     {"role": "user", "content": f"Key Activities: {key_activities}"},
#                     {"role": "user", "content": f"Key Resources: {key_resources}"},
#                     {"role": "user", "content": f"Value Proposition: {value_proposition}"},
#                     {"role": "user", "content": f"Customer Segments: {customer_segments}"}
                
#             ],
#             "web_access": False,
#             "system_prompt": "",
#             "temperature": 0.9,
#             "top_k": 5,
#             "top_p": 0.9,
#             "max_tokens": 256
#         }
#         headers = {
#             "content-type": "application/json",
#             "X-RapidAPI-Key": "1087d2a555msh9a746609943dfc0p113ca6jsn74860a2c3f73",
#             "X-RapidAPI-Host": "open-ai21.p.rapidapi.com"
#         }

#         # Send POST request to OpenAI API
#         response = requests.post(url, json=payload, headers=headers)
#         response = response.json()

        

#         result = response['result']

#         modified_response = result.replace('\n', '.').replace('<</INT>', '').replace('<</COST>', '')

#         # Chat.objects.create(user = User.objects.get(username = 'admin') , prompt = key_activities + key_resources + value_proposition + customer_segments , result = result)
#         # Return JSON response from OpenAI API
#         return JsonResponse(modified_response , safe=False)

#         # context = {
#         #     'result' : result,
#         # }

#         # return render(request , 'chat/chat.html' , context)

#     else:
#         # return render(request , 'chat/chat.html')
#         # Return an error response if the request method is not POST
#         return JsonResponse({'error': 'Only POST requests are allowed.'}, status=405)

# load_dotenv()
# OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

# print(OPENAI_API_KEY)

# client = OpenAI(api_key=OPENAI_API_KEY)

# completion = client.chat.completions.create(
#   model="gpt-3.5-turbo",
#   messages=[
#     {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
#     {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}
#   ]
# )

# print(completion.choices[0].message)