// import React, { useState, useEffect, useRef } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { FiPhone, FiMail, FiChevronDown, FiMenu, FiX, FiUserPlus } from 'react-icons/fi'
// import Logo from './Logo'

// const navStructure = [
//   { name: 'HOME', path: '/' },
//   {
//     name: 'ABOUT UPEMA',
//     path: '/about',
//     dropdown: [
//       { name: 'Our History', path: '/about/history' },
//       { name: 'Mission & Vision', path: '/about/mission-vision' },
//       { name: 'Governing Body', path: '/about/governing-body' }
//     ]
//   },
//   { name: 'MEMBERSHIP', path: '/membership' },
//   { name: 'EXECUTIVE COMMITTEE', path: '/executive-committee' },
//   { name: 'MEMBER DIRECTORY', path: '/member-directory' },
//   {
//     name: 'EVENTS & GALLERY',
//     path: '/events',
//     dropdown: [
//       { name: 'Upcoming Events', path: '/events/upcoming' },
//       { name: 'Past Events', path: '/events/past' },
//       { name: 'Photo Gallery', path: '/events/gallery' },
//       { name: 'Video Highlights', path: '/events/highlights' }
//     ]
//   },
//   {
//     name: 'NEWS & ANNOUNCEMENTS',
//     path: '/news',
//     dropdown: [
//       { name: 'Latest News', path: '/news/latest' },
//       { name: 'Announcements', path: '/news/announcements' },
//       { name: 'Circulars', path: '/news/circulars' },
//       { name: 'Press Releases', path: '/news/press-releases' }
//     ]
//   },
//   { name: 'CONTACT US', path: '/contact' }
// ]

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [openMobileAccordion, setOpenMobileAccordion] = useState({})
//   const [isScrolled, setIsScrolled] = useState(false)

//   const location = useLocation()
//   const currentPath = location?.pathname || '/'
//   const navRef = useRef(null)

//   // Handle Sticky/Fixed Blue Nav Bar on Scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 95) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }
//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Close dropdowns on click outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setActiveDropdown(null)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   // Toggle mobile accordion
//   const toggleMobileAccordion = (name) => {
//     setOpenMobileAccordion((prev) => ({
//       ...prev,
//       [name]: !prev[name]
//     }))
//   }

//   // Check if an item or any of its sub-items are active
//   const isItemActive = (item) => {
//     if (item.path === '/' && currentPath === '/') return true
//     if (item.path !== '/' && currentPath.startsWith(item.path)) return true
//     if (item.dropdown) {
//       return item.dropdown.some((sub) => currentPath.startsWith(sub.path))
//     }
//     return false
//   }

//   return (
//     <div ref={navRef} className="w-full font-sans-body bg-white z-50">
//       {/* 1. TOP INFORMATION HEADER (Scrolls up naturally with page flow) */}
//       <div className="bg-white border-b border-gray-100 transition-all duration-300">
//         <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 min-h-[90px] md:min-h-[105px] py-4 flex items-center justify-between gap-4">
          
//           {/* Left Side: Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="outline-none focus-visible:ring-2 focus-visible:ring-[#1279CF] rounded-md">
//               <Logo />
//             </Link>
//           </div>

//           {/* Right Side: Contact Info & CTA (Desktop & Tablet) */}
//           <div className="hidden lg:flex items-center gap-7">
//             {/* Phone */}
//             <a
//               href="tel:+915222345678"
//               className="flex items-center gap-2.5 text-slate-800 hover:text-[#1279CF] transition-colors group cursor-pointer"
//             >
//               <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#1279CF] group-hover:bg-[#1279CF] group-hover:text-white transition-all duration-300">
//                 <FiPhone className="w-4 h-4" />
//               </div>
//               <div className="flex flex-col text-xs">
//                 <span className="text-gray-500 font-medium uppercase tracking-wider text-[10px]">Call Us</span>
//                 <span className="font-semibold text-sm tracking-tight text-slate-900 group-hover:text-[#1279CF] transition-colors">
//                   +91 522 234 5678
//                 </span>
//               </div>
//             </a>

//             {/* Vertical Divider */}
//             <div className="h-8 w-[1px] bg-gray-200" />

