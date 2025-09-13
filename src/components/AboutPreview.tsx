import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, GraduationCap, Building2, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import consultationImage from 'figma:asset/9181d70f54851a735381dc787f2f58bb3f5c4fbd.png';

export function AboutPreview() {
  const highlights = [
    {
      icon: GraduationCap,
      text: "Madras Medical College Graduate"
    },
    {
      icon: Building2,
      text: "Apollo Hospitals Trained"
    },
    {
      icon: Heart,
      text: "Expert in Cardiac Surgery"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-blue-50 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-teal-50 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              {/* Gradient background */}
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-100/50 via-teal-100/50 to-green-100/50 rounded-3xl blur-2xl opacity-70"></div>
              
              {/* Image container */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-2xl border border-white/50">
                <ImageWithFallback 
                  src={consultationImage}
                  alt="Dr. Praveen in professional consultation setting"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                />
                
                {/* Overlay badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/50">
                  <p className="text-sm font-semibold text-blue-600">In Consultation</p>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <p className="text-2xl font-bold">Expert</p>
                  <p className="text-sm opacity-90">Cardiac Care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-teal-100 to-green-100 text-teal-800 border-teal-200 px-4 py-2 font-medium">
                About Dr. Praveen
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-serif font-semibold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  Dedicated to
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Healing Hearts
                </span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-gray-900">Dr. G. Praveen Prabu</strong> is a highly skilled 
                  Cardiovascular & Thoracic Surgeon trained at premier institutes like 
                  <span className="text-blue-600 font-medium"> Madras Medical College</span> and 
                  <span className="text-teal-600 font-medium"> Apollo Hospitals</span>.
                </p>
                
                <p className="text-lg">
                  With extensive expertise in beating-heart CABG, valve replacements, 
                  congenital heart surgeries, and minimally invasive procedures, he is 
                  dedicated to delivering world-class cardiac care in Coimbatore.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 transition-all duration-200">
                  <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-2 rounded-full flex-shrink-0">
                    <highlight.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{highlight.text}</span>
                </div>
              ))}
            </div>

            {/* Specializations preview */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-2xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-3">Key Specializations:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Beating-Heart CABG",
                  "Valve Replacements", 
                  "Congenital Heart Surgery",
                  "Minimally Invasive Procedures"
                ].map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/70 text-blue-700 border-blue-200">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button 
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Read Full Biography
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}