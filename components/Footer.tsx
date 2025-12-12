import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_INFO, LEGAL_DOCS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Address */}
          <div className="space-y-4">
            <div className="bg-white/10 p-2 rounded-lg inline-block">
               <Logo className="text-white" />
            </div>
            <p className="text-sm leading-relaxed">
              Jeevan Chetna Foundation is dedicated to uplifting society through structured initiatives in education, health, and sustainable development.
            </p>
            <div className="space-y-2 text-sm mt-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-jcf-orange flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.headOffice}</span>
              </div>
               <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-jcf-orange flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.workingAddress}</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              {CONTACT_INFO.phone.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-jcf-green" />
                  <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-white transition">{p}</a>
                </div>
              ))}
              {CONTACT_INFO.email.map((e, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-jcf-green" />
                  <a href={`mailto:${e}`} className="hover:text-white transition break-all">{e}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates - Important for Trust */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">Registration & Compliance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {LEGAL_DOCS.map((doc, idx) => (
                <div key={idx} className="flex justify-between border-b border-slate-700 pb-1">
                  <span className="font-medium text-slate-400">{doc.label}</span>
                  <span className="text-right text-slate-200">{doc.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Jeevan Chetna Foundation. All rights reserved.</p>
          <p className="mt-2">Empowering Lives, Igniting Hope.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;