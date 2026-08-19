// src/Components/HomeComponents/AboutSection.jsx
import React from 'react';
import { FiCalendar, FiMapPin, FiUsers, FiTarget, FiEye } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <section className="relative z-20 bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Heading & Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#1279CF] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <span className="text-[#F8C54E]">✦</span>
            <span>About Our Association</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Uttar Pradesh Event Management Association – <span className="text-[#1279CF]">UPEMA</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Strengthening Event & Wedding Industry Standards Through Networking, Innovation & Growth across Uttar Pradesh
          </p>
        </div>

        {/* 2-Column Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: 3 Quick Info Cards (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            
            {/* Card 1 */}
            <div className="bg-slate-50/70 border border-slate-200/80 hover:border-[#1279CF]/50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-10 h-10 mx-auto rounded-full bg-blue-50 text-[#1279CF] flex items-center justify-center mb-3 group-hover:bg-[#1279CF] group-hover:text-white transition-colors duration-300">
                <FiCalendar className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Association Launched
              </span>
              <h3 className="text-2xl font-bold text-[#1279CF] mt-1">
                May 31, 2025
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Inaugurated in Lucknow
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50/70 border border-slate-200/80 hover:border-[#1279CF]/50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 text-[#d49a24] flex items-center justify-center mb-3 group-hover:bg-[#F8C54E] group-hover:text-slate-900 transition-colors duration-300">
                <FiMapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Coverage Area
              </span>
              <h3 className="text-2xl font-bold text-[#1279CF] mt-1">
                Uttar Pradesh
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Lucknow, Noida, Varanasi & Beyond
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50/70 border border-slate-200/80 hover:border-[#1279CF]/50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-10 h-10 mx-auto rounded-full bg-blue-50 text-[#1279CF] flex items-center justify-center mb-3 group-hover:bg-[#1279CF] group-hover:text-white transition-colors duration-300">
                <FiUsers className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Fraternity Leadership
              </span>
              <h3 className="text-2xl font-bold text-[#1279CF] mt-1">
                Executive Body
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Unified Voice & Trade Advocacy
              </p>
            </div>

          </div>

          {/* Right Column: Narrative & Mission/Vision (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-8">
            
            {/* Descriptive Content */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">Uttar Pradesh Event Management Association (UPEMA)</strong> is the apex trade body launched on <strong className="text-slate-900 font-semibold">May 31, 2025</strong> in Lucknow, dedicated to empowering and unifying the vibrant event, wedding planning, and entertainment ecosystem across the state.
              </p>
              
              <p>
                The association brings together industry pioneers — including wedding planners, experiential event firms, decor fabricators, production houses, sound and light engineers, and venue stakeholders. UPEMA works tirelessly to standardize fair trade practices, ensure safety and licensing protocols, provide advanced skill development, and promote Uttar Pradesh as a world-class destination for luxury weddings and summits.
              </p>

              <p>
                Through state-wide networking conclaves, vendor collaborations, and policy advocacy with regulatory bodies, UPEMA acts as the trusted collective voice fostering business sustainability and economic growth for all members.
              </p>
            </div>

            {/* Bottom 2-Box Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              {/* Mission Box */}
              <div className="p-6 rounded-xl bg-blue-50/50 border border-blue-100 hover:border-[#1279CF]/40 transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-3 text-[#1279CF]">
                  <FiTarget className="w-5 h-5" />
                  <h4 className="text-base font-bold uppercase tracking-wider">Our Mission</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To elevate operational standards, foster fair business ethics, provide continuous learning, and build unified collaboration across the event and wedding management ecosystem of Uttar Pradesh.
                </p>
              </div>

              {/* Vision Box */}
              <div className="p-6 rounded-xl bg-amber-50/40 border border-amber-200/60 hover:border-[#F8C54E] transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-3 text-[#d49a24]">
                  <FiEye className="w-5 h-5" />
                  <h4 className="text-base font-bold uppercase tracking-wider text-slate-900">Our Vision</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To establish Uttar Pradesh as the country's most preferred, world-class hub for destination weddings, luxury celebrations, and mega corporate conventions with standardized industry benchmarks.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;