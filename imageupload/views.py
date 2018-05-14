# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class imageuploadview(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'imageUI.html', context=None)
