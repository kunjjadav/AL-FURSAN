import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const Contact: React.FC = () => {
  const { t, dir } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Helper function to encode form data for Netlify
  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = {
      "form-name": "contact",
      ...formState
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData)
    })
      .then(() => {
        setStatus('success');
        setFormState({ name: '', email: '', phone: '', type: 'General Inquiry', message: '' });
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setStatus('error');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Section className="bg-brand-navy text-white pt-32 pb-16" dir={dir}>
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.contact.title}</h1>
          <p className="text-xl text-gray-300">
            {t.contact.subtitle}
          </p>
        </div>
      </Section>

      <Section className="bg-brand-ivory" dir={dir}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-brand-navy text-2xl font-serif font-bold mb-6">{t.contact.getInTouch}</h3>
              <p className="text-brand-gray mb-8">
                {t.contact.getInTouchDesc}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-gold shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">{t.contact.headOffice}</h4>
                  <p className="text-brand-gray text-sm">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-gold shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">{t.contact.phone}</h4>
                  <p className="text-brand-gray text-sm">
                    <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="hover:text-brand-navy transition-colors" dir="ltr">{COMPANY_INFO.phonePrimary}</a> <br/>
                    <a href={`tel:${COMPANY_INFO.phoneSecondary}`} className="hover:text-brand-navy transition-colors" dir="ltr">{COMPANY_INFO.phoneSecondary}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-gold shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">{t.contact.email}</h4>
                  <p className="text-brand-gray text-sm">
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-navy transition-colors">{COMPANY_INFO.email}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-gold shadow-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">{t.contact.hours}</h4>
                  <p className="text-brand-gray text-sm whitespace-pre-line">
                    {t.contact.hoursDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-brand-navy mb-6">{t.contact.formTitle}</h3>
            
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg flex items-center gap-3">
                 <CheckCircle size={24} />
                 <div>
                   <p className="font-bold">{t.contact.successTitle}</p>
                   <p className="text-sm">{t.contact.successDesc}</p>
                   <button onClick={() => setStatus('idle')} type="button" className="text-sm text-green-800 underline mt-2 hover:text-green-900">{t.contact.sendAnother}</button>
                 </div>
              </div>
            ) : status === 'error' ? (
              <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg flex items-center gap-3 mb-6">
                <AlertCircle size={24} />
                 <div>
                   <p className="font-bold">{t.contact.errorTitle}</p>
                   <p className="text-sm">{t.contact.errorDesc}</p>
                   <button onClick={() => setStatus('idle')} type="button" className="text-sm text-red-800 underline mt-2 hover:text-red-900">{t.contact.tryAgain}</button>
                 </div>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6" 
                name="contact" 
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-charcoal mb-2">{t.contact.nameLabel}</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-charcoal mb-2">{t.contact.phoneLabel}</label>
                    <input 
                      required 
                      type="tel" 
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                      placeholder="+971..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-charcoal mb-2">{t.contact.emailLabel}</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-charcoal mb-2">{t.contact.typeLabel}</label>
                  <select 
                    name="type"
                    value={formState.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                  >
                    <option>{t.contact.types.general}</option>
                    <option>{t.contact.types.civil}</option>
                    <option>{t.contact.types.mep}</option>
                    <option>{t.contact.types.fitout}</option>
                    <option>{t.contact.types.maintenance}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-charcoal mb-2">{t.contact.messageLabel}</label>
                  <textarea 
                    required 
                    rows={4} 
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button type="submit" fullWidth disabled={status === 'submitting'}>
                    {status === 'submitting' ? t.contact.submitting : t.contact.submitButton}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Map iframe */}
      <div className="h-96 w-full bg-gray-200">
         <iframe 
           src="https://maps.google.com/maps?q=Al+Fursan+Contracting+LLC&t=&z=13&ie=UTF8&iwloc=&output=embed"
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen={true} 
           loading="lazy" 
           title="Al Fursan Office Map"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;