import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Phone, Calendar, Clock, MapPin, ArrowRight, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTABanner({bookingOnline}:{bookingOnline:()=>void}) {
  const quickActions = [
    {
      icon: Phone,
      title: "Emergency Line",
      subtitle: "9600367489",
      action: "Call Now",
      urgent: true
    },
    {
      icon: Calendar,
      title: "Book Appointment",
      subtitle: "Schedule Today",
      action: "Book Online",
      urgent: false
    },
    {
      icon: MapPin,
      title: "Visit Clinic",
      subtitle: "RoyalCare Hospital, Neelambur",
      action: "Get Directions",
      urgent: false
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1711343777918-6d395c16e37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGNvcnJpZG9yJTIwbWVkaWNhbCUyMGZhY2lsaXR5fGVufDF8fHx8MTc1NjY0MjkyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern hospital corridor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-teal-800/95"></div>
        
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-white/20 via-transparent to-white/20 animate-gradient"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 font-medium">
                <Heart className="h-4 w-4 mr-2 animate-heartbeat" />
                Available 24/7 for Emergencies
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-serif font-semibold leading-tight">
                Book Your Consultation Today
              </h2>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                <span className="text-white font-semibold">World-Class Cardiac Care</span> in Coimbatore. 
                Don't wait when it comes to your heart health. 
                Schedule your consultation with Dr. Praveen Prabu today.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Clock className="h-5 w-5 text-white flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Same Day Consultation</p>
                  <p className="text-sm text-blue-100">Emergency appointments available</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Heart className="h-5 w-5 text-white flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Expert Diagnosis</p>
                  <p className="text-sm text-blue-100">Advanced cardiac assessment</p>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100 font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group text-lg"
              >
                Book an Appointment Now
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-blue-200">
                ✓ Free initial consultation review • ✓ Insurance accepted • ✓ Flexible scheduling
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-white text-center lg:text-left">
              Quick Actions
            </h3>
            
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-200 hover:scale-105 group ${
                    action.urgent 
                      ? 'bg-red-500/20 border-red-400/50 hover:bg-red-500/30' 
                      : 'bg-white/10 border-white/20 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl flex-shrink-0 ${
                      action.urgent 
                        ? 'bg-red-500 shadow-red-500/50' 
                        : 'bg-white/20'
                    } shadow-lg`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-lg">{action.title}</h4>
                      <p className="text-blue-100 text-sm">{action.subtitle}</p>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-white hover:bg-white/20 font-medium group-hover:translate-x-1 transition-transform"
                      onClick={() => {
                        if (action.title === "Emergency Line") {
                          window.open("tel:9600367489", "_self");
                        } else if (action.title === "Visit Clinic") {
                          window.open("https://maps.google.com/?q=RoyalCare+Hospital+Neelambur+Coimbatore", "_blank");
                        } else if(action.title === "Book Appointment") {
                          return bookingOnline()
                        }
                        
                      }}
                    >
                      {action.action}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Note */}
            <div className="bg-red-500/20 border border-red-400/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="bg-red-500 p-2 rounded-full flex-shrink-0 animate-pulse">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Cardiac Emergency?</h4>
                  <p className="text-red-100 text-sm leading-relaxed">
                    For immediate cardiac emergencies, call our 24/7 emergency line 
                    or visit the nearest emergency room. Dr. Praveen is available for urgent consultations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}