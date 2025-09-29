{
    'name': 'GW Vendor Onboarding',
    'version': '18.0',
    'summary': 'Multi-step vendor onboarding form using Owl.js',
    'description': 'Demonstration module for vendor onboarding with Owl.js frontend',
    'author': 'Raymond Mwangi',
    'depends': ['website'],
    'data': [
        'views/vendor_onboarding_template.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'gw_vendor_onboarding/static/src/js/vendor_onboarding.js',
            'gw_vendor_onboarding/static/src/scss/vendor_onboarding.scss',
        ],
    },
    'installable': True,
    'application': False,
}
