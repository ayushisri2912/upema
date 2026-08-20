import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import OurHistory from '../pages/About/OurHistory'
import MissionVision from '../pages/About/MissionVision'
import GoverningBody from '../pages/About/GoverningBody'
import WhyBecomeMembers from '../pages/MemberShip/WhyBecomeMembers'
import ExecutiveCommittee from '../pages/ExecutiveCommittee'
import MemberDirectory from '../pages/MemberDirectory'
import EventsGallery from '../pages/EventsGallery'
import NewsAnnouncements from '../pages/NewsAnnouncements'
import Contact from '../pages/Contact'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/history" element={<OurHistory />} />
      <Route path="/about/mission-vision" element={<MissionVision />} />
      <Route path="/about/governing-body" element={<GoverningBody />} />
      <Route path="/membership" element={<WhyBecomeMembers />} />
      <Route path="/membership/why-become-member" element={<WhyBecomeMembers />} />
      <Route path="/executive-committee" element={<ExecutiveCommittee />} />
      <Route path="/member-directory" element={<MemberDirectory />} />
      <Route path="/events" element={<EventsGallery />} />
      <Route path="/events/*" element={<EventsGallery />} />
      <Route path="/news" element={<NewsAnnouncements />} />
      <Route path="/news/*" element={<NewsAnnouncements />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes
