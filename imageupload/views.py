# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import pdb;
from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class imageuploadview(TemplateView):
    def get(self, request, **kwargs):
        # pdb.set_trace()
        return render(request, 'imageUI.html', context=None)