//             {/* Email */}
//             <a
//               href="mailto:info@upema.in"
//               className="flex items-center gap-2.5 text-slate-800 hover:text-[#1279CF] transition-colors group cursor-pointer"
//             >
//               <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#1279CF] group-hover:bg-[#1279CF] group-hover:text-white transition-all duration-300">
//                 <FiMail className="w-4 h-4" />
//               </div>
//               <div className="flex flex-col text-xs">
//                 <span className="text-gray-500 font-medium uppercase tracking-wider text-[10px]">Email Us</span>
//                 <span className="font-semibold text-sm tracking-tight text-slate-900 group-hover:text-[#1279CF] transition-colors">
//                   info@upema.in
//                 </span>
//               </div>
//             </a>

//             {/* Primary CTA: Become a Member */}
//             <Link
//               to="/membership"
//               className="ml-2 inline-flex items-center justify-center bg-[#F7D072] hover:bg-[#FAD06A] text-slate-900 font-bold text-[13px] uppercase tracking-wider px-6 py-2.5 rounded-[6px] shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300"
//             >
//               <span>BECOME A MEMBER</span>
//             </Link>
//           </div>

//           {/* Mobile Hamburger Menu Button */}
//           <div className="flex items-center lg:hidden gap-3">
//             <Link
//               to="/membership"
//               className="sm:hidden text-xs bg-[#F8C54E] text-slate-900 font-bold px-3 py-1.5 rounded-[4px] uppercase tracking-wider"
//             >
//               Join
//             </Link>
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-label="Toggle Navigation Menu"
//               className="p-2.5 rounded-md text-slate-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1279CF] transition-colors"
//             >
//               {mobileMenuOpen ? <FiX className="w-7 h-7 text-[#1279CF]" /> : <FiMenu className="w-7 h-7 text-slate-800" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 2. MAIN BLUE NAVIGATION BAR (Locks smoothly to top of viewport when scrolling) */}
//       <nav
//         className={`bg-[#1279CF] transition-all duration-300 hidden lg:block ${
//           isScrolled
//             ? 'fixed top-0 left-0 right-0 z-50 shadow-2xl bg-[#1279CF] border-b border-blue-600/40 animate-dropdown'
//             : 'relative z-40 shadow-md'
//         }`}
//       >
//         <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
//           <ul className="flex items-center justify-between flex-wrap">
//             {navStructure.map((item) => {
//               const active = isItemActive(item)
//               const hasDropdown = Boolean(item.dropdown)
//               const isOpen = activeDropdown === item.name

//               return (
//                 <li
//                   key={item.name}
//                   className="relative group py-3.5"
//                   onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
//                   onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
//                 >
//                   {/* Parent Nav Link */}
//                   <Link
//                     to={item.path}
//                     className={`inline-flex items-center gap-1.5 text-[13px] md:text-[14px] font-semibold uppercase tracking-wider px-3.5 py-1 transition-colors duration-200 ${
//                       active || isOpen
//                         ? 'text-[#F8C54E]'
//                         : 'text-white hover:text-[#F8C54E]'
//                     }`}
//                   >
//                     <span>{item.name}</span>
//                     {hasDropdown && (
//                       <FiChevronDown
//                         className={`w-3.5 h-3.5 transition-transform duration-200 ${
//                           isOpen ? 'rotate-180 text-[#F8C54E]' : 'text-blue-100 group-hover:text-[#F8C54E]'
//                         }`}
//                       />
//                     )}
//                   </Link>

//                   {/* Underline Indicator Animation in Gold */}
//                   <div className="absolute bottom-0 left-0 right-0 h-[3px] flex justify-center">
//                     <span
//                       className={`h-[3px] bg-[#F8C54E] rounded-t transition-all duration-300 ease-out ${
//                         active
//                           ? 'w-[40px]'
//                           : 'w-0 group-hover:w-[40px]'
//                       }`}
//                     />
//                   </div>

