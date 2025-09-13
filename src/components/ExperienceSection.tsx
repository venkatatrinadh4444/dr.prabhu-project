import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Award, 
  TrendingUp, 
  Users, 
  Clock, 
  Heart, 
  Star,
  Building2,
  BookOpen
} from "lucide-react";

export function ExperienceSection() {
  const stats = [
    {
      icon: Heart,
      number: "1,500+",
      label: "Successful Surgeries",
      description: "Complex cardiac procedures completed with excellent outcomes"
    },
    {
      icon: Users,
      number: "5,000+",
      label: "Patients Treated",
      description: "Lives touched and improved through expert medical care"
    },
    {
      icon: Clock,
      number: "15+",
      label: "Years Experience",
      description: "Dedicated years of practice in cardiovascular surgery"
    },
    {
      icon: TrendingUp,
      number: "98.5%",
      label: "Success Rate",
      description: "Exceptional surgical outcomes and patient satisfaction"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Best Cardiac Surgeon Award",
      year: "2023",
      organization: "Tamil Nadu Medical Association",
      description: "Recognized for outstanding contributions to cardiac surgery"
    },
    {
      icon: Star,
      title: "Excellence in Patient Care",
      year: "2022",
      organization: "Indian Medical Council",
      description: "Honored for exceptional patient care and surgical outcomes"
    },
    {
      icon: BookOpen,
      title: "Research Publication Award",
      year: "2021",
      organization: "Journal of Cardiac Surgery",
      description: "Published groundbreaking research in minimally invasive surgery"
    },
    {
      icon: Building2,
      title: "Hospital Excellence Award",
      year: "2020",
      organization: "Coimbatore Medical Society",
      description: "Leading cardiac surgery department recognition"
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Advanced Robotic Surgery Certification",
      description: "Completed specialized training in robotic-assisted cardiac surgery"
    },
    {
      year: "2023",
      title: "Department Head Appointment",
      description: "Appointed as Head of Cardiovascular Surgery Department"
    },
    {
      year: "2021",
      title: "International Fellowship",
      description: "Completed advanced fellowship in pediatric cardiac surgery"
    },
    {
      year: "2019",
      title: "Minimally Invasive Surgery Pioneer",
      description: "Introduced cutting-edge minimally invasive techniques"
    },
    {
      year: "2015",
      title: "Private Practice Establishment",
      description: "Established specialized cardiac surgery practice in Coimbatore"
    },
    {
      year: "2010",
      title: "MCh Cardiovascular Surgery",
      description: "Completed Master of Chirurgiae from PGIMER Chandigarh"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 mb-4">Experience & Achievements</Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            <span className="text-purple-600">Proven Excellence</span> in Cardiac Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over a decade of dedicated service, countless lives saved, and continuous pursuit 
            of excellence in cardiovascular and thoracic surgery.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl text-gray-900 mb-2">{stat.number}</div>
                <h3 className="text-lg text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards & Recognition */}
        <div className="mb-16">
          <h3 className="text-2xl text-gray-900 text-center mb-8">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                      <achievement.icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg text-gray-900">{achievement.title}</h4>
                        <Badge variant="secondary" className="text-xs">{achievement.year}</Badge>
                      </div>
                      <p className="text-sm text-purple-600 mb-2">{achievement.organization}</p>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Timeline */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl text-gray-900 text-center mb-12">Professional Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 lg:left-1/2 lg:-ml-px"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-3 h-3 bg-purple-600 rounded-full lg:left-1/2 lg:-ml-1.5 z-10"></div>
                  
                  {/* Content */}
                  <div className={`flex-1 ml-12 lg:ml-0 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}>
                    <Card className="bg-gray-50 hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-purple-100 text-purple-800">{item.year}</Badge>
                        </div>
                        <h4 className="text-lg text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}