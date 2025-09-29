/** @odoo-module **/
import { Component, useState } from "@odoo/owl";
import { mount } from "@odoo/owl";

class VendorOnboarding extends Component {
    setup() {
        this.state = useState({
            step: 1,
            formData: {
                company: '', website: '', category: '', address: '',
                contact_name: '', contact_title: '', contact_email: '', contact_phone: '',
                username: '', password: '', portal_access: false,
                avg_price: '', markets: '',
                payment_terms: '', delivery_time: '', margins: '',
                license: '', tax_id: '', billing: '',
                bank_account: '', iban: '', swift: '', bank_name: '',
            }
        });
    }

    nextStep() { if (this.state.step < 5) this.state.step++; }
    prevStep() { if (this.state.step > 1) this.state.step--; }

    async submit() {
        const res = await fetch('/vendor/onboarding/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.formData),
        });
        const result = await res.json();
        alert('Submitted! Check console.');
        console.log(result);
        this.state.step = 5;
    }
}

VendorOnboarding.template = "gw_vendor_onboarding.vendor_onboarding_template";

mount(VendorOnboarding, document.getElementById("vendor_onboarding_root"));