//                   {/* 3. DESKTOP DROPDOWN MENU */}
//                   {hasDropdown && isOpen && (
//                     <div
//                       className="absolute top-full left-0 mt-0 w-64 bg-white rounded-b-md shadow-2xl border-t-2 border-[#F8C54E] py-2 z-50 animate-dropdown"
//                     >
//                       <ul className="py-1">
//                         {item.dropdown.map((subItem) => {
//                           const isSubActive = currentPath === subItem.path
//                           return (
//                             <li key={subItem.name}>
//                               <Link
//                                 to={subItem.path}
//                                 onClick={() => setActiveDropdown(null)}
//                                 className={`block px-5 py-2.5 text-[13px] font-medium uppercase tracking-wider transition-all duration-200 border-l-2 ${
//                                   isSubActive
//                                     ? 'text-[#1279CF] bg-blue-50/70 border-[#1279CF] pl-6 font-semibold'
//                                     : 'text-slate-700 border-transparent hover:text-[#1279CF] hover:bg-blue-50/50 hover:border-[#1279CF] hover:pl-6'
//                                 }`}
//                               >
//                                 {subItem.name}
//                               </Link>
//                             </li>
//                           )
//                         })}
//                       </ul>
//                     </div>
//                   )}
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//       </nav>

//       {/* Spacer div when nav becomes fixed on scroll */}
//       {isScrolled && <div className="hidden lg:block h-[52px]" />}

//       {/* 4. MOBILE / TABLET SLIDE-DOWN DRAWER NAVIGATION */}
//       <div
//         className={`lg:hidden fixed inset-x-0 top-[90px] sm:top-[105px] bottom-0 bg-[#0c5999] text-white z-40 overflow-y-auto transition-all duration-300 ease-in-out transform ${
//           mobileMenuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'
//         }`}
//       >
//         <div className="px-5 py-6 space-y-2 max-w-lg mx-auto flex flex-col justify-between min-h-full pb-12">
//           <div>
//             {/* Top Tagline Banner in Mobile */}
//             <div className="pb-4 mb-4 border-b border-blue-400/30 flex items-center justify-between">
//               <span className="text-xs text-[#F8C54E] uppercase tracking-widest font-semibold">
//                 UPEMA Navigation
//               </span>
//               <span className="text-[11px] text-blue-100">Uttar Pradesh</span>
//             </div>

//             {/* Mobile Stacked Items */}
//             <ul className="space-y-1">
//               {navStructure.map((item) => {
//                 const active = isItemActive(item)
//                 const hasDropdown = Boolean(item.dropdown)
//                 const isAccordionOpen = Boolean(openMobileAccordion[item.name])

//                 return (
//                   <li key={item.name} className="border-b border-blue-400/20 last:border-none">
//                     <div className="flex items-center justify-between py-3.5">
//                       <Link
//                         to={item.path}
//                         onClick={() => setMobileMenuOpen(false)}
//                         className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
//                           active ? 'text-[#F8C54E]' : 'text-white hover:text-[#F8C54E]'
//                         }`}
//                       >
//                         {item.name}
//                       </Link>

//                       {hasDropdown && (
//                         <button
//                           onClick={() => toggleMobileAccordion(item.name)}
//                           className="p-2 text-blue-200 hover:text-[#F8C54E] focus:outline-none"
//                           aria-label={`Toggle ${item.name} section`}
//                         >
//                           <FiChevronDown
//                             className={`w-5 h-5 transition-transform duration-200 ${
//                               isAccordionOpen ? 'rotate-180 text-[#F8C54E]' : ''
//                             }`}
//                           />
//                         </button>
//                       )}
//                     </div>

//                     {/* Accordion Sub-items */}
//                     {hasDropdown && isAccordionOpen && (
//                       <ul className="pl-4 pb-3 space-y-2 bg-[#09477a]/60 rounded-md my-1 border-l-2 border-[#F8C54E]">
//                         {item.dropdown.map((subItem) => {
//                           const isSubActive = currentPath === subItem.path
//                           return (
//                             <li key={subItem.name}>
//                               <Link
//                                 to={subItem.path}
//                                 onClick={() => setMobileMenuOpen(false)}
//                                 className={`flex items-center gap-2 py-2 px-3 text-xs uppercase tracking-wider font-medium transition-colors ${
//                                   isSubActive ? 'text-[#F8C54E] font-semibold' : 'text-blue-100 hover:text-[#F8C54E]'
//                                 }`}
//                               >
//                                 <span className="w-1.5 h-1.5 rounded-full bg-[#F8C54E] opacity-80" />
//                                 <span>{subItem.name}</span>
//                               </Link>
//                             </li>
//                           )
//                         })}
//                       </ul>
//                     )}
//                   </li>
//                 )
//               })}
//             </ul>
//           </div>

