from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'home.html')

def menu(request):
    return render(request, 'menu.html')

def form(request):
    return render(request, 'form.html')
