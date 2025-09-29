from odoo import http
from odoo.http import request
import json

class VendorOnboarding(http.Controller):

    @http.route('/vendor/onboarding/submit', type='json', auth='public', website=True)
    def vendor_onboarding_submit(self, **kwargs):
        # For demo purposes, just echo the data back
        return {'status': 'success', 'data': kwargs}
