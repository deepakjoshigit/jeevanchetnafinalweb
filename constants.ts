import { LegalDoc } from './types';

// Razorpay Live Key ID (Safe to expose). Secret Key must be kept on backend only.
export const RAZORPAY_KEY_ID = "rzp_live_Rn2dFscVisbwzC"; 

export const CONTACT_INFO = {
  phone: ["+91 9012146420", "+91 8958521254"],
  email: ["jeevanchetnafoundationn@gmail.com", "info@jeevanchetnafoundation.org"],
  headOffice: "Divya Ratan Colony, Gas Godam Road, Haldwani, Nainital. Pin code - 263139",
  workingAddress: "Ramari Choti, Gadhi Aashram road, Haldwani, Nainital",
};

export const SOCIAL_MEDIA = [
  { 
    id: 'facebook', 
    url: 'https://www.facebook.com/jeevanchetnafoundation', 
    label: 'Facebook' 
  },
  { 
    id: 'instagram', 
    url: 'https://www.instagram.com/jeevanchetnafoundation/', 
    label: 'Instagram' 
  },
  { 
    id: 'twitter', 
    url: 'https://x.com/ijeevanchetna', 
    label: 'X (Twitter)' 
  },
  { 
    id: 'whatsapp', 
    url: 'https://wa.me/919068528721', 
    label: 'WhatsApp' 
  },
];

export const LEGAL_DOCS: LegalDoc[] = [
  { label: "PAN Card", value: "AAGCJ9244C (9/6/2025)" },
  { label: "TAN No", value: "MRTJO5239D" },
  { label: "MCA Certificate", value: "U85500UT2025NPL019366" },
  { label: "Licence No", value: "069568" },
  { label: "SBI Bank A/C", value: "00000044208565753" },
  { label: "IFSC Code", value: "SBIN0000646" },
  { label: "Udham RG/ MSME", value: "UK-07-0038439" },
  { label: "DPIIT Startup India", value: "DIPP215092" },
  { label: "CSR Certificate", value: "CSR00096141" },
  { label: "12A Registration", value: "AAGCJ9244CE2025101" },
  { label: "80G Registration", value: "AAGCJ9244CF2025101" },
  { label: "Company MOA / INC13", value: "Available" },
  { label: "AOA", value: "Article of Association Available" },
  { label: "NGO Darpan ID", value: "UK/20250681855" },
  { label: "DIN (Pravin Kumar Pandey)", value: "11145062" },
  { label: "DIN (Deepak Joshi)", value: "11145061" },
  { label: "Rent Agreement", value: "Verified" },
  { label: "Gem Portal Reg.", value: "Registered" },
  { label: "CSR.GOV.IN", value: "Registered" },
  { label: "e-Anudaan", value: "Registered" },
];

export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Work", path: "/work" },
  { label: "Legal", path: "/about#legal" },
  { label: "Contact", path: "/contact" },
];