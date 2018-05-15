# landing/urls.py
from django.conf.urls import url
from django.conf.urls.static import static
from imageupload import views

urlpatterns = [
    url(r'^$', views.landingview.as_view(),name='home'),
]
