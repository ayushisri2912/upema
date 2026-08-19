// // src/Components/HomeComponents/CTASection.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FiArrowRight, FiShield, FiUsers, FiAward, FiCheckCircle } from 'react-icons/fi';

// const CTASection = () => {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/70">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Main CTA Card with Navy-Gold Royal Theme */}
//         <div className="relative rounded-3xl bg-gradient-to-br from-[#071322] via-[#0D3B66] to-[#0A1B30] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-slate-700/80">
          
//           {/* Subtle Background Glows */}
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#1279CF]/20 rounded-full blur-[120px] pointer-events-none" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8C54E]/15 rounded-full blur-[120px] pointer-events-none" />

//           <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            
//             {/* Top Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#F8C54E]/40 text-[#F8C54E] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 backdrop-blur-md">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#F8C54E] animate-ping" />
//               <span>JOIN THE OFFICIAL FRATERNITY</span>
//             </div>

//             {/* Headline */}
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.2] mb-5">
//               Ready to Shape the Future of the <br className="hidden sm:inline" />
//               <span className="bg-gradient-to-r from-[#FFF0B3] via-[#F8C54E] to-[#E5A825] bg-clip-text text-transparent font-serif">
//                 Uttar Pradesh Event Industry?
//               </span>
//             </h2>

//             {/* Subtext */}
//             <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
//               Join 300+ leading wedding planners, luxury decor fabricators, technical sound/light rental houses, and event firms across Uttar Pradesh.
//             </p>

//             {/* 3 Value Pillars */}
//             <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-10 text-xs sm:text-sm text-slate-200 font-medium">
//               <div className="flex items-center gap-2">
//                 <FiCheckCircle className="text-[#F8C54E] w-4 h-4 flex-shrink-0" />
//                 <span>State-Wide Accreditation</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FiCheckCircle className="text-[#F8C54E] w-4 h-4 flex-shrink-0" />
//                 <span>Single-Window Advocacy</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FiCheckCircle className="text-[#F8C54E] w-4 h-4 flex-shrink-0" />
//                 <span>B2B Vendor Directory</span>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap items-center justify-center gap-4">
//               {/* Primary Gold Button */}
//               <Link
//                 to="/membership"
//                 className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#F8C54E] to-[#E5A825] hover:from-[#fada68] hover:to-[#d89b1b] text-[#0A1B30] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2.5"
//               >
//                 <span>Become A Member Today</span>
//                 <FiArrowRight className="w-4 h-4" />
//               </Link>

//               {/* Secondary Outline Button */}
//               <Link
//                 to="/contact"
//                 className="px-8 py-4 rounded-xl bg-slate-900/50 hover:bg-slate-900/80 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-slate-400/40 hover:border-[#F8C54E]/70 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
//               >
//                 <span>Contact Executive Desk</span>
//               </Link>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default CTASection;


// src/Components/HomeComponents/CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi';

// Agar aapke paas local image hai toh aise import karein:
// import ctaBg from '../../assets/images/hero1.jpg';

const CTASection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-24 sm:py-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
      style={{
        // Parallax background image (Meeting / Blueprint / Grand Venue setup)
        backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      {/* Dark Vignette Overlay over Background Image */}
      <div className="absolute inset-0 bg-[#050B14]/85 backdrop-blur-[2px]" />

      {/* Main Floating Rounded Container (Matching DSS Style) */}
      <div className="relative z-10 max-w-6xl w-full mx-auto bg-gradient-to-r from-[#071322] via-[#0A1B30] to-[#071322] border border-slate-700/70 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-2xl shadow-black/80 overflow-hidden">
        
        {/* Top-Left Ambient Amber Glow (Matching reference image) */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#F8C54E]/20 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#1279CF]/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Heading & Subtitle */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F8C54E] mb-3">
              <span>🤝</span>
              <span>LET'S GROW TOGETHER</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.2] mb-3">
              Ready to Empower Your{' '}
              <span className="bg-gradient-to-r from-[#FFF0B3] via-[#F8C54E] to-[#E5A825] bg-clip-text text-transparent">
                Event Business?
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
              From state-level advocacy and vendor tenders to networking summits, we're here to elevate your brand with trust and credibility.
            </p>
          </div>

          {/* Right Column: Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full lg:w-auto flex-shrink-0 justify-center">
            
            {/* Primary Gold Action Button */}
            <Link
              to="/membership"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#F8C54E] to-[#E5A825] hover:from-[#fada68] hover:to-[#d89b1b] text-[#0A1B30] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary Contact Outline Button */}
            <a
              href="tel:+915222345678"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900/90 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider border border-slate-600/70 hover:border-[#F8C54E]/70 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <FiPhoneCall className="w-3.5 h-3.5 text-[#F8C54E]" />
              <span>Call +91 522 234 5678</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;

