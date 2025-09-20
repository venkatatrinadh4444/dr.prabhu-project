import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { 
  GraduationCap, 
  Building2, 
  Award, 
  Heart, 
  Quote,
  Calendar,
  MapPin,
  BookOpen,
  Stethoscope,
  Users,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import drPraveenImage from 'figma:asset/eadf3a6a6d1a712c519faf10a0ce291eb447a7b1.png';
import consultationImage from 'figma:asset/9181d70f54851a735381dc787f2f58bb3f5c4fbd.png';
import newDrPraveenImage from 'figma:asset/9c237fd80c1a435d83ebea78083ef507cbd7b2e0.png';
import doctorImage from '../assets/profile-image1.jpg';
import doctorImage2 from '../assets/profile-image2.jpg';
import collegeImg from '../assets/college.jpg';
import assistantProImg from '../assets/aboutUsSection.jpg'
import associateConsultant from '../assets/aboutMeSection.jpg'

export function AboutPage({redirectHanlder}:{redirectHanlder:(name:string)=>void}) {
  const educationTimeline = [
    {
      degree: "MBBS",
      institution: "Madurai Medical College",
      university: "TN Dr. MGR University",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600"
    },
    {
      degree: "DNB (General Surgery)",
      institution: "Sri Ramakrishna Hospital",
      university: "Coimbatore",
      icon: Stethoscope,
      color: "from-teal-500 to-teal-600"
    },
    {
      degree: "M.Ch (Cardiothoracic Surgery)",
      institution: "Madras Medical College",
      university: "Chennai (Rajiv Gandhi Hospital)",
      icon: Heart,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const careerJourney = [
    {
      institution: "Coimbatore Medical College Hospital",
      description: "Foundation training in general medicine and surgery",
      image: collegeImg
    },
    {
      position: "Assistant Professor",
      institution: "Madurai Medical College Hospital",
      description: "Teaching and clinical practice in cardiothoracic surgery",
      image: assistantProImg
    },
    {
      position: "Associate Consultant",
      institution: "Apollo Greams Road Hospital, Chennai",
      description: "Advanced cardiac surgery and minimally invasive procedures",
      image: associateConsultant
    },
    {
      position: "Consultant Cardiothoracic Surgeon",
      institution: "Royal Care Hospital, Coimbatore",
      description: "Leading cardiac surgery department with focus on patient care excellence",
      image: "https://images.unsplash.com/photo-1739285452629-2672b13fa42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBjb25zdWx0aW5nJTIwcGF0aWVudCUyMGV4YW1pbmF0aW9ufGVufDF8fHx8MTc1NjY0NjExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const memberships = [
    {
      name: "Indian Association of Cardiothoracic Surgeons",
      abbreviation: "IACTS",
      description: "National professional body for cardiac surgeons",
      icon: Heart,
      color: "text-blue-600"
    },
    {
      name: "Society of Minimally Invasive Cardiothoracic Surgeons in India",
      abbreviation: "SMICTSI",
      description: "Specialized society for advanced surgical techniques",
      icon: Award,
      color: "text-teal-600"
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-200 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-200 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-blue-200 px-4 py-2 font-medium">
                <BookOpen className="h-4 w-4 mr-2" />
                Professional Profile
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-serif font-semibold">
                  <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                    About Dr. G. Praveen Prabu
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Trusted <span className="font-semibold text-blue-600">Cardiothoracic Surgeon</span> in Coimbatore 
                  with <span className="font-semibold text-teal-600">extensive expertise</span> in adult and 
                  pediatric cardiac care, dedicated to delivering compassionate and advanced surgical solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-blue-100">
                  <Heart className="h-4 w-4 text-red-500 animate-heartbeat" />
                  <span className="text-sm font-medium text-gray-700">Expert Cardiac Surgeon</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-teal-100">
                  <Award className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium text-gray-700">IACTS & SMICTSI Member</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/50 via-teal-200/50 to-green-200/50 rounded-3xl blur-2xl opacity-70"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-2xl">
                <ImageWithFallback 
                  src={doctorImage}
                  alt="Dr. G. Praveen Prabu - Professional Portrait"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <ImageWithFallback 
                src={doctorImage2}
                alt="Dr. Praveen Prabu - Professional Portrait"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-3 rounded-full">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Patient-Centered Care</p>
                    <p className="text-sm text-gray-600">Compassionate Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif font-semibold">
                  <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                    Dedicated to Healing,
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    Committed to Care
                  </span>
                </h2>
                
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Dr. G. Praveen Prabu</strong> is a highly experienced 
                    Cardiovascular & Thoracic Surgeon dedicated to providing advanced cardiac care with 
                    unprecedented compassion and clinical excellence.
                  </p>
                  
                  <p>
                    Having trained at leading institutions like <span className="text-blue-600 font-medium">Madras Medical College</span> and 
                    <span className="text-teal-600 font-medium"> Apollo Hospitals</span>, he brings world-class expertise 
                    in minimally invasive cardiac and thoracic surgeries to patients in Coimbatore and across Tamil Nadu.
                  </p>
                  
                  <p>
                    His approach combines cutting-edge surgical techniques with a deep understanding of each 
                    patient's unique needs, ensuring not just successful outcomes but also faster recovery 
                    and improved quality of life.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Expert</div>
                  <p className="text-sm text-blue-700">Cardiac Surgeon</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-teal-600 mb-1">Advanced</div>
                  <p className="text-sm text-teal-700">Medical Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Background & Training */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200 mb-6 px-4 py-2 font-medium">
              Educational Excellence
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Academic Foundation &
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Training
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive medical education journey from premier institutions, 
              building the foundation for surgical excellence and patient care.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-purple-500"></div>
              
              <div className="space-y-12">
                {educationTimeline.map((edu, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline dot */}
                    <div className={`relative z-10 bg-gradient-to-br ${edu.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                      <edu.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                      <CardContent className="p-8">
                        <div className="mb-4">
                          <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                            {edu.degree}
                          </h3>
                        </div>
                        <div className="space-y-2">
                          <p className="text-lg font-medium text-blue-600">{edu.institution}</p>
                          <p className="text-gray-600">{edu.university}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-teal-100 to-green-100 text-teal-800 border-teal-200 mb-6 px-4 py-2 font-medium">
              Professional Journey
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-teal-800 bg-clip-text text-transparent">
                Career Milestones &
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                Professional Growth
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A progressive career journey marked by increasing responsibilities, 
              clinical expertise, and unwavering commitment to patient care excellence.
            </p>
          </div>

          <div className="grid gap-8">
            {careerJourney.map((career, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <ImageWithFallback 
                      src={career.image}
                      alt={career.position}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                  </div>
                  
                  <CardContent className="md:col-span-2 p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="mb-4">
                      </div>
                      
                      <h3 className="text-2xl font-serif font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {career?.position}
                      </h3>
                      
                      <p className="text-lg font-medium text-blue-600 mb-2">
                        {career.institution}
                      </p>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {career.description}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src={consultationImage}
            alt="Dr. Praveen with patient"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-teal-800/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Quote className="h-16 w-16 mx-auto mb-8 text-blue-200" />
            
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-8">
              My Philosophy & Approach
            </h2>
            
            <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8 italic">
              "Every patient deserves safe, precise, and compassionate treatment. 
              My mission is to bring advanced heart surgery techniques with faster 
              recovery and improved quality of life for every individual I treat."
            </blockquote>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-xl mb-2">Compassionate Care</h4>
                <p className="text-blue-100">Every patient is treated with dignity, respect, and personalized attention</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-xl mb-2">Surgical Excellence</h4>
                <p className="text-blue-100">Utilizing the latest minimally invasive techniques for optimal outcomes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-xl mb-2">Patient Partnership</h4>
                <p className="text-blue-100">Collaborative approach ensuring patients are informed and empowered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships & Recognition */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-gold/20 to-yellow-100 text-yellow-800 border-yellow-200 mb-6 px-4 py-2 font-medium">
              Professional Recognition
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Memberships &
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Professional Affiliations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Recognized nationally for his contributions in cardiac surgery, Dr. Praveen is an 
              active member of leading surgical associations and continues to advance the field 
              through research and clinical excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {memberships.map((membership, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 group border-0">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-200`}>
                    <membership.icon className={`h-10 w-10 ${membership.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                    {membership.abbreviation}
                  </h3>
                  
                  <h4 className="text-lg font-medium text-blue-600 mb-4">
                    {membership.name}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {membership.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50 text-center">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-gray-900">
              Professional Achievements & Recognition
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <Star className="h-8 w-8 text-gold mx-auto" />
                <h4 className="font-semibold text-gray-900">Excellence in Surgery</h4>
                <p className="text-sm text-gray-600">Recognized for outstanding surgical outcomes</p>
              </div>
              <div className="space-y-2">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto" />
                <h4 className="font-semibold text-gray-900">Academic Contributions</h4>
                <p className="text-sm text-gray-600">Published research in cardiac surgery</p>
              </div>
              <div className="space-y-2">
                <Users className="h-8 w-8 text-teal-600 mx-auto" />
                <h4 className="font-semibold text-gray-900">Community Service</h4>
                <p className="text-sm text-gray-600">Active in medical education and training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold">
              Get to Know More
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Schedule a consultation with Dr. Praveen Prabu today to discuss your cardiac health needs. 
              Experience compassionate care combined with surgical excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg group"
              >
                Book Appointment
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={()=>redirectHanlder('specializations')}
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white text-blue-600 font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                View Specializations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}