//           {/* Bottom CTA & Quick Contacts for Mobile */}
//           <div className="pt-6 mt-6 border-t border-blue-400/30 space-y-4">
//             <Link
//               to="/membership"
//               onClick={() => setMobileMenuOpen(false)}
//               className="w-full flex items-center justify-center gap-2 bg-[#F8C54E] hover:bg-[#e6b338] text-slate-900 font-bold text-sm uppercase tracking-wider py-3 px-6 rounded-[6px] transition-all duration-300 shadow-md"
//             >
//               <FiUserPlus className="w-4 h-4" />
//               <span>BECOME A MEMBER</span>
//             </Link>

//             <div className="grid grid-cols-2 gap-3 text-xs pt-2">
//               <a
//                 href="tel:+915222345678"
//                 className="flex items-center gap-2 text-blue-100 hover:text-[#F8C54E] bg-blue-900/60 p-2.5 rounded border border-blue-400/30"
//               >
//                 <FiPhone className="text-[#F8C54E] flex-shrink-0" />
//                 <span className="truncate">+91 522 234 5678</span>
//               </a>
//               <a
//                 href="mailto:info@upema.in"
//                 className="flex items-center gap-2 text-blue-100 hover:text-[#F8C54E] bg-blue-900/60 p-2.5 rounded border border-blue-400/30"
//               >
//                 <FiMail className="text-[#F8C54E] flex-shrink-0" />
//                 <span className="truncate">info@upema.in</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FiPhone,
  FiMail,
  FiChevronDown,
  FiMenu,
  FiX,
  FiUserPlus,
} from 'react-icons/fi'
import Logo from './Logo'

