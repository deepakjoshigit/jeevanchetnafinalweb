import React, { useState } from 'react';
import { RAZORPAY_KEY_ID } from '../constants';

interface RazorpayButtonProps {
  amount?: number; // Optional: if predefined
  className?: string;
  label?: string;
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({ 
  amount: initialAmount, 
  className = "", 
  label = "Donate Now" 
}) => {
  const [loading, setLoading] = useState(false);
  const [customAmount, setCustomAmount] = useState<string>(initialAmount ? initialAmount.toString() : "");
  const [showModal, setShowModal] = useState(false);

  // User details state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handlePayment = () => {
    if (!name || !email || !phone || !customAmount) {
      alert("Please fill all details");
      return;
    }

    setLoading(true);

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: parseFloat(customAmount) * 100, // Amount in paise
      currency: "INR",
      name: "Jeevan Chetna Foundation",
      description: "Donation for Social Welfare",
      image: "https://picsum.photos/200/200", // Using placeholder, in prod use real logo URL
      handler: function (response: any) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        setLoading(false);
        setShowModal(false);
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        address: "JCF Head Office",
      },
      theme: {
        color: "#15803d",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response: any) {
      alert("Payment Failed: " + response.error.description);
      setLoading(false);
    });
    
    rzp1.open();
  };

  if (showModal) {
    return (
      <>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative animate-fade-in">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold text-jcf-blue mb-6">Make a Donation</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₹)</label>
                <input 
                  type="number" 
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-jcf-green focus:border-transparent outline-none"
                  placeholder="Enter amount"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-jcf-green"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-jcf-green"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-jcf-green"
                  placeholder="Mobile Number"
                />
              </div>

              <button 
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-jcf-green hover:bg-green-700 text-white font-bold py-3 rounded-lg transition shadow-lg mt-4 disabled:opacity-50"
              >
                {loading ? 'Processing...' : `Donate ₹${customAmount || '0'}`}
              </button>

              <div className="text-xs text-center text-gray-500 mt-2">
                Secured by Razorpay. 80G Tax Exemption available.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <button 
      onClick={() => setShowModal(true)}
      className={className}
    >
      {label}
    </button>
  );
};

export default RazorpayButton;