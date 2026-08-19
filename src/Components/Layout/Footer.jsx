// src/Components/Layout/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiSend, 
  FiChevronRight,
  FiChevronUp 
} from 'react-icons/fi';
import { 
  FaFacebookF, 
  FaXTwitter, 
  FaLinkedinIn, 
  FaInstagram 
} from 'react-icons/fa6';
import logoImg from '../../assets/images/logo.jpeg';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing to UPEMA updates!');
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07111D] text-white border-t-2 border-[#1279CF]/60 pt-10 pb-6 relative font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-8 border-b border-slate-800/80 items-start">
          
          {/* Column 1: Logo Box (3 cols) */}
          <div className="lg:col-span-3 flex justify-center md:justify-start">
            <div className="bg-white rounded-xl p-3.5 shadow-md border border-slate-200 w-full max-w-[210px] h-24 sm:h-28 flex items-center justify-center">
              <img
                src={logoImg}
                alt="UPEMA Logo"
                className="w-full h-auto max-h-20 object-contain"
              />
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 relative pb-1.5 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-[#1279CF]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-normal">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Office Bearers', path: '/executive-committee' },
                { name: 'Membership', path: '/membership' },
                { name: 'Regional Chapters', path: '/chapters' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-[#1279CF] transition-colors flex items-center gap-1.5 group whitespace-nowrap"
                  >
                    <FiChevronRight className="w-3.5 h-3.5 text-[#1279CF] group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 relative pb-1.5 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-[#1279CF]">
              Resources
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-normal">
              {[
                { name: 'Safety Circulars', path: '/news' },
                { name: 'Photo Gallery', path: '/events/gallery' },
                { name: 'Event Calendar', path: '/events' },
                { name: 'Member Directory', path: '/member-directory' },
                { name: 'Trade FAQ', path: '/faq' },
                { name: 'Admin Login', path: '/admin' },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-[#1279CF] transition-colors flex items-center gap-1.5 group whitespace-nowrap"
                  >
                    <FiChevronRight className="w-3.5 h-3.5 text-[#1279CF] group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (3 cols - Wide enough for single line text) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 relative pb-1.5 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-[#1279CF]">
              Contact Us
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <FiPhone className="w-3.5 h-3.5 text-[#1279CF] flex-shrink-0" />
                <span className="font-medium">+91 522 234 5678</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <FiMail className="w-3.5 h-3.5 text-[#1279CF] flex-shrink-0" />
                <a href="mailto:info@upema.in" className="hover:text-[#1279CF] transition-colors">
                  info@upema.in
                </a>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <FiMail className="w-3.5 h-3.5 text-[#1279CF] flex-shrink-0" />
                <a href="mailto:secretariat@upema.in" className="hover:text-[#1279CF] transition-colors">
                  secretariat@upema.in
                </a>
              </div>
              <div className="flex items-start gap-2 pt-0.5">
                <FiMapPin className="w-3.5 h-3.5 text-[#1279CF] mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed text-xs text-slate-400">
                  UPEMA State HQ, Gomti Nagar, Lucknow, UP 226010
                </span>
              </div>
            </div>
          </div>

          {/* Column 5: Newsletter (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 relative pb-1.5 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-[#1279CF]">
              Newsletter
            </h3>
            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              Subscribe for event circulars & trade updates.
            </p>

            {/* Input & Subscribe Button */}
            <form onSubmit={handleSubscribe} className="flex items-stretch mb-3.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-xs px-3 py-2 rounded-l-lg focus:outline-none focus:border-[#1279CF]"
              />
              <button
                type="submit"
                className="bg-[#1279CF] hover:bg-[#0D3B66] text-white px-3 rounded-r-lg transition-colors flex items-center justify-center flex-shrink-0"
                title="Subscribe"
              >
                <FiSend className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Round Social Buttons */}
            <div className="flex items-center gap-2">
              {[
                { icon: FaFacebookF, link: '#', label: 'Facebook' },
                { icon: FaXTwitter, link: '#', label: 'Twitter / X' },
                { icon: FaLinkedinIn, link: '#', label: 'LinkedIn' },
                { icon: FaInstagram, link: 'https://www.instagram.com/upemaofficial/', label: 'Instagram' },
              ].map((soc, i) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.label}
                    className="w-8 h-8 rounded-full bg-slate-900 hover:bg-[#1279CF] hover:text-white text-slate-400 flex items-center justify-center transition-all duration-200 border border-slate-800"
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            <p>© 2026 Uttar Pradesh Event Management Association (UPEMA). All Rights Reserved.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Reg. No: UP/ESTD/2025/LKO • State Trade Apex Body
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <Link to="/privacy-policy" className="hover:text-[#1279CF] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/terms" className="hover:text-[#1279CF] transition-colors">
              Terms of Use
            </Link>
            
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="ml-2 w-8 h-8 rounded-full bg-[#1279CF] hover:bg-[#0D3B66] text-white flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105"
            >
              <FiChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;