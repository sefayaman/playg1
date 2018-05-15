# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class landingview(TemplateView):
    def get(self, request, **kwargs):
        # pdb.set_trace()
        return render(request, 'landing.html', context=None)
