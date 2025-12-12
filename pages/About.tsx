import React from 'react';
import { LEGAL_DOCS } from '../constants';
import { ShieldCheck, FileText } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-jcf-blue mb-8 text-center">About Jeevan Chetna Foundation</h1>
        
        <div className="prose lg:prose-xl mx-auto text-slate-600 mb-12">
          <p>
            Jeevan Chetna Foundation (JCF) is a non-profit organization registered under the Companies Act, dedicated to uplifting society through structured initiatives in education, health, and sustainable development. 
          </p>
          <p>
            Headquartered in Haldwani, Nainital, we operate with a dedicated team committed to social welfare.
            Our vision is to create a society where every individual has access to basic necessities, 
            quality education, and healthcare. We believe in transparency and accountability in all our endeavors.
          </p>
        </div>

        <div id="legal" className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
            <ShieldCheck className="w-8 h-8 text-jcf-green" />
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Legal & Compliance</h2>
              <p className="text-sm text-slate-500">We are a fully compliant and registered entity.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LEGAL_DOCS.map((doc, index) => (
              <div key={index} className="flex flex-col p-3 bg-white rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <FileText size={12} /> {doc.label}
                </span>
                <span className="font-mono text-slate-800 font-medium break-all">
                  {doc.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;