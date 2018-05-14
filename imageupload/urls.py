# imageupload/urls.py
from django.conf.urls import url
from django.conf.urls.static import static
from imageupload import views

urlpatterns = [
    url(r'^$', views.imageuploadview.as_view()),
]
