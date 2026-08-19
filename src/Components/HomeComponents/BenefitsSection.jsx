// // src/Components/HomeComponents/BenefitsSection.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   FiUsers, 
//   FiAward, 
//   FiShield, 
//   FiTrendingUp, 
//   FiArrowRight, 
//   FiCheckCircle 
// } from 'react-icons/fi';

// const benefits = [
//   {
//     id: 1,
//     title: 'State-Wide Trade & Vendor Networking',
//     desc: 'Connect directly with top wedding planners, luxury decor fabricators, artists, and sound/light suppliers across 25+ districts of UP.',
//     icon: FiUsers,
//   },
//   {
//     id: 2,
//     title: 'Official Certification & Industry Trust',
//     desc: 'Gain high client credibility and official recognition with verified UPEMA trade badges and state member certificates.',
//     icon: FiAward,
//   },
//   {
//     id: 3,
//     title: 'Government Representation & Policy Advocacy',
//     desc: 'Enjoy collective representation before municipal and tourism bodies for single-window event permissions, sound norms, and trade licensing.',
//     icon: FiShield,
//   },
//   {
//     id: 4,
//     title: 'Direct Business Referrals & B2B Inquiries',
//     desc: 'Access verified vendor tenders, premium event leads, inter-city equipment sharing, and corporate event listings.',
//     icon: FiTrendingUp,
//   },
// ];

// const BenefitsSection = () => {
//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-slate-100">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Centered Top Header (IPA Reference Style) */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-[#1279CF] border border-blue-200/60 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3.5">
//             <span className="text-[#F8C54E]">★</span>
//             <span>MEMBERSHIP PRIVILEGES</span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
//             Why Join <span className="text-[#1279CF]">UPEMA</span>?
//           </h2>

//           <p className="mt-3 text-slate-600 text-sm sm:text-base md:text-lg">
//             Build brand credibility, gain state-wide recognition, and unlock high-value business collaborations across Uttar Pradesh.
//           </p>
//         </div>

//         {/* 2-Column Responsive Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* LEFT 6-COLUMNS: Image with 2 Floating Stat Badges */}
//           <div className="lg:col-span-6 relative">
            
//             {/* Main Rounded Image Frame */}
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 aspect-[4/3] sm:aspect-[16/11]">
//               <img
//                 src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"
//                 alt="Event Management Strategy Meeting"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
//             </div>

//             {/* Top-Left Floating Badge (Members Count) */}
//             <div className="absolute -top-4 -left-3 sm:-top-6 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 flex flex-col items-center min-w-[120px] sm:min-w-[140px] animate-fade-in">
//               <span className="text-2xl sm:text-3xl font-extrabold text-[#1279CF] leading-tight">
//                 300+
//               </span>
//               <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
//                 Active Members
//               </span>
//             </div>

//             {/* Bottom-Right Floating Badge (Summits Count) */}
//             <div className="absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 flex flex-col items-center min-w-[120px] sm:min-w-[140px]">
//               <span className="text-2xl sm:text-3xl font-extrabold text-[#D49A24] leading-tight">
//                 15+
//               </span>
//               <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
//                 Summits / Year
//               </span>
//             </div>

//           </div>

//           {/* RIGHT 6-COLUMNS: Narrative & 4 Distinct Benefit Items */}
//           <div className="lg:col-span-6 space-y-6">
            
//             <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
//               UPEMA membership elevates your company profile, standardizes your event safety protocols, and connects you directly with the most influential trade pioneers and suppliers across Uttar Pradesh.
//             </p>

//             {/* Benefit Items List */}
//             <div className="space-y-4 pt-2">
//               {benefits.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <div 
//                     key={item.id}
//                     className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-colors group"
//                   >
//                     {/* Icon Accent */}
//                     <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1279CF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1279CF] group-hover:text-white transition-colors duration-200 shadow-sm mt-0.5">
//                       <Icon className="w-5 h-5" />
//                     </div>

