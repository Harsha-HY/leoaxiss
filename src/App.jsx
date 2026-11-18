import React, { useState } from 'react';
import LeoNavbar from './components/LeoNavbar';
import LeoHero from './components/LeoHero';
import GovernmentProjectsSection from './components/GovernmentProjectsSection';
import TrustedMarquee from './components/TrustedMarquee';
import PartnersSection from './components/PartnersSection';
import ServicesDeepDive from './components/ServicesDeepDive';
import AiSchoolsSection from './components/AiSchoolsSection';
import PortfolioShowcase from './components/PortfolioShowcase';
import AttendanceProductSection from './components/AttendanceProductSection';
import WhyChooseLeoAxis from './components/WhyChooseLeoAxis';
import LeoTestimonials from './components/LeoTestimonials';
import LeoStats from './components/LeoStats';
import ProfileDownloadCard from './components/ProfileDownloadCard';
import LeoCta from './components/LeoCta';
import LeoFooter from './components/LeoFooter';
import ContactModal from './components/ContactModal';
import Toast from './components/Toast';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactContext, setContactContext] = useState('general');
  const [toast, setToast] = useState(null);

  const handleOpenContact = (context = 'general') => {
    setContactContext(context);
    setContactModalOpen(true);
  };

  const handleNotify = (title, message = '', icon = 'check') => {
    setToast({ title, message, icon });
    setTimeout(() => {
      setToast((prev) => (prev && prev.title === title ? null : prev));
    }, 3800);
  };

  return (
    <div id="top" className="min-h-screen bg-[#faf5ea] text-[#1c1917] selection:bg-dual-1 selection:text-white font-sans antialiased relative" data-dual-theme="indigo-terracotta">
      {/* 1. Creative Studio Navigation Bar */}
      <LeoNavbar 
        onOpenContact={handleOpenContact}
        onNotify={handleNotify}
      />

      <main className="relative">
        {/* 2. Hero Section: Ideas with impact. Built loud. */}
        <LeoHero 
          onOpenContact={handleOpenContact}
          onNotify={handleNotify}
        />

        {/* 3. 03 / Selected Work: Awarding Body DETTG, TASK Mobile, AcademicTracker */}
        <GovernmentProjectsSection 
          onOpenContact={handleOpenContact}
          onNotify={handleNotify}
        />

        {/* 3.5 Trusted by Innovative Teams & Institutions (Smooth Left-to-Right Marquee) */}
        <TrustedMarquee />

        {/* 4. 04 / Strategic Alliances & Recognition */}
        <PartnersSection 
          onOpenContact={handleOpenContact}
        />

        {/* 5. 05 / What We Do / Services Deep Dive */}
        <ServicesDeepDive 
          onOpenContact={handleOpenContact}
        />

        {/* 6. 06 / Social Impact & Education: 3 Bento Cards */}
        <AiSchoolsSection 
          onOpenContact={handleOpenContact}
        />

        {/* 7. 07 / Proven Client Portfolio Showcase (28+ Real Projects with Live Links & Filter) */}
        <PortfolioShowcase 
          onOpenContact={handleOpenContact}
          onNotify={handleNotify}
        />

        {/* 8. Attendance Management System (In-Built SaaS Product Spotlight) */}
        <AttendanceProductSection 
          onOpenContact={handleOpenContact}
        />

        {/* 9. Why Choose LeoAxis (The LeoAxis Difference Bento Cards) */}
        <WhyChooseLeoAxis 
          onOpenContact={handleOpenContact}
        />

        {/* 10. Client Testimonials (100% Verified Authentic Reviews) */}
        <LeoTestimonials />

        {/* 11. Company Statistics (28+ Projects, 100% On-Time, 2 Global Hubs, 500+ Trained) */}
        <LeoStats />

        {/* 12. Company Profile Download (Official 2026 Deck PDF) */}
        <ProfileDownloadCard onNotify={handleNotify} />

        {/* 13. Strong Final Studio CTA (Reconstructed in Unique Bento Studio Style) */}
        <LeoCta 
          onOpenContact={handleOpenContact}
        />
      </main>

      {/* 14. Premium Studio Footer (Full India & Ireland Office Addresses, Legal, Sitemap) */}
      <LeoFooter 
        onOpenContact={handleOpenContact}
      />

      {/* Interactive Contact / Inquiry Modal */}
      <ContactModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialContext={contactContext}
        onNotify={handleNotify}
      />

      {/* Interactive Global Toast Notification */}
      {toast && (
        <Toast 
          title={toast.title}
          message={toast.message}
          icon={toast.icon}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
