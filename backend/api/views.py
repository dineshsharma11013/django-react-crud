from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Enquery, EnquerySerializer


@api_view(['GET', 'POST'])
def ContactView(request):
    if request.method == 'GET':
        contact = Enquery.objects.all()
        contactSerializer = EnquerySerializer(contact, many=True)
        print(contactSerializer.data)
        return Response(contactSerializer.data)

    elif request.method == 'POST':
        print(request.data)
        contactSerializer = EnquerySerializer(data=request.data)
        if contactSerializer.is_valid():
            contactSerializer.save()
            return Response({"msg":"data inserted successfully"}, status=status.HTTP_201_CREATED)

        return Response(contactSerializer.errors)


@api_view(['GET', 'PUT','DELETE'])
def contactDetailsView(request, id):
    try:
        contact = Enquery.objects.get(id=id)
    except Enquery.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)    

    if request.method == 'GET':
        contactSerializer = EnquerySerializer(contact)
        return Response(contactSerializer.data, status=status.HTTP_200_OK)        

    elif request.method == 'PUT':
        print(request.data)
        contactSerializer = EnquerySerializer(contact ,data=request.data)
        if contactSerializer.is_valid():
            contactSerializer.save()
            return Response({"msg":"data updated successfully"}, status=status.HTTP_200_OK)
        return Response(contactSerializer.errors)
    
    elif request.method == 'DELETE':
        contact.delete()
        return Response({"msg":"data deleted successfully"}, status=status.HTTP_204_NO_CONTENT)




