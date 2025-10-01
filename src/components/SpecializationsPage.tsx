import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { 
  Heart, 
  Baby, 
  Scissors, 
  Activity,
  CheckCircle,
  Users,
  Award,
  Clock,
  Shield,
  ArrowRight,
  Stethoscope,
  User,
  FileText,
  HeartHandshake,
  RefreshCw,
  TrendingUp,
  Star,
  UserCheck,
  Calendar,
  ClipboardList,
  HeartPulse
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import thoracic from '../assets/thoracic.jpg';
import mics from '../assets/mimc.jpg';
import adultSurgeryImg from '../assets/adultSpecialization.jpg'
import adultCardiac from '../assets/adultCaridac.jpg'
import aroticImg from '../assets/aorticImage.jpg'

export function SpecializationsPage() {
  const specializations = [
    {
      title: "Minimally Invasive Cardiac Surgery (MICS)",
      icon: Scissors,
      color: "from-teal-500 to-teal-600", 
      bgColor: "from-teal-50 to-teal-100",
      image: mics,
      procedures: [
        "Minimally invasive valve replacement",
        "Small incision CABG", 
        "Robotic-assisted cardiac surgery",
        "Port-access cardiac procedures",
        "Endoscopic harvesting techniques"
      ],
      seoText: "Advanced minimally invasive techniques for quicker healing, minimal scars, and shorter hospital stay. Leading expert in MICS procedures in Coimbatore."
    },
    {
      title: "Adult Cardiac Surgeries",
      icon: Heart,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      image: adultCardiac,
      procedures: [
        "Beating-heart CABG (Coronary Artery Bypass Grafting)",
        "On-pump CABG",
        "Valve repair & replacements (AVR, MVR, DVR)",
        "Aortic root surgeries",
        "Complex cardiac reconstructions"
      ],
      seoText: "Expert in bypass and valve surgeries with high success rate and faster recovery. Specialized in complex adult cardiac procedures using advanced techniques."
    },
    {
      title: "Pediatric Cardiac Surgeries", 
      icon: Baby,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      image: "https://images.unsplash.com/photo-1723031840495-57a7154b191b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBoZWFydCUyMHN1cmdlcnklMjBjaGlsZHJlbiUyMGhvc3BpdGFsfGVufDF8fHx8MTc1NjcwNzg1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      procedures: [
        "ASD (Atrial Septal Defect) repair",
        "VSD (Ventricular Septal Defect) repair", 
        "TOF (Tetralogy of Fallot) surgeries",
        "Patent Ductus Arteriosus (PDA) closures",
        "Complex congenital heart defect corrections"
      ],
      seoText: "Specialized in life-saving congenital heart surgeries for children. Expertise in complex pediatric cardiac procedures with focus on gentle, child-centered care."
    },
    {
      title: "Thoracic & Vascular Surgeries",
      icon: Activity,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100", 
      image: thoracic,
      procedures: [
        "Aortic surgeries & aneurysm repairs",
        "Vascular reconstruction procedures",
        "VATS (Video-Assisted Thoracoscopic Surgery)",
        "Tracheal surgeries & repairs",
        "Mediastinal tumor resections"
      ],
      seoText: "Expert care in complex thoracic and vascular procedures using cutting-edge technology. Specialized in aortic surgeries and minimally invasive thoracic procedures."
    },
    {
      title: "Aortic & Complex Heart Surgeries",
      icon: Activity,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100", 
      image: aroticImg,
      procedures: [
        "Aortic Surgery (including Bentall procedure)",
        "Adult Congenital Defect Corrections", 
        "Re-do / Re-operative Heart Surgeries"
      ],
      seoText: "Expert in advanced aortic and complex heart procedures with precision techniques to ensure optimal outcomes. Specialized in treating life-threatening conditions involving the aorta and complex structural abnormalities of the heart."
    }
  ];

  const whyChoosePoints = [
    {
      icon: Award,
      title: "Surgical Excellence",
      description: "Decade of expertise in complex cardiac procedures"
    },
    {
      icon: Scissors,
      title: "Minimally Invasive Specialist", 
      description: "Leading expert in MICS procedures for faster recovery"
    },
    {
      icon: Users,
      title: "Trust",
      description: "Trusted by patients across Tamil Nadu for cardiac care"
    },
    {
      icon: Shield,
      title: "IACTS & SMICTSI Member",
      description: "Active member of premier cardiac surgery associations"
    }
  ];

  const patientJourneySteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Comprehensive cardiac evaluation and diagnosis",
      icon: Stethoscope,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2, 
      title: "Detailed Diagnosis",
      description: "Advanced imaging and cardiac catheterization if needed",
      icon: Activity,
      color: "from-teal-500 to-teal-600"
    },
    {
      step: 3,
      title: "Surgical Planning",
      description: "Personalized treatment plan and pre-operative preparation",
      icon: ClipboardList,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 4,
      title: "Expert Surgery",
      description: "State-of-the-art surgical procedures with latest techniques",
      icon: HeartPulse,
      color: "from-red-500 to-red-600"
    },
    {
      step: 5,
      title: "Recovery & Care",
      description: "Dedicated post-operative monitoring and rehabilitation",
      icon: HeartHandshake,
      color: "from-green-500 to-green-600"
    },
    {
      step: 6,
      title: "Follow-up Care",
      description: "Long-term cardiac health monitoring and wellness guidance",
      icon: RefreshCw,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1596144241742-a54dffcc9b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnZW9uJTIwb3BlcmF0aW5nJTIwcm9vbSUyMGhlYXJ0JTIwc3VyZ2VyeXxlbnwxfHx8fDE3NTY3MDc4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dr. Praveen in surgical environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-teal-800/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-6 px-4 py-2 font-medium">
              <Heart className="h-4 w-4 mr-2 text-red-300" />
              Expert Medical Services
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-semibold mb-6">
              Specializations & Services
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Comprehensive <span className="text-white font-semibold">Cardiothoracic & Vascular Surgery</span> Services 
              in Coimbatore – Expertise in Adult, Pediatric, and <span className="text-white font-semibold">Minimally 
              Invasive Cardiac Care</span> with world-class surgical outcomes.
            </p>

            {/* <div className="flex flex-wrap gap-6 justify-center mt-8">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="text-2xl font-bold">10+</div>
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
            </div> */}
            
          </div>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-8">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Advanced Cardiac Care with
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Precision & Compassion
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              With over a decade of expertise, <strong className="text-gray-900">Dr. G. Praveen Prabu</strong> provides 
              advanced treatment in cardiovascular and thoracic surgery, combining precision with compassionate care. 
              From <span className="text-blue-600 font-medium">beating-heart bypass</span> to 
              <span className="text-teal-600 font-medium"> pediatric congenital heart repairs</span>, he specializes 
              in procedures that ensure faster recovery and improved quality of life for every patient.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <Heart className="h-10 w-10 text-blue-600 mb-4 mx-auto" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Adult Cardiac Surgery</h4>
                <p className="text-gray-600 text-sm">Complex bypass and valve procedures</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl">
                <Baby className="h-10 w-10 text-teal-600 mb-4 mx-auto" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Pediatric Care</h4>
                <p className="text-gray-600 text-sm">Congenital heart defect corrections</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <Scissors className="h-10 w-10 text-purple-600 mb-4 mx-auto" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Minimally Invasive</h4>
                <p className="text-gray-600 text-sm">Advanced MICS techniques</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Specializations */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-blue-200 mb-6 px-4 py-2 font-medium">
              Core Medical Specializations
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Comprehensive Cardiac &
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Thoracic Surgery Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Praveen offers a complete range of cardiac and thoracic surgical procedures, 
              utilizing the latest medical technologies and surgical techniques for optimal patient outcomes.
            </p>
          </div>

          <div className="grid gap-8">
            {specializations.map((spec, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-0">
                <div className={`grid lg:grid-cols-5 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`lg:col-span-2 relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <ImageWithFallback 
                      src={spec.image}
                      alt={spec.title}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${spec.color} opacity-20`}></div>
                    <div className="absolute top-4 left-4">
                      <div className={`bg-gradient-to-br ${spec.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                        <spec.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className={`lg:col-span-3 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {spec.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {spec.seoText}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg text-gray-900">Key Procedures:</h4>
                        <ul className="space-y-2">
                          {spec.procedures.map((procedure, procIndex) => (
                            <li key={procIndex} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{procedure}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* <div className="flex gap-6 pt-4">
                        <div className={`bg-gradient-to-br ${spec.bgColor} px-4 py-2 rounded-lg`}>
                          <div className="text-lg font-bold text-gray-900">{spec.stats.procedures || spec.stats.recovery}</div>
                          <div className="text-sm text-gray-600">{spec.stats.procedures ? 'Procedures' : 'Faster Recovery'}</div>
                        </div>
                        <div className={`bg-gradient-to-br ${spec.bgColor} px-4 py-2 rounded-lg`}>
                          <div className="text-lg font-bold text-gray-900">{spec.stats.success || '98%'}</div>
                          <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                      </div> */}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Praveen */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-gold/20 to-yellow-100 text-yellow-800 border-yellow-200 mb-6 px-4 py-2 font-medium">
              Excellence & Trust
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Why Choose
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Dr. G. Praveen Prabu?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Recognized as one of the <strong className="text-blue-600">best cardiothoracic surgeons in Coimbatore</strong> for 
              complex heart and thoracic procedures. Dr. Praveen combines surgical excellence with compassionate patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChoosePoints.map((point, index) => (
              <Card key={index} className="text-center p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border-0">
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                    <point.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900">{point?.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-blue-600 font-medium max-w-2xl mx-auto">
              "Trusted by patients across Tamil Nadu for life-saving cardiac procedures with exceptional surgical outcomes and personalized care."
            </p>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-blue-200 mb-6 px-4 py-2 font-medium">
              Patient Care Journey
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Your Path to
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Cardiac Wellness
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every patient receives personalized attention throughout their cardiac care journey, 
              from initial consultation to complete recovery and long-term wellness.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {patientJourneySteps.map((step, index) => (
                <Card key={index} className="relative p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group border-0">
                  <CardContent className="space-y-4">
                    <div className="relative">
                      <div className={`bg-gradient-to-br ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-white border-2 border-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                  
                  {index < patientJourneySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-300" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1631217868204-db1ed6bdd224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwcmVjb3ZlcnklMjBtZWRpY2FsJTIwY2FyZSUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NTY3MDc4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dr. Praveen with patient consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-teal-800/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
              Looking for Advanced Heart & 
              <br />
              Thoracic Care in Coimbatore?
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">
              Don't wait when it comes to your cardiac health. Book your consultation with 
              <span className="text-white font-semibold"> Dr. G. Praveen Prabu</span> today and take the first step 
              towards expert cardiac care with compassionate treatment and proven surgical excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded-full shadow-lg group text-lg"
              >
                Book Consultation Today
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white text-blue-600 font-semibold px-10 py-4 rounded-full transition-all duration-200 text-lg"
              >
                Emergency Contact
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Same Day Consultation</h4>
                <p className="text-blue-100 text-sm">Available for urgent cardiac cases</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Insurance Accepted</h4>
                <p className="text-blue-100 text-sm">Most major insurance plans supported</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HeartHandshake className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Comprehensive Care</h4>
                <p className="text-blue-100 text-sm">Complete cardiac care from diagnosis to recovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}