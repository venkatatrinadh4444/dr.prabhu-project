import { Button } from "./ui/button";
import { Phone, MapPin, Clock, Menu, Heart, Shield, Award } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", page: "home" },
    { name: "About Me", page: "about" },
    { name: "Specializations", page: "specializations" },
    { name: "Appointments", page: "appointments" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      {/* Top contact bar - hidden on scroll for premium look */}
      <div className={`bg-gradient-to-r from-blue-50 to-teal-50 transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'py-2 opacity-100'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-blue-700">
              <Phone className="h-4 w-4" />
              <span className="font-medium">0422 - 222 7523</span>
            </div>
            <div className="flex items-center gap-2 text-teal-700">
              <MapPin className="h-4 w-4" />
              <span>RoyalCare Neelambur, Coimbatore</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <Clock className="h-4 w-4" />
              <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              {/* Logo Icon */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full blur opacity-25 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-teal-600 p-3 rounded-full shadow-lg">
                  <div className="flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                    <div className="absolute top-1 right-1">
                      <Shield className="h-3 w-3 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div>
                <h1 className="text-xl lg:text-2xl font-serif font-semibold bg-gradient-to-r from-blue-700 to-teal-700 bg-clip-text text-transparent">
                  Dr. G. Praveen Prabu
                </h1>
                <div className="flex items-center gap-2">
                  <Award className="h-3 w-3 text-gold" />
                  <p className="text-xs lg:text-sm text-gray-600 font-medium">
                    Consultant Cardiovascular & Thoracic Surgeon
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <button 
                key={index}
                onClick={() =>{
                  setCurrentPage(item.page)
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                className={`relative font-medium transition-colors duration-200 group ${
                  currentPage === item.page 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transition-all duration-200 ${
                  currentPage === item.page ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button onClick={()=>{
              setCurrentPage('appointments')
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
              className="hidden sm:flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-blue-500"
            >
              Book Appointment
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-sm animate-fade-in-up">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg transition-colors font-medium text-left ${
                    currentPage === item.page
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="mx-4 mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-full"
              >
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}