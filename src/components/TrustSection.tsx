import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Heart, 
  Award, 
  Users, 
  TrendingUp,
  Shield,
  Clock,
  Star,
  CheckCircle
} from "lucide-react";

export function TrustSection() {
  const achievements = [
    {
      icon: Clock,
      number: "Expert",
      label: "Medical Care",
      description: "Trusted by patients in cardiac & thoracic care",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      icon: TrendingUp,
      label: "Patient Recommendation", 
      description: "High success rate in complex heart surgeries",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      icon: Heart,
      number: "Expert",
      label: "Minimally Invasive Expert",
      description: "Advanced heart surgery with faster recovery",
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100"
    },
    {
      icon: Award,
      number: "IACTS",
      label: "Professional Memberships",
      description: "IACTS, SMICTSI certified surgeon",
      gradient: "from-gold to-yellow-500",
      bgGradient: "from-yellow-50 to-yellow-100"
    }
  ];

  const certifications = [
    {
      icon: Award,
      title: "Board Certified",
      subtitle: "Cardiovascular Surgery"
    },
    {
      icon: Shield,
      title: "IACTS Member",
      subtitle: "Professional Excellence"
    },
    {
      icon: Star,
      title: "SMICTSI",
      subtitle: "Surgical Innovation"
    },
    {
      icon: CheckCircle,
      title: "Hospital Accredited",
      subtitle: "Quality Assurance"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-blue-200 mb-6 px-4 py-2 font-medium">
            Trust & Excellence
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Proven Track Record of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Surgical Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dr. Praveen's commitment to excellence is reflected in every surgery, 
            every patient interaction, and every innovative technique adopted.
          </p>
        </div>

        {/* Main Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="group bg-white hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {achievement?.number}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {achievement.label}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Bar */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8 text-gray-900">
            Professional Certifications & Memberships
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <cert.icon className="h-8 w-8 text-gray-700" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{cert.title}</h4>
                <p className="text-sm text-gray-600">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-green-100 px-6 py-3 rounded-full border border-green-200">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-800 font-medium">
              Trusted by leading hospitals across Tamil Nadu
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}