import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Shield,
  Award,
  Clock,
  Building2,
  Navigation,
} from "lucide-react";

export function Footer({
  footerRedirection,
}: {
  footerRedirection: (name: string) => void;
}) {
  const quickLinks = [
    { name: "Home", href: "home" },
    { name: "About Me", href: "about" },
    { name: "Specializations", href: "specializations" },
    { name: "Appointments", href: "appointments" },
  ];

  const services = [
    "Adult Cardiac Surgery",
    "Pediatric Heart Surgery",
    "Minimally Invasive Surgery",
    "Emergency Cardiac Care",
    "Thoracic Surgery",
    "Valve Replacement",
  ];

  const certifications = [
    { name: "MBBS, MS, MCh", icon: Award, color: "text-gold" },
    { name: "IACTS Member", icon: Shield, color: "text-blue-400" },
    { name: "SMICTSI Certified", icon: Building2, color: "text-teal-400" },
    { name: "24/7 Emergency", icon: Clock, color: "text-green-400" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-blue-300" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Practice Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg blur opacity-50"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                  <Heart className="h-8 w-8 text-white animate-heartbeat" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-semibold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Dr. G. Praveen Prabu
                </h3>
                <p className="text-blue-200 font-medium">
                  Cardiovascular & Thoracic Surgeon
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              Providing exceptional cardiovascular and thoracic surgical care in
              Coimbatore. Our commitment to excellence, compassionate care, and
              cutting-edge medical technology ensures the best outcomes for our
              patients.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="font-semibold text-white">
                    Emergency: 0422 - 222 7523
                  </p>
                  <p className="text-sm text-gray-300">
                    Available 24/7 for emergencies
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <Mail className="h-5 w-5 text-teal-400" />
                <div>
                  <p className="font-semibold text-white">
                    praveenctvscbe@gmail.com
                  </p>
                  <p className="text-sm text-gray-300">
                    We respond within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <MapPin className="h-5 w-5 text-green-400" />
                <div>
                  <p className="font-semibold text-white">
                    RoyalCare Hospital, Neelambur
                  </p>
                  <p className="text-sm text-gray-300">
                    Easy parking & wheelchair accessible
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`text-gray-400 ${social.color} hover:bg-white/10 transition-all duration-200 hover:scale-110`}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => footerRedirection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-200"></div>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-semibold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Heart className="h-3 w-3 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-serif font-semibold text-white text-center mb-8">
            Professional Certifications & Memberships
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200 group"
              >
                <cert.icon
                  className={`h-5 w-5 ${cert.color} group-hover:scale-110 transition-transform`}
                />
                <span className="text-gray-300 text-sm font-medium">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Google Map Placeholder */}
        <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-white">
              Visit Our Clinic
            </h4>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-400 hover:text-blue-300"
              onClick={() =>
                window.open(
                  "https://maps.google.com/?q=RoyalCare+Hospital+Neelambur+Coimbatore",
                  "_blank"
                )
              }
            >
              <Navigation className="h-4 w-4 mr-2" />
              Get Directions
            </Button>
          </div>

          {/* Google Maps Embed */}

          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3915.724580997779!2d77.08691360893975!3d11.059263939061772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRoyalCare%20Hospital%20Neelambur%20Coimbatore.!5e0!3m2!1sen!2sin!4v1757747151606!5m2!1sen!2sin"
              className="w-full h-64"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700/50" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>
              &copy; 2024 Dr. G. Praveen Prabu - Cardiovascular & Thoracic
              Surgeon. All rights reserved.
            </p>
            <p className="text-xs mt-1">
              Website designed for optimal patient experience and accessibility.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Medical Disclaimer
            </a>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 p-6 bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-700/50 rounded-2xl text-center backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="h-5 w-5 text-red-400 animate-heartbeat" />
            <Badge className="bg-red-500/20 text-red-200 border-red-400/50">
              Medical Emergency
            </Badge>
          </div>
          <p className="text-red-200 text-sm leading-relaxed">
            <strong>Cardiac Emergency:</strong> If you're experiencing a cardiac
            emergency, please call emergency services immediately at{" "}
            <strong>108</strong> or visit the nearest emergency room. This
            website is not intended for emergency medical situations.
          </p>
        </div>
      </div>
    </footer>
  );
}
