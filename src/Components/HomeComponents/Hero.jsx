// // // src/components/homecomponent/Hero.jsx
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import heroBg from '../../assets/images/hero.jpg';

// // const Hero = () => {
// //   return (
// //     <section 
// //       className="relative min-h-[85vh] flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat"
// //       style={{
// //         backgroundImage: `url(${heroBg})`,
// //       }}
// //     >
// //       {/* Light Overlay (Image clear dikhegi + text readable rahega) */}
// //       <div className="absolute inset-0 bg-slate-950/45 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/50" />

// //       {/* Content */}
// //       <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white flex flex-col items-center">

// //         {/* Top Badge - Gold Accent */}
// //         {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/90 text-slate-950 text-xs md:text-sm font-semibold tracking-wide shadow-lg mb-6 backdrop-blur-sm">
// //           <span>🏛️</span>
// //           <span>Inaugurated in Lucknow | Est. May 31, 2025</span>
// //         </div> */}
// //         <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-black/40 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-amber-500/10 mb-8">
// //           <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
// //           <span>Inaugurated in Lucknow | Est. May 31, 2025</span>
// //         </div>

// //         {/* Main Heading */}
// //         {/* <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-tight mb-6 drop-shadow-md">
// //           Empowering Event Industry in <br />
// //           <span className="text-amber-400">Uttar Pradesh</span>
// //         </h1> */}
// //         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6">
// //           Empowering the Event Industry in <br />
// //           <span className="bg-gradient-to-r from-[#FFE082] via-[#F8C54E] to-[#D49A24] bg-clip-text text-transparent drop-shadow-sm font-serif">
// //             Uttar Pradesh
// //           </span>
// //         </h1>

// //         {/* Subtitle */}
// //         <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-100 font-medium leading-relaxed mb-10 drop-shadow">
// //           Uniting wedding planners, decor fabricators, and event firms across Lucknow, Noida, Varanasi, and beyond to foster collaboration, networking, and industry growth.
// //         </p>

// //         {/* CTA Buttons */}
// //         <div className="flex flex-wrap items-center justify-center gap-4">
// //           <Link
// //             to="/membership"
// //             className="px-8 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm md:text-base shadow-xl transition duration-200 ease-in-out hover:scale-105 flex items-center gap-2"
// //           >
// //             <span>👤</span>
// //             <span>Join Our Association</span>
// //           </Link>

// //           <Link
// //             to="/events"
// //             className="px-8 py-3.5 rounded-lg bg-slate-900/60 hover:bg-slate-900/90 text-white font-semibold text-sm md:text-base border border-amber-400/50 backdrop-blur-md transition duration-200 ease-in-out hover:scale-105 flex items-center gap-2"
// //           >
// //             <span>📅</span>
// //             <span>Upcoming Events</span>
// //           </Link>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// // src/components/homecomponent/Hero.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FiArrowRight, FiCalendar } from 'react-icons/fi';
// import heroVideo from '../../assets/videos/vido.mp4';

// const Hero = () => {
//   return (
//     <section className="relative min-h-[calc(100vh-140px)] flex items-center justify-center overflow-hidden py-12" >
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src={heroVideo} type="video/mp4" />
//       </video>

//       {/* 1. Cinematic Gradient Overlay (Dark Navy to Warm Amber Vignette) */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#071322]/70 via-[#0A1B30]/55 to-[#071322]/60" />