const navStructure = [
  { name: 'HOME', path: '/' },

  {
    name: 'ABOUT UPEMA',
    path: null,
    dropdown: [
      { name: 'Our History', path: '/about/history' },
      { name: 'Mission & Vision', path: '/about/mission-vision' },
      { name: 'Governing Body', path: '/about/governing-body' },
    ],
  },

  {
    name: 'MEMBERSHIP',
    path: '/membership',
  },

  {
    name: 'EXECUTIVE COMMITTEE',
    path: '/executive-committee',
  },

  {
    name: 'MEMBER DIRECTORY',
    path: '/member-directory',
  },

  {
    name: 'EVENTS & GALLERY',
    path: null,
    dropdown: [
      { name: 'Upcoming Events', path: '/events/upcoming' },
      { name: 'Past Events', path: '/events/past' },
      { name: 'Photo Gallery', path: '/events/gallery' },
      { name: 'Video Highlights', path: '/events/highlights' },
    ],
  },

  {
    name: 'NEWS & ANNOUNCEMENTS',
    path: null,
    dropdown: [
      { name: 'Latest News', path: '/news/latest' },
      { name: 'Announcements', path: '/news/announcements' },
      { name: 'Circulars', path: '/news/circulars' },
      { name: 'Press Releases', path: '/news/press-releases' },
    ],
  },

  {
    name: 'CONTACT US',
    path: '/contact',
  },
]

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileAccordion, setOpenMobileAccordion] = useState({})
  const [isScrolled, setIsScrolled] = useState(false)

  const location = useLocation()
  const currentPath = location?.pathname || '/'
  const navRef = useRef(null)

  // ---------------------------------------
  // Sticky Navbar on Scroll
  // ---------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 95)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // ---------------------------------------
  // Close Dropdown on Outside Click
  // ---------------------------------------
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      )
    }
  }, [])

  // ---------------------------------------
  // Mobile Accordion
  // ---------------------------------------
  const toggleMobileAccordion = (name) => {
    setOpenMobileAccordion((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  // ---------------------------------------
  // Check Active Navigation Item
  // ---------------------------------------
  const isItemActive = (item) => {
    if (item.path === '/' && currentPath === '/') {
      return true
    }

    if (
      item.path !== '/' &&
      currentPath.startsWith(item.path)
    ) {
      return true
    }

    if (item.dropdown) {
      return item.dropdown.some((sub) =>
        currentPath.startsWith(sub.path)
      )
    }

    return false
  }

  const navLinkClass = (active, isOpen) => `
    inline-flex items-center gap-1 text-[11px] xl:text-[12px] font-semibold uppercase tracking-[0.11em] px-2 xl:px-2.5 py-1 transition-all duration-300 cursor-pointer
    ${active || isOpen ? 'text-[#D9B873]' : 'text-white hover:text-[#D9B873]'}
  `
  return (
    <div
      ref={navRef}
      className="w-full font-[Poppins] bg-white text-[#172333] z-50"
    >
      {/* =====================================================
          TOP INFORMATION HEADER
      ====================================================== */}

      <div className="bg-[#FAF8F2] border-b border-[#E7E0D3]">
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            min-h-[70px]
            sm:min-h-[90px]
            md:min-h-[105px]
            py-2.5
            sm:py-4
            flex
            items-center
            justify-between
            gap-4
          "
        >
          {/* ---------------------------------------
              LOGO
          ---------------------------------------- */}

          <div className="flex items-center">
            <Link
              to="/"
              className="
                outline-none
                rounded-md
                focus-visible:ring-2
                focus-visible:ring-[#C9A45C]
              "
            >
              <Logo />
            </Link>
          </div>

          {/* ---------------------------------------
              DESKTOP CONTACT + CTA
          ---------------------------------------- */}

          <div className="hidden lg:flex items-center gap-7">

            {/* Phone */}

            <a
              href="tel:+915222345678"
              className="
                flex
                items-center
                gap-2.5
                text-[#172333]
                hover:text-[#C9A45C]
                transition-colors
                duration-300
                group
              "
            >
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#0F2742]/5
                  border
                  border-[#C9A45C]/20
                  flex
                  items-center
                  justify-center
                  text-[#C9A45C]
                  group-hover:bg-[#C9A45C]
                  group-hover:text-[#081A2B]
                  group-hover:border-[#C9A45C]
                  transition-all
                  duration-300
                "
              >
                <FiPhone className="w-4 h-4" />
              </div>

              <div className="flex flex-col">
                <span
                  className="
                    text-[#7A746B]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-[9px]
                  "
                >
                  Call Us
                </span>

                <span
                  className="
                    font-semibold
                    text-sm
                    tracking-tight
                    text-[#172333]
                    group-hover:text-[#C9A45C]
                    transition-colors
                  "
                >
                  +91 522 234 5678
                </span>
              </div>
            </a>

            {/* Divider */}

            <div className="h-9 w-px bg-[#DCD3C5]" />

            {/* Email */}

            <a
              href="mailto:info@upema.in"
              className="
                flex
                items-center
                gap-2.5
                text-[#172333]
                hover:text-[#C9A45C]
                transition-colors
                duration-300
                group
              "
            >
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#0F2742]/5
                  border
                  border-[#C9A45C]/20
                  flex
                  items-center
                  justify-center
                  text-[#C9A45C]
                  group-hover:bg-[#C9A45C]
                  group-hover:text-[#081A2B]
                  group-hover:border-[#C9A45C]
                  transition-all
                  duration-300
                "
              >
                <FiMail className="w-4 h-4" />
              </div>

              <div className="flex flex-col">
                <span
                  className="
                    text-[#7A746B]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-[9px]
                  "
                >
                  Email Us
                </span>

                <span
                  className="
                    font-semibold
                    text-sm
                    tracking-tight
                    text-[#172333]
                    group-hover:text-[#C9A45C]
                    transition-colors
                  "
                >
                  info@upema.in
                </span>
              </div>
            </a>

            {/* ---------------------------------------
                BECOME MEMBER CTA
            ---------------------------------------- */}

            <Link
              to="/membership"
              className="
                ml-2
                inline-flex
                items-center
                justify-center
                bg-[#C9A45C]
                hover:bg-[#D9B873]
                text-[#081A2B]
                font-bold
                text-[12px]
                uppercase
                tracking-[0.12em]
                px-6
                py-3
                rounded-[4px]
                border
                border-[#C9A45C]
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-[1px]
                active:scale-[0.98]
                transition-all
                duration-300
              "
            >
              BECOME A MEMBER
            </Link>
          </div>

          {/* ---------------------------------------
              MOBILE CONTROLS
          ---------------------------------------- */}

          <div className="flex items-center lg:hidden gap-3">

            {/* Mobile Join Button */}

            <Link
              to="/membership"
              className="
                sm:hidden
                text-[10px]
                bg-[#C9A45C]
                hover:bg-[#D9B873]
                text-[#081A2B]
                font-bold
                px-3
                py-2
                rounded-[4px]
                uppercase
                tracking-wider
                transition-colors
              "
            >
              Join
            </Link>

            {/* Hamburger */}

            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              aria-label="Toggle Navigation Menu"
              className="
                p-2.5
                rounded-md
                text-[#0F2742]
                hover:bg-[#0F2742]/5
                focus:outline-none
                focus:ring-2
                focus:ring-[#C9A45C]
                transition-colors
              "
            >
              {mobileMenuOpen ? (
                <FiX className="w-7 h-7 text-[#C9A45C]" />
              ) : (
                <FiMenu className="w-7 h-7 text-[#0F2742]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}

      <nav
        className={`
          bg-[#173B5E]
          transition-all
          duration-300
          hidden
          lg:block
          ${
            isScrolled
              ? `
                fixed
                top-0
                left-0
                right-0
                z-50
                shadow-2xl
                bg-[#173B5E]
                border-b
                border-[#C9A45C]/30
              `
              : `
                relative
                z-40
                shadow-md
              `
          }
        `}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* <ul className="flex items-center justify-between flex-wrap"> */}
             <ul className="flex items-center justify-center gap-1 flex-wrap">

            {navStructure.map((item) => {
              const active = isItemActive(item)
              const hasDropdown = Boolean(item.dropdown)
              const isOpen =
                activeDropdown === item.name

              return (
                <li
                  key={item.name}
                  className="relative group py-3.5"
                  onMouseEnter={() =>
                    hasDropdown &&
                    setActiveDropdown(item.name)
                  }
                  onMouseLeave={() =>
                    hasDropdown &&
                    setActiveDropdown(null)
                  }
                >

                  {/* ---------------------------------------
                      PARENT NAV LINK
                  ---------------------------------------- */}

                  <Link
                    to={item.path}
                    className={`
                      inline-flex
                      items-center
                      gap-1
                      text-[11px]
                      xl:text-[12px]
                      font-semibold
                      uppercase
                      tracking-[0.11em]
                      px-2
                      xl:px-2.5
                      py-1
                      transition-all
                      duration-300
                      ${
                        active || isOpen
                          ? 'text-[#D9B873]'
                          : 'text-white hover:text-[#D9B873]'
                      }
                    `}
                  >
                    <span>{item.name}</span>

                    {hasDropdown && (
                      <FiChevronDown
                        className={`
                          w-3.5
                          h-3.5
                          transition-transform
                          duration-300
                          ${
                            isOpen
                              ? 'rotate-180 text-[#D9B873]'
                              : 'text-white/70 group-hover:text-[#D9B873]'
                          }
                        `}
                      />
                    )}
                  </Link>

                  {/* ---------------------------------------
                      GOLD UNDERLINE
                  ---------------------------------------- */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-[2px]
                      flex
                      justify-center
                    "
                  >
                    <span
                      className={`
                        h-[2px]
                        bg-[#C9A45C]
                        rounded-t
                        transition-all
                        duration-300
                        ease-out
                        ${
                          active
                            ? 'w-[42px]'
                            : 'w-0 group-hover:w-[42px]'
                        }
                      `}
                    />
                  </div>

                  {/* =================================================
                      DESKTOP DROPDOWN
                  ================================================== */}

                  {hasDropdown && isOpen && (
                    <div
                      className="
                        absolute
                        top-full
                        left-0
                        mt-0
                        w-64
                        bg-[#FAF8F2]
                        rounded-b-md
                        shadow-2xl
                        border-t-2
                        border-[#C9A45C]
                        py-2
                        z-50
                        animate-dropdown
                      "
                    >
                      <ul className="py-1">

                        {item.dropdown.map((subItem) => {
                          const isSubActive =
                            currentPath === subItem.path

                          return (
                            <li key={subItem.name}>

                              <Link
                                to={subItem.path}
                                onClick={() =>
                                  setActiveDropdown(null)
                                }
                                className={`
                                  block
                                  px-5
                                  py-3
                                  text-[11px]
                                  font-medium
                                  uppercase
                                  tracking-[0.1em]
                                  transition-all
                                  duration-200
                                  border-l-2
                                  ${
                                    isSubActive
                                      ? `
                                        text-[#0F2742]
                                        bg-[#C9A45C]/10
                                        border-[#C9A45C]
                                        pl-6
                                        font-semibold
                                      `
                                      : `
                                        text-[#172333]
                                        border-transparent
                                        hover:text-[#0F2742]
                                        hover:bg-[#C9A45C]/10
                                        hover:border-[#C9A45C]
                                        hover:pl-6
                                      `
                                  }
                                `}
                              >
                                {subItem.name}
                              </Link>

                            </li>
                          )
                        })}

                      </ul>
                    </div>
                  )}
                </li>
              )
            })}

          </ul>
        </div>
      </nav>

      {/* =====================================================
          SPACER FOR FIXED NAV
      ====================================================== */}

      {isScrolled && (
        <div className="hidden lg:block h-[52px]" />
      )}

      {/* =====================================================
          MOBILE / TABLET MENU
      ====================================================== */}

      <div
        className={`
          lg:hidden
          fixed
          inset-x-0
          top-[70px]
          sm:top-[90px]
          md:top-[105px]
          bottom-0
          bg-[#081A2B]
          text-white
          z-40
          overflow-y-auto
          transition-all
          duration-300
          ease-in-out
          transform
          ${
            mobileMenuOpen
              ? 'translate-x-0 opacity-100 pointer-events-auto'
              : 'translate-x-full opacity-0 pointer-events-none'
          }
        `}
      >

        <div
          className="
            px-5
            py-6
            space-y-2
            max-w-lg
            mx-auto
            flex
            flex-col
            justify-between
            min-h-full
            pb-12
          "
        >

          <div>

            {/* ---------------------------------------
                MOBILE HEADER TAG
            ---------------------------------------- */}

            <div
              className="
                pb-4
                mb-4
                border-b
                border-[#C9A45C]/20
                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  text-[10px]
                  text-[#C9A45C]
                  uppercase
                  tracking-[0.18em]
                  font-semibold
                "
              >
                UPEMA Navigation
              </span>

              <span
                className="
                  text-[10px]
                  text-white/50
                  uppercase
                  tracking-wider
                "
              >
                Uttar Pradesh
              </span>
            </div>

            {/* ---------------------------------------
                MOBILE NAV ITEMS
            ---------------------------------------- */}

            <ul className="space-y-1">

              {navStructure.map((item) => {
                const active = isItemActive(item)
                const hasDropdown =
                  Boolean(item.dropdown)

                const isAccordionOpen =
                  Boolean(
                    openMobileAccordion[item.name]
                  )

                return (
                  <li
                    key={item.name}
                    className="
                      border-b
                      border-white/10
                      last:border-none
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        py-3.5
                      "
                    >

                      <Link
                        to={item.path}
                        onClick={() =>
                          setMobileMenuOpen(false)
                        }
                        className={`
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          transition-colors
                          ${
                            active
                              ? 'text-[#D9B873]'
                              : 'text-white hover:text-[#D9B873]'
                          }
                        `}
                      >
                        {item.name}
                      </Link>

                      {hasDropdown && (
                        <button
                          onClick={() =>
                            toggleMobileAccordion(
                              item.name
                            )
                          }
                          className="
                            p-2
                            text-white/60
                            hover:text-[#D9B873]
                            focus:outline-none
                          "
                          aria-label={`Toggle ${item.name} section`}
                        >
                          <FiChevronDown
                            className={`
                              w-5
                              h-5
                              transition-transform
                              duration-200
                              ${
                                isAccordionOpen
                                  ? 'rotate-180 text-[#D9B873]'
                                  : ''
                              }
                            `}
                          />
                        </button>
                      )}

                    </div>

                    {/* ---------------------------------------
                        MOBILE SUBMENU
                    ---------------------------------------- */}

                    {hasDropdown &&
                      isAccordionOpen && (
                        <ul
                          className="
                            pl-4
                            pb-3
                            space-y-2
                            bg-[#0F2742]
                            rounded-md
                            my-1
                            border-l-2
                            border-[#C9A45C]
                          "
                        >

                          {item.dropdown.map(
                            (subItem) => {
                              const isSubActive =
                                currentPath ===
                                subItem.path

                              return (
                                <li
                                  key={subItem.name}
                                >

                                  <Link
                                    to={subItem.path}
                                    onClick={() =>
                                      setMobileMenuOpen(
                                        false
                                      )
                                    }
                                    className={`
                                      flex
                                      items-center
                                      gap-2
                                      py-2
                                      px-3
                                      text-[10px]
                                      uppercase
                                      tracking-[0.1em]
                                      font-medium
                                      transition-colors
                                      ${
                                        isSubActive
                                          ? 'text-[#D9B873] font-semibold'
                                          : 'text-white/70 hover:text-[#D9B873]'
                                      }
                                    `}
                                  >

                                    <span
                                      className="
                                        w-1.5
                                        h-1.5
                                        rounded-full
                                        bg-[#C9A45C]
                                        opacity-80
                                      "
                                    />

                                    <span>
                                      {subItem.name}
                                    </span>

                                  </Link>

                                </li>
                              )
                            }
                          )}

                        </ul>
                      )}

                  </li>
                )
              })}

            </ul>
          </div>

          {/* =================================================
              MOBILE BOTTOM CTA + CONTACT
          ================================================== */}

          <div
            className="
              pt-6
              mt-6
              border-t
              border-[#C9A45C]/20
              space-y-4
            "
          >

            {/* CTA */}

            <Link
              to="/membership"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                bg-[#C9A45C]
                hover:bg-[#D9B873]
                text-[#081A2B]
                font-bold
                text-[11px]
                uppercase
                tracking-[0.12em]
                py-3
                px-6
                rounded-[4px]
                transition-all
                duration-300
                shadow-md
              "
            >
              <FiUserPlus className="w-4 h-4" />

              <span>
                BECOME A MEMBER
              </span>
            </Link>

            {/* Contacts */}

            {/* <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
                text-xs
                pt-2
              "
            >

              

              <a
                href="tel:+915222345678"
                className="
                  flex
                  items-center
                  gap-2
                  text-white/70
                  hover:text-[#D9B873]
                  bg-[#0F2742]
                  p-3
                  rounded
                  border
                  border-[#C9A45C]/20
                  transition-colors
                "
              >
                <FiPhone className="text-[#C9A45C] flex-shrink-0" />

                <span className="truncate">
                  +91 522 234 5678
                </span>
              </a>


              <a
                href="mailto:info@upema.in"
                className="
                  flex
                  items-center
                  gap-2
                  text-white/70
                  hover:text-[#D9B873]
                  bg-[#0F2742]
                  p-3
                  rounded
                  border
                  border-[#C9A45C]/20
                  transition-colors
                "
              >
                <FiMail className="text-[#C9A45C] flex-shrink-0" />

                <span className="truncate">
                  info@upema.in
                </span>
              </a>

            </div> */}

            <div className="flex items-center gap-6">

  {/* 1. Phone Block */}
  <a
    href="tel:+915222345678"
    className="flex items-center gap-3 group text-left transition-all duration-200"
  >
    {/* Dark Solid Navy Circle with Gold Border */}
    <div className="w-10 h-10 rounded-full bg-[#081A2B] border-2 border-[#C9A45C] group-hover:bg-[#1279CF] group-hover:border-[#1279CF] flex items-center justify-center text-[#E5B54F] group-hover:text-white shadow-md transition-all duration-300 flex-shrink-0">
      <FiPhone className="w-4 h-4 transition-transform group-hover:scale-110" />
    </div>

    {/* Labels */}
    <div className="flex flex-col">
      <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#081A2B] leading-none mb-1">
        CALL US
      </span>
      <span className="text-xs sm:text-sm font-extrabold text-[#081A2B] group-hover:text-[#1279CF] transition-colors leading-none font-mono">
        +91 522 234 5678
      </span>
    </div>
  </a>

  {/* Vertical Divider */}
  <span className="w-px h-8 bg-slate-300 hidden sm:block" />

  {/* 2. Email Block */}
  <a
    href="mailto:info@upema.in"
    className="flex items-center gap-3 group text-left transition-all duration-200"
  >
    {/* Dark Solid Navy Circle with Gold Border */}
    <div className="w-10 h-10 rounded-full bg-[#081A2B] border-2 border-[#C9A45C] group-hover:bg-[#1279CF] group-hover:border-[#1279CF] flex items-center justify-center text-[#E5B54F] group-hover:text-white shadow-md transition-all duration-300 flex-shrink-0">
      <FiMail className="w-4 h-4 transition-transform group-hover:scale-110" />
    </div>

    {/* Labels */}
    <div className="flex flex-col">
      <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#081A2B] leading-none mb-1">
        EMAIL US
      </span>
      <span className="text-xs sm:text-sm font-extrabold text-[#081A2B] group-hover:text-[#1279CF] transition-colors leading-none">
        info@upema.in
      </span>
    </div>
  </a>

</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar