import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Heart } from 'lucide-react';
import Logo from './Logo';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';
import SocialMediaIcons from './SocialMediaIcons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-jcf-blue text-white py-2 px-4 text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2">
              <Phone size={14} /> {CONTACT_INFO.phone[0]}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> {CONTACT_INFO.email[0]}
            </span>
          </div>
          <div className="flex items-center space-x-6">
             <SocialMediaIcons className="flex gap-3" iconClassName="w-3.5 h-3.5 fill-white hover:fill-jcf-orange transition-colors" />
             <span className="opacity-50">|</span>
             <span>Reg. No: UK/20250681855</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-jcf-orange ${
                  location.pathname === item.path ? 'text-jcf-blue font-bold' : 'text-slate-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="bg-jcf-green hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Heart size={18} fill="white" />
              Donate Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-jcf-blue hover:bg-slate-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="py-3 px-3">
              <p className="text-xs text-slate-400 mb-2 font-semibold uppercase">Connect With Us</p>
              <SocialMediaIcons className="flex gap-4" iconClassName="w-5 h-5 fill-slate-600 hover:fill-jcf-blue" />
            </div>
            <Link
              to="/donate"
              className="block mt-4 text-center bg-jcf-green text-white px-3 py-3 rounded-md font-bold"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;