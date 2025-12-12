import React from 'react';
import RazorpayButton from '../components/RazorpayButton';
import { LEGAL_DOCS } from '../constants';
import { CheckCircle, Landmark } from 'lucide-react';

const Donate: React.FC = () => {
  return (
    <div className="pt-8 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Make a Donation</h1>
          <p className="text-slate-600">Your support transforms lives. Thank you for your generosity.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-jcf-blue mb-4">Why Donate?</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={20} className="text-jcf-green flex-shrink-0" />
                  <span>Tax Benefits under 80G & 12A</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={20} className="text-jcf-green flex-shrink-0" />
                  <span>CSR Certified (CSR00096141)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={20} className="text-jcf-green flex-shrink-0" />
                  <span>Complete Transparency</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={20} className="text-jcf-green flex-shrink-0" />
                  <span>Direct Impact on Communities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl text-center">
               <h3 className="font-bold text-lg mb-4 text-slate-800">Choose an Amount</h3>
               <div className="grid grid-cols-2 gap-3 mb-6">
                 <RazorpayButton amount={500} label="₹500" className="bg-white border border-slate-300 hover:border-jcf-green hover:text-jcf-green py-2 rounded-lg font-medium transition" />
                 <RazorpayButton amount={1000} label="₹1000" className="bg-white border border-slate-300 hover:border-jcf-green hover:text-jcf-green py-2 rounded-lg font-medium transition" />
                 <RazorpayButton amount={2500} label="₹2500" className="bg-white border border-slate-300 hover:border-jcf-green hover:text-jcf-green py-2 rounded-lg font-medium transition" />
                 <RazorpayButton amount={5000} label="₹5000" className="bg-white border border-slate-300 hover:border-jcf-green hover:text-jcf-green py-2 rounded-lg font-medium transition" />
               </div>
               <RazorpayButton 
                  className="w-full bg-jcf-orange hover:bg-orange-700 text-white font-bold py-3 rounded-lg shadow-md transition"
                  label="Donate Custom Amount"
               />
            </div>
          </div>
        </div>

        {/* Bank Details for Direct Transfer */}
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-jcf-blue">
          <div className="flex items-center gap-2 mb-4 border-b pb-2">
            <Landmark className="text-jcf-blue" />
            <h2 className="text-xl font-bold text-slate-800">Direct Bank Transfer (NEFT/RTGS)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
             <div>
                <span className="block text-slate-500 font-medium uppercase text-xs tracking-wider">Account Name</span>
                <span className="font-bold text-slate-900 text-lg">Jeevan Chetna Foundation</span>
             </div>
             <div>
                <span className="block text-slate-500 font-medium uppercase text-xs tracking-wider">Bank Name</span>
                <span className="font-bold text-slate-900 text-lg">SBI (State Bank of India)</span>
             </div>
             <div>
                <span className="block text-slate-500 font-medium uppercase text-xs tracking-wider">Account Number</span>
                <span className="font-bold text-slate-900 font-mono text-lg">00000044208565753</span>
             </div>
             <div>
                <span className="block text-slate-500 font-medium uppercase text-xs tracking-wider">IFSC Code</span>
                <span className="font-bold text-slate-900 font-mono text-lg">SBIN0000646</span>
             </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
           <p>PAN: {LEGAL_DOCS.find(d => d.label.includes("PAN"))?.value} | CSR: {LEGAL_DOCS.find(d => d.label.includes("CSR"))?.value}</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;