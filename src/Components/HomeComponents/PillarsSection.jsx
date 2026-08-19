import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const eventHubs = [
  {
    id: 1,
    title: 'Heritage & Royal Weddings',
    city: 'Lucknow & Awadh Region',
    description:
      'Blending Nawabi hospitality, royal palace setups, and bespoke cultural entertainment for unforgettable destination weddings.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    tag: 'Royal Heritage'
  },
  {
    id: 2,
    title: 'Spiritual & Cultural Celebrations',
    city: 'Varanasi & Ayodhya',
    description:
      'Grand riverfront events, traditional festivities, and divine musical evenings with state-of-the-art sound and lighting architecture.',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80',
    tag: 'Cultural Galas'
  },
  {
    id: 3,
    title: 'Corporate Conclaves & Expos',
    city: 'Noida & Greater Noida',
    description:
      'High-tech mega conferences, global exhibitions, and trade expos hosted in world-class convention centers and modern arenas.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    tag: 'Business & Expos'
  }
];

const PillarsSection = () => {
  return (
    // <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F6FB] border-t border-blue-100/60 transition-colors duration-300">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matching IPA Reference Style) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
         <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-[#D49A24] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">            <span>🏛️</span>
            <span>EXPERIENTIAL DESTINATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Uttar Pradesh: Where Heritage Meets <span className="text-[#1279CF]">Modern Celebrations</span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            From regal nawabi palaces to futuristic convention arenas, empowering every dimension of the event fraternity.
          </p>
        </div>

        {/* 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventHubs.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#0D3B66]/90 text-[#F8C54E] text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs font-bold text-[#1279CF] uppercase tracking-wider block mb-1">
                    {item.city}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1279CF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Explore Link */}
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0D3B66] uppercase tracking-wider group-hover:text-[#1279CF] transition-colors mt-auto pt-4 border-t border-slate-100"
                >
                  <span>Explore Portfolio</span>
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PillarsSection;