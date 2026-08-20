// src/pages/Membership/WhyBecomeMember.jsx
import React, { useState } from 'react';
import { 
  FiAward, 
  FiShield, 
  FiUsers, 
  FiTrendingUp, 
  FiCheckCircle, 
  FiFileText, 
  FiBookOpen, 
  FiArrowRight,
  FiChevronDown,
  FiStar,
  FiCheck
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CTASection from '../../Components/HomeComponents/CTASection';

const coreAdvantages = [
  {
    icon: FiShield,
    title: 'Single-Window Trade Liaison',
    desc: 'Direct administrative coordination with UP Police, Municipal Corporations, and Tourism bodies for seamless event permissions and venue NOC clearances.',
  },
  {
    icon: FiTrendingUp,
    title: 'Exclusive Verified Directory',
    desc: 'Get listed in UPEMA’s official state registry. Corporate clients, luxury wedding planners, and state departments refer directly to our verified vendor base.',
  },
  {
    icon: FiBookOpen,
    title: 'Technical Labs & Masterclasses',
    desc: 'Regular certified workshops on German truss rigging, electrical load safety, acoustic engineering, and 3D event stagecraft.',
  },
  {
    icon: FiUsers,
    title: 'Inter-City Vendor Synergy',
    desc: 'Seamless equipment sharing, emergency inventory support, and high-trust sub-contracting across 25+ major district chapters in UP.',
  },
  {
    icon: FiAward,
    title: 'Arbitration & Dispute Resolution',
    desc: 'Access to UPEMA’s legal mediation desk for unpaid payment recovery, delayed client dues, and vendor contract disputes without legal delays.',
  },
  {
    icon: FiFileText,
    title: 'Official State Trade Certificate',
    desc: 'Receive a serialized, authentic membership seal and certificate that builds instant credibility in high-value enterprise tenders and weddings.',
  },
];

const tiers = [
  {
    name: 'Associate / Vendor Member',
    badge: 'Fabricators & Tech',
    forWhom: 'Sound, lighting, truss fabricators, decorators, florists & rental houses.',
    features: [
      'Official Directory Listing',
      'Technical Safety Masterclasses',
      'Zonal Vendor Networking Meets',
      'Standardized Contract Templates',
    ],
    popular: false,
  },
  {
    name: 'Corporate Event Agency',
    badge: 'Most Popular',
    forWhom: 'Established event planning agencies, experiential firms & production houses.',
    features: [
      'Priority Single-Window Liaison',
      'Government Tender Recommendations',
      'Legal & Payment Dispute Cell',
      'Annual Royal Conclave VIP Passes',
      'Voting Rights in Biennial Elections',
    ],
    popular: true,
  },
  {
    name: 'Institutional / Venue Partner',
    badge: 'Hotels & Venues',
    forWhom: 'Heritage palaces, luxury convention resorts, lawns, and banquet properties.',
    features: [
      'Exclusive Venue Directory Feature',
      'Direct Access to 300+ Planners',
      'Joint Tourism Promotion Board',
      'Advisory Council Representation',
    ],
    popular: false,
  },
];

const steps = [
  { step: '01', title: 'Submit Application', desc: 'Fill the online membership portal with GST, portfolio & district registration details.' },
  { step: '02', title: 'Document Verification', desc: 'UPEMA Scrutiny Committee verifies track record and trade credentials.' },
  { step: '03', title: 'Council Approval', desc: 'Zonal Secretariat reviews and approves membership formal admission.' },
  { step: '04', title: 'Certificate Issuance', desc: 'Receive your verified UPEMA Seal, official ID badge, and directory live link.' },
];

const faqs = [
  {
    q: 'Who is eligible to apply for UPEMA Membership?',
    a: 'Any registered business entity operating in event planning, wedding management, sound/light production, venue hospitality, catering, or decor fabrication in Uttar Pradesh with valid GST/MSME credentials.',
  },
  {
    q: 'How does the single-window clearance support work?',
    a: 'UPEMA office bearers act as the apex liaison desk to expedite police, fire, noise, and municipal permissions for large-scale conclaves and weddings across the state.',
  },
  {
    q: 'How long does the verification process take?',
    a: 'The initial documentation review is completed within 3 to 5 business days, followed by the formal issuance of your verified trade certificate.',
  },
];

const WhyBecomeMembers = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-slate-50 font-sans min-h-screen text-slate-900 selection:bg-[#D4A359] selection:text-white">
      
      {/* 1. Uniform Hero Banner (Matching Navy & Gold Theme) */}
      <section 
        className="relative bg-[#071322] border-b border-[#0D3B66]/60 pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden text-white font-[Poppins]"
        style={{
          backgroundImage: 'radial-gradient(ellipse at top center, #0F2D4E 0%, #081B2B 55%, #050E18 100%)',
        }}
      >
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1900&q=80')",
          }}
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#C9A45C]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[#1279CF]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#FAF8F2] border border-[#E7E0D3] text-[#081A2B] text-xs font-bold uppercase tracking-widest mb-7 shadow-lg">
            <span className="text-[#C9A45C] text-sm">🏛️</span>
            <span className="tracking-[0.15em] text-[10px] sm:text-xs">
              ELEVATE YOUR BUSINESS CREDIBILITY
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.18] mb-5">
            <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
              Why Become a
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
              Member?
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed mb-12">
            Join North India’s most influential state trade council. Access certified government advocacy, verified client leads, dispute protection, and high-trust vendor synergy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md border border-[#C9A45C]/40 shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                Single-Window Government Liaison
              </span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md border border-[#C9A45C]/40 shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                Verified Directory Accreditation
              </span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md border border-[#C9A45C]/40 shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                Legal & Payment Dispute Desk
              </span>
            </div>
          </div>

        </div>

        <div className="absolute -bottom-8 right-16 text-white/20 text-5xl pointer-events-none select-none">
          ✦
        </div>
      </section>

      {/* 2. Key Membership Advantages (IPA Style Core Pillars) */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1279CF] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
              <FiStar className="w-3.5 h-3.5" />
              <span>THE UPEMA ADVANTAGE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D2238] tracking-tight leading-tight">
              Transforming Individual Planners Into an <br />
              <span className="text-[#1279CF]">Empowered State Fraternity</span>
            </h2>

            <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base">
              Explore concrete institutional benefits designed to protect, elevate, and expand your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreAdvantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F2] rounded-3xl p-8 border border-[#E7E0D3] shadow-sm hover:shadow-xl hover:border-[#C9A45C] transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-white text-[#0D2238] border border-[#E7E0D3] group-hover:bg-[#0D2238] group-hover:text-[#D4A359] flex items-center justify-center text-2xl mb-6 shadow-sm transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0D2238] group-hover:text-[#1279CF] transition-colors mb-3">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Membership Categories / Tiers */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F6FB] border-t border-blue-100/60">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#9E7A32] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
              <FiAward className="w-3.5 h-3.5" />
              <span>MEMBERSHIP TIERS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D2238] tracking-tight leading-tight">
              Select Your <span className="text-[#1279CF]">Fraternity Category</span>
            </h2>

            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base">
              Tailored accreditation tracks for wedding agencies, technical fabricators, and luxury venues.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((t, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  t.popular
                    ? 'bg-[#0D2238] text-white shadow-2xl lg:scale-105 border-2 border-[#C9A45C]'
                    : 'bg-white text-slate-900 border border-[#D5E5F2] shadow-md hover:shadow-xl'
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4A359] to-[#C2934A] text-[#071322] text-[10px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {t.badge}
                  </span>
                )}

                <div>
                  {!t.popular && (
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#1279CF] text-[10px] font-bold uppercase tracking-wider mb-4">
                      {t.badge}
                    </span>
                  )}
                  
                  <h3 className={`text-xl sm:text-2xl font-extrabold ${t.popular ? 'text-white' : 'text-[#0D2238]'}`}>
                    {t.name}
                  </h3>
                  
                  <p className={`text-xs mt-2 leading-relaxed ${t.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {t.forWhom}
                  </p>

                  <div className="my-6 border-t border-slate-200/20" />

                  <div className="space-y-3">
                    {t.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm">
                        <FiCheck className={`w-4 h-4 flex-shrink-0 ${t.popular ? 'text-[#D4A359]' : 'text-[#1279CF]'}`} />
                        <span className={t.popular ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <Link
                    to="/register"
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      t.popular
                        ? 'bg-gradient-to-r from-[#D4A359] to-[#C2934A] hover:from-[#e2b56e] hover:to-[#b5833b] text-[#071322] shadow-lg shadow-amber-500/25'
                        : 'bg-[#0D2238] hover:bg-[#1279CF] text-white shadow-md'
                    }`}
                  >
                    <span>Apply for Membership</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Simple 4-Step Onboarding Process */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1279CF] text-xs font-semibold tracking-wider uppercase mb-3">
              <FiCheckCircle className="w-3.5 h-3.5" />
              <span>ONBOARDING ROADMAP</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D2238] tracking-tight leading-tight">
              4 Steps to Obtain Your <span className="text-[#1279CF]">UPEMA Accreditation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F2] p-7 rounded-2xl border border-[#E7E0D3] shadow-sm relative group hover:border-[#1279CF]/50 transition-all"
              >
                <span className="text-3xl font-black text-[#D4A359] block mb-3 font-serif">
                  {s.step}
                </span>
                <h4 className="text-base font-bold text-[#0D2238] mb-2">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Frequently Asked Questions Accordion */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F6FB] border-t border-blue-100/60">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2238]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Everything you need to know regarding membership norms and benefits.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#D5E5F2] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer font-bold text-sm sm:text-base text-[#0D2238]"
                >
                  <span>{faq.q}</span>
                  <FiChevronDown
                    className={`w-5 h-5 text-[#1279CF] transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Bottom CTA Section */}
      <CTASection />

    </div>
  );
};

export default WhyBecomeMembers;