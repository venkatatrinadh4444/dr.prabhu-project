import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Building2, Award, Stethoscope } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "MBBS",
      subtitle: "Bachelor of Medicine & Bachelor of Surgery",
      institution: "Madras Medical College"
    },
    {
      icon: GraduationCap,
      title: "MS (General Surgery)",
      subtitle: "Master of Surgery",
      institution: "Government Medical College"
    },
    {
      icon: Award,
      title: "MCh (Cardiovascular Surgery)",
      subtitle: "Master of Chirurgiae",
      institution: "PGIMER Chandigarh"
    },
    {
      icon: Stethoscope,
      title: "Fellowship",
      subtitle: "Advanced Cardiac Surgery",
      institution: "International Program"
    }
  ];

  const affiliations = [
    "Indian Association of Cardiovascular-Thoracic Surgeons (IACTS)",
    "Association of Thoracic and Cardiovascular Surgeons of Asia (ATCSA)",
    "Indian Medical Association (IMA)",
    "Tamil Nadu Medical Council (TNMC)"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">About Dr. Praveen</Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Dedicated to Excellence in <span className="text-blue-600">Cardiac Care</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With extensive training from premier medical institutions and years of clinical experience, 
            Dr. G. Praveen Prabu is committed to providing world-class cardiovascular and thoracic surgical care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Professional Image */}
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1691934286085-c88039d93dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwb2ZmaWNlJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc1NjY0MTkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Dr. Praveen in consultation"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl text-gray-900 mb-4">Professional Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. G. Praveen Prabu is a highly skilled Consultant Cardiovascular & Thoracic Surgeon 
                with over 15 years of dedicated service in the field of cardiac and thoracic surgery. 
                His journey began with a distinguished academic career, followed by extensive clinical 
                training at some of India's most prestigious medical institutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Throughout his career, Dr. Praveen has been at the forefront of adopting innovative 
                surgical techniques and technologies, ensuring his patients receive the most advanced 
                care available. His commitment to continuous learning and patient-centered care has 
                earned him recognition among peers and gratitude from thousands of patients.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-gray-900 mb-3">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Coronary Artery Bypass Surgery",
                  "Valve Replacement",
                  "Minimally Invasive Surgery",
                  "Emergency Cardiac Care",
                  "Thoracic Surgery",
                  "Pediatric Cardiac Surgery"
                ].map((expertise, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                    {expertise}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Educational Credentials */}
        <div className="mb-16">
          <h3 className="text-2xl text-gray-900 text-center mb-8">Educational Qualifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <credential.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg text-gray-900 mb-2">{credential.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{credential.subtitle}</p>
                  <p className="text-xs text-blue-600">{credential.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Affiliations */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl text-gray-900 text-center mb-8">Professional Memberships</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-blue-600 w-2 h-2 rounded-full"></div>
                <p className="text-gray-700">{affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}