//       {/* Subtle Warm Amber Glow Behind Heading */}
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] h-[220px] bg-[#F8C54E]/15 blur-[100px] rounded-full pointer-events-none" />

//       {/* 2. Main Content Container */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center">

//         {/* Established Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-950/60 border border-[#F8C54E]/40 text-[#F8C54E] text-xs font-semibold tracking-widest uppercase backdrop-blur-md mb-5 shadow-sm">
//           <span className="w-1.5 h-1.5 rounded-full bg-[#F8C54E] animate-pulse" />
//           <span>Inaugurated in Lucknow | Est. May 31, 2025</span>
//         </div>

//         {/* Headline */}
//         <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.18] mb-4">
//           Empowering the Event Industry in <br />
//           <span className="bg-gradient-to-r from-[#FFF0B3] via-[#F8C54E] to-[#E5A825] bg-clip-text text-transparent font-serif drop-shadow-md">
//             Uttar Pradesh
//           </span>
//         </h1>

//         {/* Subtitle */}
//         <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed mb-8 text-balance">
//           Uniting wedding planners, decor fabricators, and event firms across <span className="text-[#FFF0B3] font-medium">Lucknow, Noida, Varanasi</span>, and beyond to foster collaboration, networking, and industry growth.
//         </p>

//         {/* Action Buttons */}
//         <div className="flex flex-wrap items-center justify-center gap-4">
//           {/* Primary Gold CTA */}
//           <Link
//             to="/membership"
//             className="group px-7 py-3 rounded-lg bg-gradient-to-r from-[#F8C54E] to-[#E5A825] hover:from-[#fada68] hover:to-[#d89b1b] text-[#0A1B30] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2.5"
//           >
//             <span>Become A Member</span>
//             <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
//           </Link>

//           {/* Secondary Outline CTA */}
//           <Link
//             to="/events"
//             className="px-7 py-3 rounded-lg bg-slate-900/50 hover:bg-slate-900/80 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-slate-400/30 hover:border-[#F8C54E]/70 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
//           >
//             <FiCalendar className="text-[#F8C54E] text-sm" />
//             <span>Upcoming Events</span>
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;


// src/components/homecomponent/Hero.jsx

import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'
import heroVideo from '../../assets/videos/vido.mp4'

const Hero = () => {
  return (
    <section
      className="
        relative
        // min-h-[calc(100vh-140px)]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#081A2B]
      "
    >

      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      >
        <source
          src={heroVideo}
          type="video/mp4"
        />
      </video>

      {/* =====================================================
          CINEMATIC NAVY OVERLAY
      ====================================================== */}

     {/* Soft Cinematic Overlay */}
<div
  className="
    absolute
    inset-0
    bg-black/25
  "
/>

{/* Navy Tint */}
<div
  className="
    absolute
    inset-0
    bg-gradient-to-b
    from-[#0F2742]/50
    via-[#0F2742]/40
    to-[#081A2B]/65
  "
/>

      {/* Bottom cinematic fade */}

      <div
  className="
    absolute
    inset-x-0
    bottom-0
    h-24
    bg-gradient-to-t
    from-[#FAF8F2]/30
    to-transparent
    pointer-events-none
  "
/>

      {/* =====================================================
          SUBTLE CHAMPAGNE GOLD GLOW
      ====================================================== */}

      <div
        className="
          absolute
          top-[38%]
          left-1/2
          -translate-x-1/2
          w-[380px]
          sm:w-[520px]
          h-[180px]
          sm:h-[240px]
          bg-[#C9A45C]/10
          blur-[110px]
          rounded-full
          pointer-events-none
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-5xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          py-20
          text-center
          text-white
          flex
          flex-col
          items-center
        "
      >

        {/* =================================================
            ESTABLISHED BADGE
        ================================================== */}

        <div
          className="
            inline-flex
            items-center
            gap-2.5
            px-4
            sm:px-5
            py-2
            rounded-full
            bg-[#081A2B]/60
            border
            border-[#C9A45C]/40
            text-[#D9B873]
            text-[9px]
            sm:text-[10px]
            md:text-xs
            font-medium
            tracking-[0.16em]
            uppercase
            backdrop-blur-md
            mb-7
            shadow-lg
          "
        >
          <span
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-[#C9A45C]
              animate-pulse
              flex-shrink-0
            "
          />

          <span>
            Inaugurated in Lucknow | Est. May 31, 2025
          </span>
        </div>

        {/* =================================================
            MAIN HEADING
        ================================================== */}

        <h1
          className="
            max-w-4xl
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-semibold
            tracking-[-0.02em]
            leading-[1.12]
            mb-6
            font-[Poppins]
          "
        >
          Empowering the Event
          <br />

          <span
            className="
              text-[#FAF8F2]
              font-[Playfair_Display]
              font-medium
            "
          >
            Industry in{' '}
          </span>

          <span
            className="
              text-[#C9A45C]
              font-[Playfair_Display]
              italic
              font-medium
            "
          >
            Uttar Pradesh
          </span>
        </h1>

        {/* =================================================
            DECORATIVE GOLD LINE
        ================================================== */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-3
            mb-7
          "
        >
          <span
            className="
              w-10
              sm:w-14
              h-px
              bg-[#C9A45C]/70
            "
          />

          <span
            className="
              w-1.5
              h-1.5
              rotate-45
              bg-[#C9A45C]
            "
          />

          <span
            className="
              w-10
              sm:w-14
              h-px
              bg-[#C9A45C]/70
            "
          />
        </div>

        {/* =================================================
            SUBTITLE
        ================================================== */}

        <p
          className="
            max-w-3xl
            text-sm
            sm:text-base
            md:text-lg
            text-[#F5F2EA]/85
            font-[Poppins]
            font-light
            leading-[1.8]
            mb-10
          "
        >
          Uniting wedding planners, decor fabricators, and
          event firms across{' '}

          <span
            className="
              text-[#D9B873]
              font-medium
            "
          >
            Lucknow, Noida, Varanasi
          </span>

          {' '}and beyond to foster collaboration,
          networking, and industry growth.
        </p>

        {/* =================================================
            CTA BUTTONS
        ================================================== */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-3
            sm:gap-4
          "
        >

          {/* ---------------------------------------------
              PRIMARY CTA
          ---------------------------------------------- */}

          <Link
            to="/membership"
            className="
              group
              min-w-[190px]
              px-7
              py-3.5
              flex
              items-center
              justify-center
              gap-2.5
              rounded-[4px]
              bg-[#C9A45C]
              hover:bg-[#D9B873]
              text-[#081A2B]
              font-[Poppins]
              font-semibold
              text-[11px]
              sm:text-xs
              tracking-[0.12em]
              uppercase
              border
              border-[#C9A45C]
              shadow-lg
              shadow-black/20
              hover:shadow-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            <span>
              Become A Member
            </span>

            <FiArrowRight
              className="
                w-4
                h-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* ---------------------------------------------
              SECONDARY CTA
          ---------------------------------------------- */}

          <Link
            to="/events"
            className="
              group
              min-w-[190px]
              px-7
              py-3.5
              flex
              items-center
              justify-center
              gap-2.5
              rounded-[4px]
              bg-[#081A2B]/50
              hover:bg-[#0F2742]/80
              text-white
              font-[Poppins]
              font-medium
              text-[11px]
              sm:text-xs
              tracking-[0.12em]
              uppercase
              border
              border-white/30
              hover:border-[#C9A45C]
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            <FiCalendar
              className="
                w-4
                h-4
                text-[#C9A45C]
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            <span>
              Upcoming Events
            </span>
          </Link>

        </div>

      </div>

      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ====================================================== */}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          hidden
          md:flex
          flex-col
          items-center
          gap-2
          text-white/50
        "
      >
        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.25em]
          "
        >
          Explore
        </span>

        <span
          className="
            w-px
            h-7
            bg-gradient-to-b
            from-[#C9A45C]
            to-transparent
          "
        />
      </div>

    </section>
  )
}

export default Hero