//                     <div>
//                       <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1279CF] transition-colors leading-snug flex items-center gap-2">
//                         {item.title}
//                       </h3>
//                       <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Action CTA Button Row */}
//             <div className="pt-4 flex items-center gap-4">
//               <Link
//                 to="/membership"
//                 className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#1279CF] hover:bg-[#0D3B66] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200 hover:-translate-y-0.5"
//               >
//                 <span>Join UPEMA Today</span>
//                 <FiArrowRight className="w-4 h-4" />
//               </Link>

//               <Link
//                 to="/about/governing-body"
//                 className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#1279CF] uppercase tracking-wider px-4 py-3 transition-colors"
//               >
//                 <span>Learn Rules & Bylaws</span>
//                 <FiArrowRight className="w-3.5 h-3.5" />
//               </Link>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default BenefitsSection;

// src/Components/HomeComponents/BenefitsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiUsers, 
  FiAward, 
  FiShield, 
  FiTrendingUp, 
  FiArrowRight 
} from 'react-icons/fi';

const benefits = [
  {
    id: 1,
    title: 'State-Wide Trade & Vendor Networking',
    desc: 'Connect directly with top wedding planners, luxury decor fabricators, artists, and sound/light suppliers across 25+ districts of UP.',
    icon: FiUsers,
  },
  {
    id: 2,
    title: 'Official Certification & Industry Trust',
    desc: 'Gain high client credibility and official recognition with verified UPEMA trade badges and state member certificates.',
    icon: FiAward,
  },
  {
    id: 3,
    title: 'Government Representation & Policy Advocacy',
    desc: 'Enjoy collective representation before municipal and tourism bodies for single-window event permissions, sound norms, and trade licensing.',
    icon: FiShield,
  },
  {
    id: 4,
    title: 'Direct Business Referrals & B2B Inquiries',
    desc: 'Access verified vendor tenders, premium event leads, inter-city equipment sharing, and corporate event listings.',
    icon: FiTrendingUp,
  },
];

const BenefitsSection = () => {
  return (
    // <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-slate-100">
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F6FB] border-t border-blue-100/60 transition-colors duration-300">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-[#1279CF] border border-blue-200/60 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3.5">
            <span className="text-[#F8C54E]">★</span>
            <span>MEMBERSHIP PRIVILEGES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Join <span className="text-[#1279CF]">UPEMA</span>?
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base md:text-lg">
            Build brand credibility, gain state-wide recognition, and unlock high-value business collaborations across Uttar Pradesh.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT 6-COLUMNS: Image with 2 Floating Stat Badges */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Rounded Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"
                alt="Event Management Strategy Meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Top-Left Floating Badge (Members Count) */}
            <div className="absolute -top-4 -left-3 sm:-top-6 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 flex flex-col items-center min-w-[120px] sm:min-w-[140px]">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#1279CF] leading-tight">
                300+
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                Active Members
              </span>
            </div>

            {/* Bottom-Right Floating Badge (Summits Count) */}
            <div className="absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 flex flex-col items-center min-w-[120px] sm:min-w-[140px]">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#D49A24] leading-tight">
                15+
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                Summits / Year
              </span>
            </div>

          </div>

          {/* RIGHT 6-COLUMNS: Radiance-style Light Blue Rounded Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-2">
              UPEMA membership elevates your company profile, standardizes your event safety protocols, and connects you directly with the most influential trade pioneers and suppliers across Uttar Pradesh.
            </p>

            {/* Benefit Cards (Light Blue -> White on Hover) */}
            <div className="space-y-3.5">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.id}
                    className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#E8F2FA] hover:bg-white border border-[#D5E5F2] hover:border-blue-200 transition-colors duration-200 shadow-sm hover:shadow-md group cursor-pointer"
                  >
                    {/* Circle Icon Badge */}
                    <div className="w-11 h-11 rounded-full bg-[#0D3B66] text-[#F8C54E] group-hover:bg-[#1279CF] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors duration-200 shadow-sm mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1279CF] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action CTA Button Row */}
            <div className="pt-3 flex items-center gap-4">
              <Link
                to="/membership"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#1279CF] hover:bg-[#0D3B66] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200"
              >
                <span>Join UPEMA Today</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/about/governing-body"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#1279CF] uppercase tracking-wider px-4 py-3 transition-colors"
              >
                <span>Learn Rules & Bylaws</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;