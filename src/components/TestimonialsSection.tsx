import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Quote, Heart, CheckCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      age: 58,
      location: "Coimbatore",
      procedure: "Coronary Bypass Surgery",
      rating: 5,
      quote: "Dr. Praveen's expertise and compassionate care saved my life. The surgery was successful, and his follow-up care has been exceptional. I'm now living a healthy, active life thanks to him.",
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      age: 45,
      location: "Erode",
      procedure: "Valve Replacement",
      rating: 5,
      quote: "I was terrified about my heart surgery, but Dr. Praveen's calm demeanor and clear explanations put me at ease. The surgery went perfectly, and I'm grateful for his skilled hands.",
      avatar: "PS"
    },
    {
      name: "Mohammed Ali",
      age: 62,
      location: "Salem",
      procedure: "Emergency Cardiac Surgery",
      rating: 5,
      quote: "During my cardiac emergency, Dr. Praveen acted swiftly and saved my life. His 24/7 availability and expert surgical skills are truly remarkable. Forever grateful to him.",
      avatar: "MA"
    },
    {
      name: "Lakshmi Devi",
      age: 51,
      location: "Tirupur",
      procedure: "Minimally Invasive Surgery",
      rating: 5,
      quote: "The minimally invasive approach Dr. Praveen used meant faster recovery and minimal scarring. His modern techniques and caring approach make him the best cardiac surgeon.",
      avatar: "LD"
    },
    {
      name: "Suresh Babu",
      age: 67,
      location: "Coimbatore",
      procedure: "Thoracic Surgery",
      rating: 5,
      quote: "Dr. Praveen performed my complex thoracic surgery with remarkable precision. His post-operative care and attention to detail ensured a smooth recovery process.",
      avatar: "SB"
    },
    {
      name: "Anitha Raj",
      age: 39,
      location: "Pollachi",
      procedure: "Cardiac Consultation",
      rating: 5,
      quote: "Dr. Praveen's thorough examination and honest advice helped me avoid unnecessary surgery. His ethical approach and genuine concern for patients is truly admirable.",
      avatar: "AR"
    }
  ];

  const stats = [
    {
      icon: Star,
      value: "4.9/5",
      label: "Patient Rating",
      color: "text-yellow-600"
    },
    {
      icon: Heart,
      value: "98.5%",
      label: "Success Rate",
      color: "text-red-600"
    },
    {
      icon: CheckCircle,
      value: "5000+",
      label: "Happy Patients",
      color: "text-green-600"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-yellow-100 text-yellow-800 mb-4">Patient Testimonials</Badge>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            What Our <span className="text-blue-600">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The trust and satisfaction of our patients is our greatest achievement. 
            Here's what they have to say about their experience with Dr. Praveen Prabu.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`flex justify-center mb-2`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-2xl md:text-3xl text-gray-900 mb-1">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="text-lg text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Age {testimonial.age}, {testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < testimonial.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>

                <Badge variant="secondary" className="w-fit mb-4 text-xs">
                  {testimonial.procedure}
                </Badge>

                <div className="flex-1 relative">
                  <Quote className="h-6 w-6 text-blue-200 mb-2" />
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl text-gray-900 mb-6">Trusted by Thousands</h3>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="space-y-2">
              <div className="text-3xl text-blue-600">15+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl text-blue-600">5000+</div>
              <p className="text-gray-600">Lives Transformed</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl text-blue-600">98.5%</div>
              <p className="text-gray-600">Patient Satisfaction</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Quote className="h-5 w-5 text-blue-600" />
              <p className="text-lg text-gray-900">Patient's Choice</p>
            </div>
            <p className="text-gray-600 italic">
              "Dr. Praveen doesn't just treat the heart; he touches the soul with his compassionate care 
              and unwavering commitment to healing."
            </p>
            <p className="text-sm text-blue-600 mt-2">- Collective Patient Feedback</p>
          </div>
        </div>
      </div>
    </section>
  );
}