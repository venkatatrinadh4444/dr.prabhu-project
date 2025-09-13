import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Heart, 
  Stethoscope, 
  Activity, 
  Shield, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: "Coronary Artery Surgery",
      description: "Advanced bypass surgery techniques for coronary artery disease with minimal invasive approaches.",
      procedures: ["CABG Surgery", "Off-Pump CABG", "Minimally Invasive CABG", "Emergency Revascularization"],
      image: "https://images.unsplash.com/photo-1715111966405-05b32356a290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW92YXNjdWxhciUyMHN1cmdlcnklMjBtZWRpY2FsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc1NjY0MTkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Activity,
      title: "Valve Surgery",
      description: "Comprehensive valve repair and replacement procedures using state-of-the-art techniques.",
      procedures: ["Aortic Valve Replacement", "Mitral Valve Repair", "Tricuspid Valve Surgery", "TAVR Procedures"],
      image: "https://images.unsplash.com/photo-1736325680503-6e0c7d9a45da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMHN1cmdlcnklMjBtZWRpY2FsJTIwcHJvY2VkdXJlfGVufDF8fHx8MTc1NjU2ODIxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Shield,
      title: "Thoracic Surgery",
      description: "Specialized surgical treatments for chest and lung conditions with precision and care.",
      procedures: ["Lung Resection", "Thoracoscopic Surgery", "Chest Wall Reconstruction", "Mediastinal Surgery"],
      image: "https://images.unsplash.com/photo-1694787590597-ba49c7cdc2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBmYWNpbGl0eSUyMG1vZGVybnxlbnwxfHx8fDE3NTY2NDE5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency cardiac services with rapid response teams."
    },
    {
      icon: Users,
      title: "Multidisciplinary Team",
      description: "Collaborative approach with cardiologists, anesthesiologists, and specialized nurses."
    },
    {
      icon: Stethoscope,
      title: "Advanced Diagnostics",
      description: "State-of-the-art imaging and diagnostic equipment for accurate assessments."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Rigorous safety protocols and infection control measures for patient protection."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 mb-4">Our Services</Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Comprehensive <span className="text-blue-600">Cardiac & Thoracic</span> Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full spectrum of cardiovascular and thoracic surgical services, 
            utilizing the latest technologies and evidence-based practices to ensure optimal patient outcomes.
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-16 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-gray-900">{service.title}</h3>
                    <p className="text-blue-600">Specialized Care</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg text-gray-900">Procedures Offered:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.procedures.map((procedure, procIndex) => (
                      <div key={procIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{procedure}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 group">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <ImageWithFallback 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl text-gray-900 text-center mb-8">Why Choose Our Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl mb-4">Ready to Schedule Your Consultation?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Take the first step towards better cardiac health. Our team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Call Now: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}