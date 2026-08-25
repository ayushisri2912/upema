// src/pages/MemberShip/ApplyForMembership.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { FiUser, FiMail, FiPhone, FiHome, FiMapPin, FiArrowRight, FiCheck } from 'react-icons/fi';

const districtsList = [
  'Lucknow',
  'Kanpur Nagar',
  'Agra',
  'Varanasi',
  'Gautam Buddha Nagar (Noida)',
  'Ghaziabad',
  'Prayagraj',
  'Gorakhpur',
  'Bareilly',
  'Aligarh',
  'Meerut',
  'Jhansi',
  'Ayodhya',
  'Mathura',
  'Moradabad',
  'Saharanpur',
  'Muzaffarnagar',
  'Other UP District'
];

const categoriesList = [
  'Corporate Event Agency',
  'Wedding Planning & Decor',
  'Sound, Light & AV Production',
  'Stagecraft & Truss Fabrication',
  'Venue / Resort / Banquet Property',
  'Catering & Hospitality Services',
  'Artist & Talent Management',
  'Logistics & Infrastructure Supplier',
  'Other Event Service Provider'
];

const ApplyForMembership = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    companyName: '',
    category: 'Corporate Event Agency',
    district: 'Lucknow',
    city: '',
    address: '',
    message: '',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      Swal.fire({
        icon: 'warning',
        title: 'Terms & Conditions',
        text: 'Please accept the Terms & Conditions to proceed with your application.',
        confirmButtonColor: '#0F2747'
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      Swal.fire({
        icon: 'success',
        title: 'Application Submitted!',
        html: `
          <div style="text-align: left; font-size: 14px; color: #475569; line-height: 1.6;">
            <p>Thank you <strong>${formData.fullName}</strong>. Your membership application for <strong>${formData.companyName}</strong> has been received.</p>
            <br/>
            <p style="background: #F0F6FB; padding: 12px; border-radius: 8px; border-left: 4px solid #1279CF;">
              Our team will review your application and contact you shortly via <strong>${formData.email}</strong>.
            </p>
          </div>
        `,
        confirmButtonText: 'Return to Membership Page',
        confirmButtonColor: '#0F2747'
      }).then(() => {
        navigate('/membership');
      });
    }, 1200);
  };

  return (
    <div className="bg-slate-50 font-sans min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-slate-900 selection:bg-[#C9A45C] selection:text-white">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Title & Short Description */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1279CF] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <span>🏛️ UPEMA ACCREDITATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D2238] tracking-tight">
            Apply for Membership
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mt-2 leading-relaxed">
            Join Uttar Pradesh's apex trade council for event management professionals. Complete the simple form below to submit your application.
          </p>
        </motion.div>

        {/* Centered Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-slate-200/80 shadow-xl p-6 sm:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <FiUser className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:border-[#1279CF] focus:ring-2 focus:ring-[#1279CF]/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:border-[#1279CF] focus:ring-2 focus:ring-[#1279CF]/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <FiPhone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:border-[#1279CF] focus:ring-2 focus:ring-[#1279CF]/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <FiHome className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter company or agency name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:border-[#1279CF] focus:ring-2 focus:ring-[#1279CF]/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Business Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Business Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:border-[#1279CF] focus:ring-2 focus:ring-[#1279CF]/20 focus:outline-none transition-all cursor-pointer"
                >
                  {categoriesList.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* District */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  District <span className="text-red-500">*</span>
                </label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:border-[#1279CF] focus:ring-2 focus:ring-[#1279CF]/20 focus:outline-none transition-all cursor-pointer"
                >
                  {districtsList.map((dist, idx) => (
                    <option key={idx} value={dist}>{dist}</option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <FiMapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter city or town name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:border-[#1279CF] focus:ring-2 focus:ring-[#1279CF]/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Office Address */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Office Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  rows="3"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter complete office address..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:border-[#1279CF] focus:ring-2 focus:ring-[#1279CF]/20 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Message (Optional) */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Message <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any additional information or comments..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:border-[#1279CF] focus:ring-2 focus:ring-[#1279CF]/20 focus:outline-none transition-all resize-none"
                />
              </div>

            </div>

            {/* Checkbox for Terms & Conditions */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#1279CF] focus:ring-[#1279CF] cursor-pointer"
                />
                <span className="text-xs sm:text-sm text-slate-600 leading-normal">
                  I confirm that the information provided is accurate and I agree to the UPEMA Membership Terms.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4A359] via-[#C2934A] to-[#B5833B] hover:from-[#e2b56e] hover:to-[#a0732e] text-[#071322] font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-98 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <FiArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center mt-3">
                Our team will review your application and contact you shortly.
              </p>
            </div>

          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default ApplyForMembership;
