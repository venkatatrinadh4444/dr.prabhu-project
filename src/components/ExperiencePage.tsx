import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { 
  Calendar,
  GraduationCap,
  Building2,
  Award,
  Users,
  Clock,
  Star,
  ArrowRight,
  BookOpen,
  Stethoscope,
  Brain,
  Heart,
  TrendingUp,
  FileText,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Quote,
  CheckCircle
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ExperiencePage() {
  const timelineData = [
    {
      year: "2012",
      title: "MBBS - Bachelor of Medicine",
      institution: "Government Medical College, Tamil Nadu", 
      description: "Graduated with honors in Medicine and Surgery",
      icon: GraduationCap,
      type: "education"
    },
    {
      year: "2015", 
      title: "MS General Surgery",
      institution: "Post Graduate Institute of Medical Education",
      description: "Specialized training in general surgical procedures", 
      icon: GraduationCap,
      type: "education"
    },
    {
      year: "2017",
      title: "MCh Cardiothoracic Surgery", 
      institution: "All India Institute of Medical Sciences (AIIMS)",
      description: "Advanced specialization in heart and thoracic surgery",
      icon: GraduationCap,
      type: "education"
    },
    {
      year: "2018",
      title: "Fellowship - Minimally Invasive Cardiac Surgery",
      institution: "International Training Center, Singapore",
      description: "Advanced training in MICS and robotic cardiac procedures",
      icon: Award,
      type: "fellowship"
    },
    {
      year: "2019",
      title: "Senior Resident - Cardiothoracic Surgery",
      institution: "Government General Hospital, Chennai",
      description: "Leading complex cardiac procedures and training junior doctors",
      icon: Building2,
      type: "career"
    },
    {
      year: "2021",
      title: "Consultant Cardiothoracic Surgeon", 
      institution: "Royal Care Hospital, Coimbatore",
      description: "Established independent practice with focus on advanced cardiac care",
      icon: Building2,
      type: "career"
    },
    {
      year: "2023",
      title: "Department Head - Cardiac Surgery",
      institution: "Royal Care Hospital, Coimbatore", 
      description: "Leading the cardiac surgery department with 1000+ successful procedures",
      icon: Award,
      type: "achievement"
    }
  ];

  const highlights = [
    {
      number: "1000+",
      title: "Successful Heart Surgeries", 
      description: "Complex cardiac procedures with 98% success rate",
      icon: Heart,
      color: "from-red-500 to-red-600"
    },
    {
      number: "12+", 
      title: "Years of Excellence",
      description: "Advanced cardiovascular and thoracic surgical care",
      icon: Clock,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "Senior",
      title: "Consultant Position", 
      description: "Department Head at Royal Care Hospital, Coimbatore",
      icon: Building2,
      color: "from-teal-500 to-teal-600"
    },
    {
      number: "International",
      title: "Advanced Training",
      description: "Specialized training in MICS & minimally invasive procedures",
      icon: Award,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      age: 58,
      location: "Coimbatore",
      condition: "Coronary Artery Bypass",
      quote: "Dr. Praveen is the best cardiothoracic surgeon in Coimbatore. His expertise in bypass surgery saved my life. The minimally invasive approach meant faster recovery and less pain.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1545945774-73922eb27813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwdGVzdGltb25pYWwlMjBoYXBweSUyMHJlY292ZXJ5JTIwbWVkaWNhbHxlbnwxfHx8fDE3NTY3MjA2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Priya Sundaram", 
      age: 45,
      location: "Salem", 
      condition: "Valve Replacement Surgery",
      quote: "Excellent heart surgeon with compassionate care. Dr. Praveen performed my valve replacement with precision. I'm grateful for his expertise and the entire team's support.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1545945774-73922eb27813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwdGVzdGltb25pYWwlMjBoYXBweSUyMHJlY292ZXJ5JTIwbWVkaWNhbHxlbnwxfHx8fDE3NTY3MjA2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Arjun Krishnan",
      age: 35,
      location: "Erode",
      condition: "Pediatric Heart Surgery", 
      quote: "Our daughter needed complex congenital heart surgery. Dr. Praveen's pediatric cardiac expertise gave us hope. Today she's healthy and playing like any normal child.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1545945774-73922eb27813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwdGVzdGltb25pYWwlMjBoYXBweSUyMHJlY292ZXJ5JTIwbWVkaWNhbHxlbnwxfHx8fDE3NTY3MjA2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Lakshmi Venkatesh",
      age: 62, 
      location: "Tirupur",
      condition: "Thoracic Surgery",
      quote: "Best thoracic surgeon in Tamil Nadu. Dr. Praveen's minimally invasive approach for my lung surgery was remarkable. Quick recovery and excellent post-operative care.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1545945774-73922eb27813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwdGVzdGltb25pYWwlMjBoYXBweSUyMHJlY292ZXJ5JTIwbWVkaWNhbHxlbnwxfHx8fDE3NTY3MjA2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const publications = [
    {
      title: "Advances in Minimally Invasive Cardiac Surgery",
      journal: "Indian Journal of Thoracic Surgery",
      year: "2023",
      type: "Research Paper"
    },
    {
      title: "Pediatric Congenital Heart Surgery Outcomes",
      journal: "Asian Cardiovascular Journal", 
      year: "2022",
      type: "Clinical Study"
    },
    {
      title: "CABG Surgery: Beating Heart vs On-Pump Techniques",
      journal: "Journal of Cardiac Surgery India",
      year: "2021", 
      type: "Comparative Study"
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1640876777012-bdb00a6323e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb3N1cmdlb24lMjBob3NwaXRhbCUyMGNsaW5pY2FsJTIwc2V0dGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTY3MjA2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dr. Praveen in professional hospital clinical setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-teal-800/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-6 px-4 py-2 font-medium">
              <Award className="h-4 w-4 mr-2 text-gold-300" />
              Clinical Excellence
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-semibold mb-6 animate-fade-in-up">
              Over a Decade of Excellence in 
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-teal-200 bg-clip-text text-transparent">
                Cardiothoracic Surgery
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
              Proven track record in advanced <span className="text-white font-semibold">heart, thoracic, and minimally invasive</span> cardiovascular treatments. 
              Dedicated to providing world-class surgical care with <span className="text-white font-semibold">compassion and precision</span>.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="text-2xl font-bold">12+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-blue-200">Successful Surgeries</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-blue-200 mb-6 px-4 py-2 font-medium">
              Professional Journey
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Career Milestones &
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Academic Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of continuous learning, professional growth, and dedication to advancing 
              cardiovascular surgical care in India.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-purple-500"></div>
              
              {timelineData.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${
                            item.type === 'education' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                            item.type === 'fellowship' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                            item.type === 'career' ? 'bg-gradient-to-br from-teal-500 to-teal-600' :
                            'bg-gradient-to-br from-gold to-yellow-600'
                          }`}>
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{item.year}</div>
                            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-blue-600 font-medium mb-3">{item.institution}</p>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full shadow-md z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-gold/20 to-yellow-100 text-yellow-800 border-yellow-200 mb-6 px-4 py-2 font-medium">
              Professional Achievements
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Excellence in
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Cardiac Surgery
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized expertise in <strong className="text-blue-600">cardiovascular surgery in Coimbatore</strong> with a 
              proven track record of successful outcomes and patient satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border-0">
                <CardContent className="space-y-4">
                  <div className={`bg-gradient-to-br ${highlight.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200`}>
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{highlight.number}</div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-blue-200 mb-6 px-4 py-2 font-medium">
              Patient Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                What Patients Say About
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Dr. Praveen's Care
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from patients who have experienced life-saving cardiac care and 
              compassionate treatment under Dr. Praveen's expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative">
                <CardContent className="space-y-6">
                  <Quote className="h-10 w-10 text-blue-200 absolute top-4 right-4" />
                  
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.age} years • {testimonial.location}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.condition}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200 mb-6 px-4 py-2 font-medium">
              Academic Contributions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Research &
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Publications
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contributing to the advancement of cardiovascular surgery through research, 
              publications, and medical education.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {publications.map((publication, index) => (
                <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0 group">
                  <CardContent className="flex items-center gap-6">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {publication.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-1">{publication.journal}</p>
                      <p className="text-gray-600 text-sm">{publication.type} • {publication.year}</p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold">
                Explore More Publications
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Quote className="h-16 w-16 text-blue-200 mx-auto mb-8" />
            
            <blockquote className="text-3xl lg:text-4xl font-serif font-medium leading-relaxed mb-8">
              "My mission is to provide every patient with the highest quality cardiac care, 
              combining surgical excellence with compassionate healing."
            </blockquote>
            
            <p className="text-xl text-blue-100 mb-10">
              — Dr. G. Praveen Prabu, Consultant Cardiothoracic & Vascular Surgeon
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-12 py-4 rounded-full shadow-lg group text-lg"
            >
              Book an Appointment Today
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <h4 className="font-semibold text-lg mb-2">Direct Contact</h4>
                <p className="text-blue-100">Available for consultation</p>
              </div>
              
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <h4 className="font-semibold text-lg mb-2">Royal Care Hospital</h4>
                <p className="text-blue-100">Coimbatore, Tamil Nadu</p>
              </div>
              
              <div className="text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <h4 className="font-semibold text-lg mb-2">Expert Care</h4>
                <p className="text-blue-100">Advanced cardiac surgery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}