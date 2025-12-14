import React from 'react';
import { MapPin, Phone, Mail, Clock, Share2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Contact: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-slate-900 mb-12">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
            <h2 className="text-2xl font-bold text-jcf-blue mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-jcf-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Head Office</h3>
                  <p className="text-slate-600 text-sm mt-1">{CONTACT_INFO.headOffice}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-jcf-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Working Address</h3>
                  <p className="text-slate-600 text-sm mt-1">{CONTACT_INFO.workingAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-50 p-3 rounded-full text-jcf-green">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Phone & WhatsApp</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    {CONTACT_INFO.phone.join(', ')} <br/>
                    <span className="text-green-600 font-medium text-xs mt-1 block">WhatsApp: +91 90685 28721</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-full text-jcf-orange">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    {CONTACT_INFO.email.join(', ')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-3 rounded-full text-slate-600">
                  <Share2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Social Media</h3>
                  <div className="mt-2">
                    <SocialMediaIcons className="flex gap-4" iconClassName="w-6 h-6 fill-slate-600 hover:fill-jcf-blue transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-jcf-blue outline-none" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-jcf-blue outline-none" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-jcf-blue outline-none" placeholder="Inquiry about..." required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-jcf-blue outline-none h-32" placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-jcf-blue hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;