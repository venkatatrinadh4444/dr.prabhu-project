import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TrustSection } from "./components/TrustSection";
import { AboutPreview } from "./components/AboutPreview";
import { SpecializationsPreview } from "./components/SpecializationsPreview";
import { TestimonialsPreview } from "./components/TestimonialsPreview";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";
import { AboutPage } from "./components/AboutPage";
import { SpecializationsPage } from "./components/SpecializationsPage";
import { AppointmentsPage } from "./components/AppointmentsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const bookingOnlineFuntion=()=> {
    setCurrentPage('appointments')
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const footerRedirection = (name:string) => {
    setCurrentPage(name)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage redirectHanlder={footerRedirection}/>;
      case "specializations":
        return <SpecializationsPage />;
      case "appointments":
        return <AppointmentsPage/>;
      case "home":
      default:
        return (
          <main className="overflow-hidden">
            {/* Hero Banner - Full-width with Dr. Praveen's portrait */}
            <HeroSection />
            
            {/* Trust & Achievements - Quick stats with SEO-friendly content */}
            <TrustSection />
            
            {/* About Preview - Professional image with bio teaser */}
            <AboutPreview />
            
            {/* Specializations Preview - Grid layout with service cards */}
            <SpecializationsPreview redirectHanlder={footerRedirection} />
            
            {/* Patient Testimonials Preview - Carousel with patient stories */}
            <TestimonialsPreview />
            
            {/* Call-to-Action Banner - Background with hospital/surgery imagery */}
            <CTABanner bookingOnline={bookingOnlineFuntion} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 
        SEO Meta Tags for Search Engine Optimization:
        Title: Dr. G. Praveen Prabu - Leading Cardiothoracic & Vascular Surgeon in Coimbatore
        Description: Expert cardiovascular & thoracic surgeon with 10+ years experience. 
        Specializing in CABG, valve replacements, minimally invasive heart surgery in Coimbatore.
        Keywords: Cardiothoracic Surgeon Coimbatore, Heart Surgery Expert, Best Cardiovascular Surgeon Tamil Nadu, 
        Minimally Invasive Cardiac Surgery, CABG Surgery Coimbatore, Valve Replacement Surgery
      */}
      
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {renderPage()}
      
      {/* Footer with contact details, Google Map, and quick links */}
      <Footer footerRedirection={footerRedirection}/>
    </div>
  );
}