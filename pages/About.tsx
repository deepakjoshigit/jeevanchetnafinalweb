import React from 'react';
import { LEGAL_DOCS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-jcf-blue mb-8 text-center">About Jeevan Chetna Foundation</h1>
        
        <div className="prose lg:prose-xl mx-auto text-slate-600 mb-12">
          <p>
            Jeevan Chetna Foundation (JCF) is a non-profit organization registered under the Companies Act. 
            Headquartered in Haldwani, Nainital, we operate with a dedicated team committed to social welfare 
            and community development.
          </p>
          <p>
            Our vision is to create a society where every individual has access to basic necessities, 
            quality education, and healthcare. We believe in transparency and accountability in all our endeavors.
          </p>
        </div>

        <div id="legal" className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            Legal & Compliance Information
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {LEGAL_DOCS.map((doc, index) => (
                  <tr key={index} className="border-b border-slate-200 last:border-0 hover:bg-white transition">
                    <td className="py-3 px-4 font-semibold text-slate-700 w-1/3">{doc.label}</td>
                    <td className="py-3 px-4 text-slate-600 font-mono text-sm">{doc.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;