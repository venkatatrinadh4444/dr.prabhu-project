import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import emailjs from "emailjs-com";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Heart,
  ArrowRight,
  CheckCircle,
  Shield,
  Users,
  Stethoscope,
  FileText,
  CreditCard,
  HeartHandshake,
  Building2,
  Navigation,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AppointmentsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const templateParams = {
        fullName: formData.fullName,
        age: formData.age,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message || "N/A",
      };

      await emailjs.send(
        "service_5q4ubhl", // your service ID
        "template_a26hdux", // your template ID
        templateParams,
        "VKWo7t75R0Ld9C1LO" // your public key
      );

      setSuccess(true);
      setFormData({
        fullName: "",
        age: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
      alert("Appointment request sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send the appointment request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "General Consultation",
    "Cardiac Surgery Consultation",
    "Pediatric Heart Surgery",
    "Minimally Invasive Cardiac Surgery (MICS)",
    "Coronary Artery Bypass Surgery (CABG)",
    "Valve Repair/Replacement Surgery",
    "Thoracic Surgery",
    "Vascular Surgery",
    "Emergency Cardiac Care",
    "Follow-up Consultation",
  ];

  // const contactOptions = [
  //   {
  //     icon: Phone,
  //     title: "Call Directly",
  //     subtitle: "9600367489",
  //     description: "Available 24/7 for emergency consultations",
  //     color: "from-green-500 to-green-600",
  //     action: "Call Now",
  //   },
  //   {
  //     icon: MessageCircle,
  //     title: "WhatsApp Chat",
  //     subtitle: "9894067489",
  //     description: "Quick queries and appointment booking",
  //     color: "from-green-500 to-green-600",
  //     action: "Chat on WhatsApp",
  //   },
  //   {
  //     icon: Mail,
  //     title: "Email Us",
  //     subtitle: "praveenctvscbe@gmail.com",
  //     description: "Send detailed medical reports and queries",
  //     color: "from-blue-500 to-blue-600",
  //     action: "Send Email",
  //   },
  // ];

  const contactOptions = [
    {
      icon: Phone,
      title: "Call Directly",
      subtitle: "9600367489",
      description: "Available 24/7 for emergency consultations",
      color: "from-green-500 to-green-600",
      action: "Call Now",
      link: "tel:9600367489", // 📞 Dialer
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      subtitle: "9894067489",
      description: "Quick queries and appointment booking",
      color: "from-green-500 to-green-600",
      action: "Chat on WhatsApp",
      link: `https://wa.me/9894067489?text=${encodeURIComponent(
        "Hello Doctor, I am contacting regarding a doctor appointment. Could you please assist me?"
      )}`, // ✅ Prefilled message
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "praveenctvscbe@gmail.com",
      description: "Send detailed medical reports and queries",
      color: "from-blue-500 to-blue-600",
      action: "Send Email",
      gmailLink: `https://mail.google.com/mail/?view=cm&fs=1&to=praveenctvscbe@gmail.com&su=${encodeURIComponent(
        "Doctor Appointment Request"
      )}&body=${encodeURIComponent(
        "Hello Doctor, I would like to request a consultation. Please let me know the available slots."
      )}`,
      mailtoLink: `mailto:praveenctvscbe@gmail.com?subject=${encodeURIComponent(
        "Doctor Appointment Request"
      )}&body=${encodeURIComponent(
        "Hello Doctor, I would like to request a consultation. Please let me know the available slots."
      )}`,
    },
  ];

  const faqs = [
    {
      question: "What should I bring for my consultation?",
      answer:
        "Please bring all your previous medical records, current medications list, recent test reports (ECG, ECHO, blood tests), insurance cards, and a list of your symptoms or concerns. If you have any cardiac imaging (CT scan, angiogram), please bring those as well.",
    },
    {
      question: "Do you accept emergency appointments?",
      answer:
        "Yes, we provide 24/7 emergency cardiac care. For cardiac emergencies, please call our emergency hotline directly at 9600367489 or visit the RoyalCare Hospital emergency department. Our team is always ready to handle urgent cardiac cases.",
    },
    {
      question: "How long does a consultation take?",
      answer:
        "Initial consultations typically take 30-45 minutes, allowing Dr. Praveen to thoroughly review your medical history, perform examination, and discuss treatment options. Follow-up appointments usually take 15-20 minutes.",
    },
    {
      question: "Which insurance providers are accepted?",
      answer:
        "We accept most major insurance providers including Star Health, HDFC Ergo, ICICI Lombard, New India Assurance, United India Insurance, and government schemes like ESI and CGHS. Please verify your coverage before your appointment.",
    },
    {
      question: "Can I get a second opinion consultation?",
      answer:
        "Absolutely! We encourage patients to seek second opinions for major cardiac procedures. Please bring all your medical records, test reports, and previous doctor's recommendations for a comprehensive evaluation.",
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1739185069005-8cb46fef2702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwd2FybSUyMGhvc3BpdGFsJTIwYXBwb2ludG1lbnR8ZW58MXx8fHwxNzU2NzIwNjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Warm hospital consultation scene"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-teal-800/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-6 px-4 py-2 font-medium">
              <Calendar className="h-4 w-4 mr-2 text-blue-200" />
              Book Your Appointment
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-serif font-semibold mb-6">
              Book Your Appointment with
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-teal-200 bg-clip-text text-transparent">
                Dr. G. Praveen Prabu
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Get expert care for your{" "}
              <span className="text-white font-semibold">
                cardiovascular and thoracic concerns
              </span>
              . Schedule your consultation with Coimbatore's leading cardiac
              surgeon today.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-blue-200 mb-6 px-4 py-2 font-medium">
                Schedule Consultation
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  Book Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Consultation
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll contact you to confirm your
                appointment within 2 hours.
              </p>
            </div>

            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-serif text-center">
                  <Heart className="h-8 w-8 inline-block mr-3 text-red-200" />
                  Appointment Booking Form
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="fullName"
                        className="text-sm font-medium text-gray-700"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="age"
                        className="text-sm font-medium text-gray-700"
                      >
                        Age *
                      </Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={(e) =>
                          handleInputChange("age", e.target.value)
                        }
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-700"
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="service"
                      className="text-sm font-medium text-gray-700"
                    >
                      Select Service *
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleInputChange("service", value)
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Choose the type of consultation" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="preferredDate"
                        className="text-sm font-medium text-gray-700"
                      >
                        Preferred Date *
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          handleInputChange("preferredDate", e.target.value)
                        }
                        required
                        className="h-12"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="preferredTime"
                        className="text-sm font-medium text-gray-700"
                      >
                        Preferred Time
                      </Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) =>
                          handleInputChange("preferredTime", value)
                        }
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                          <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                          <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                          <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                          <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                          <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message/Symptoms (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your symptoms or any specific concerns..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-full shadow-lg flex-1"
                    >
                      {loading ? "Sending..." : "Confirm Appointment"}
                    </button>
                    {success && (
                      <p className="text-green-600 mt-2">
                        Appointment sent successfully!
                      </p>
                    )}

                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1 border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold py-3 rounded-full transition-all duration-200"
                      onClick={() =>
                        window.open("https://wa.me/+919600367489", "_blank")
                      }
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp Booking
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information & Quick Contact Options */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-blue-200 mb-6 px-4 py-2 font-medium">
              Get in Touch
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Contact Information &
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Quick Contact Options
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-8">
              <Card className="p-8 shadow-lg border-0">
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-gray-900">
                        Hospital Address
                      </h3>
                      <p className="text-gray-600">
                        RoyalCare Hospital, Neelambur
                      </p>
                      <p className="text-gray-600">Coimbatore, Tamil Nadu</p>
                      <p className="text-gray-600">India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-gray-900">
                        Phone Number
                      </h3>
                      <p className="text-gray-600">9600367489 (Direct)</p>
                      <p className="text-gray-600">9894067489 (WhatsApp)</p>
                      <p className="text-gray-600">
                        24/7 Emergency Hotline Available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-gray-900">
                        Email Address
                      </h3>
                      <p className="text-gray-600">praveenctvscbe@gmail.com</p>
                      <p className="text-gray-600">Response within 4-6 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-gray-900">
                        Consultation Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600">
                        Sunday: 10:00 AM - 2:00 PM
                      </p>
                      <p className="text-gray-600">Emergency: 24/7 Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps Placeholder */}
            <div className="space-y-8">
              <Card className="p-6 shadow-lg border-0">
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-serif font-semibold text-gray-900">
                      Find Us Here
                    </h3>
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    {/* <div className="p-6 text-center text-gray-600">
                      <Navigation className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p className="font-medium">RoyalCare Hospital</p>
                      <p className="text-sm">Neelambur, Coimbatore</p>
                      <Button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
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
                    </div> */}

                    {/* Map Section */}
                    <div className="h-[400px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3915.724580997779!2d77.08691360893975!3d11.059263939061772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRoyalCare%20Hospital%20Neelambur%20Coimbatore.!5e0!3m2!1sen!2sin!4v1757747151606!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {contactOptions.map((option, index) => (
              <Card
                key={index}
                className="text-center p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border-0 cursor-pointer"
              >
                <CardContent className="space-y-4">
                  <div
                    className={`bg-gradient-to-br ${option.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200`}
                  >
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900">
                    {option.title}
                  </h3>
                  <p className="font-medium text-gray-700">{option.subtitle}</p>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                  <Button
                    className="w-full mt-4 cursor-pointer"
                    variant="outline"
                    onClick={() => {
                      if (option.link) {
                        // For Call + WhatsApp
                        window.location.href = option.link;
                      } else if (option.gmailLink) {
                        // For Email → Gmail first, fallback to mailto
                        try {
                          window.open(option.gmailLink, "_blank");
                        } catch (e) {
                          window.location.href = option.mailtoLink;
                        }
                      }
                    }}
                  >
                    {option.action}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200 mb-6 px-4 py-2 font-medium">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Have Questions?
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                We Have Answers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to commonly asked questions about consultations,
              procedures, and appointments with Dr. Praveen.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              Your Health, Our Priority
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">
              Don't wait when it comes to your cardiac health. Schedule your
              consultation with
              <span className="text-white font-semibold">
                {" "}
                Dr. G. Praveen Prabu
              </span>{" "}
              today and take the first step towards expert cardiovascular care.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded-full shadow-lg group text-lg"
              >
                Schedule Your Consultation Today
                <Calendar className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white text-blue-600 font-semibold px-10 py-4 rounded-full transition-all duration-200 text-lg"
              >
                Emergency Contact
                <Phone className="h-5 w-5 ml-2" />
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <h4 className="font-semibold text-lg mb-2">Safe & Secure</h4>
                <p className="text-blue-100 text-sm">
                  HIPAA compliant consultations
                </p>
              </div>

              <div className="text-center">
                <CreditCard className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <h4 className="font-semibold text-lg mb-2">
                  Insurance Accepted
                </h4>
                <p className="text-blue-100 text-sm">
                  Most major plans supported
                </p>
              </div>

              <div className="text-center">
                <HeartHandshake className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <h4 className="font-semibold text-lg mb-2">
                  Compassionate Care
                </h4>
                <p className="text-blue-100 text-sm">
                  Patient-centered approach
                </p>
              </div>

              <div className="text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <h4 className="font-semibold text-lg mb-2">Expert Treatment</h4>
                <p className="text-blue-100 text-sm">
                  Advanced cardiac procedures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
