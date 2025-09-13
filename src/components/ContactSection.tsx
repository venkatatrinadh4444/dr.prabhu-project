import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  AlertCircle,
  Navigation,
  Building2
} from "lucide-react";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+91 98765 43210",
      secondary: "+91 87654 32109",
      description: "24/7 Emergency Line Available",
      action: "Call Now",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "dr.praveen@cardiaccare.com",
      secondary: "appointments@cardiaccare.com",
      description: "We'll respond within 2 hours",
      action: "Send Email",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      primary: "Cardiac Care Center",
      secondary: "Coimbatore, Tamil Nadu",
      description: "Easy parking & wheelchair accessible",
      action: "Get Directions",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const scheduleInfo = [
    {
      day: "Monday - Friday",
      time: "9:00 AM - 6:00 PM",
      type: "Regular Consultations"
    },
    {
      day: "Saturday",
      time: "9:00 AM - 1:00 PM",
      type: "Weekend Consultations"
    },
    {
      day: "Sunday",
      time: "Emergency Only",
      type: "Emergency Services"
    },
    {
      day: "24/7",
      time: "Always Available",
      type: "Emergency Cardiac Care"
    }
  ];

  const locations = [
    {
      name: "Main Clinic",
      address: "123 Heart Care Street, RS Puram, Coimbatore - 641002",
      phone: "+91 98765 43210",
      facilities: ["OPD", "Diagnostics", "Consultation"]
    },
    {
      name: "Surgical Center",
      address: "456 Medical Plaza, Saibaba Colony, Coimbatore - 641011",
      phone: "+91 87654 32109",
      facilities: ["Surgery", "ICU", "Recovery"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">Contact Us</Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Get In Touch for <span className="text-blue-600">Expert Care</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take the first step towards better cardiac health? 
            Contact us today to schedule your consultation with Dr. G. Praveen Prabu.
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <AlertCircle className="h-6 w-6 text-red-600" />
            <h3 className="text-lg text-red-800">Emergency Cardiac Care</h3>
          </div>
          <p className="text-red-700 mb-4">
            For cardiac emergencies, call our 24/7 emergency line immediately
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Phone className="h-4 w-4 mr-2" />
            Emergency: +91 98765 43210
          </Button>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{method.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-lg text-gray-900">{method.primary}</p>
                  <p className="text-sm text-gray-600">{method.secondary}</p>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
                <Button variant="outline" className="w-full">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Schedule Information */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Consultation Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {scheduleInfo.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-gray-900">{schedule.day}</p>
                    <p className="text-sm text-gray-600">{schedule.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-600">{schedule.time}</p>
                  </div>
                </div>
              ))}
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <p className="text-blue-800">Book Appointment</p>
                </div>
                <p className="text-sm text-blue-600 mb-3">
                  Schedule your consultation at your convenience
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Schedule Online
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Location Information */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-green-600" />
                Our Locations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {locations.map((location, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="text-lg text-gray-900 mb-2">{location.name}</h4>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                      <p className="text-sm text-gray-600">{location.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <p className="text-sm text-gray-600">{location.phone}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {location.facilities.map((facility, facIndex) => (
                      <Badge key={facIndex} variant="secondary" className="text-xs">
                        {facility}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl mb-4">Ready to Schedule Your Consultation?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Don't wait when it comes to your heart health. Our expert team is ready to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call +91 98765 43210
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Calendar className="h-5 w-5 mr-2" />
              Book Online Appointment
            </Button>
          </div>
          
          <div className="mt-8 p-6 bg-white/10 rounded-xl">
            <p className="text-blue-100 mb-2">
              "Your heart health is our priority. We're here to provide compassionate, 
              expert care when you need it most."
            </p>
            <p className="text-sm text-blue-200">- Dr. G. Praveen Prabu</p>
          </div>
        </div>
      </div>
    </section>
  );
}