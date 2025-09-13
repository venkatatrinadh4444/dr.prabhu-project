import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Heart, Award, Clock, ChevronRight, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import drPraveenImage from 'figma:asset/eadf3a6a6d1a712c519faf10a0ce291eb447a7b1.png';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 animate-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-teal-100/40 to-transparent rounded-full blur-3xl"></div>
      
      {/* Animated heartbeat line */}
      <div className="absolute top-1/2 left-0 right-0 h-px opacity-10">
        <div className="h-full bg-gradient-to-r from-transparent via-blue-600 to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-green-100 to-green-50 text-green-800 border-green-200 px-4 py-2 font-medium">
                <Award className="h-4 w-4 mr-2" />
                Leading Cardiothoracic Surgeon
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-serif font-semibold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-teal-800 bg-clip-text text-transparent">
                  Dr. G. Praveen Prabu
                </span>
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-serif font-medium text-gray-700">
                  Leading <span className="text-blue-600">Cardiothoracic</span> & 
                  <span className="text-teal-600"> Vascular Surgeon</span> in Coimbatore
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Expertise in Adult Cardiac, Pediatric Heart Surgeries, 
                  and Minimally Invasive Thoracic Procedures. Delivering world-class 
                  cardiac care with compassion and precision.
                </p>
              </div>
            </div>


            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-200">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-white animate-heartbeat" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">1000+</p>
                  <p className="text-sm text-gray-600">Successful Surgeries</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-teal-100 hover:shadow-lg transition-all duration-200">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-2 rounded-full">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">99%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-green-100 hover:shadow-lg transition-all duration-200">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Expert</p>
                  <p className="text-sm text-gray-600">Medical Care</p>
                </div>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Book Appointment
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-full transition-all duration-200 group"
              >
                Learn More About Me
                <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Available for Emergency Consultations</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium">IACTS • SMICTSI Member</span>
              </div>
            </div>
          </div>

          {/* Doctor's Professional Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              {/* Background gradient */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/50 via-teal-200/50 to-green-200/50 rounded-3xl blur-2xl opacity-70"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-white/50 backdrop-blur-sm">
                <ImageWithFallback 
                  src={drPraveenImage}
                  alt="Dr. G. Praveen Prabu - Cardiovascular & Thoracic Surgeon"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
                />
                
                {/* Floating credentials card */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-gold to-yellow-500 text-white p-3 rounded-full shadow-lg">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">MBBS, MS, MCh</p>
                      <p className="text-sm text-gray-600">Cardiovascular Surgery</p>
                      <p className="text-xs text-gold font-medium">Royal Care Hospital</p>
                    </div>
                  </div>
                </div>

                {/* Floating expertise badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-teal-500 to-teal-600 text-white p-4 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <p className="text-2xl font-bold">Expert</p>
                    <p className="text-xs font-medium opacity-90">Surgeon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}