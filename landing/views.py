# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
class landingview():
    def get(self, request, **kwargs):
        # pdb.set_trace()
        return render(request, 'index.html', context=None)
