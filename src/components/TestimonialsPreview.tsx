import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Quote, ArrowRight, Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function TestimonialsPreview() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      age: 58,
      location: "Coimbatore",
      procedure: "Bypass Surgery",
      rating: 5,
      quote: "My father underwent bypass surgery with Dr. Praveen. His expertise and care made the recovery smooth. The post-operative follow-up was exceptional.",
      avatar: "RK",
      verified: true
    },
    {
      name: "Priya Sharma", 
      age: 45,
      location: "Erode",
      procedure: "Valve Replacement",
      rating: 5,
      quote: "One of the best heart surgeons in Coimbatore for complex heart problems. Dr. Praveen's surgical skills and compassionate approach are remarkable.",
      avatar: "PS",
      verified: true
    },
    {
      name: "Mohammed Ali",
      age: 62,
      location: "Salem", 
      procedure: "Emergency Surgery",
      rating: 5,
      quote: "During my cardiac emergency, Dr. Praveen acted swiftly and professionally. His 24/7 availability saved my life. Forever grateful.",
      avatar: "MA",
      verified: true
    }
  ];

  // const stats = [
  //   {
  //     value: "4.9/5",
  //     label: "Patient Rating",
  //     icon: Star,
  //     color: "text-yellow-500"
  //   },
  //   {
  //     value: "1000+",
  //     label: "Happy Patients",
  //     icon: Heart,
  //     color: "text-red-500"
  //   },
  //   {
  //     value: "99%",
  //     label: "Recommendation Rate",
  //     icon: Quote,
  //     color: "text-blue-500"
  //   }
  // ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-teal-50/30"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-teal-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-200 mb-6 px-4 py-2 font-medium">
            Patient Stories
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real experiences from patients who have received life-changing cardiac care 
            from Dr. Praveen Prabu and his dedicated team.
          </p>
        </div>

        {/* Statistics */}
        {/* <div className="flex justify-center mb-16">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Featured Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border border-white/50 hover:-translate-y-2 group">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
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
                  {testimonial.verified && (
                    <Badge variant="secondary" className="ml-2 text-xs bg-green-100 text-green-700">
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-blue-200 mb-3" />
                  <p className="text-gray-700 italic leading-relaxed group-hover:text-gray-900 transition-colors">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Patient Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-blue-200">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-teal-500 text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Age {testimonial.age}, {testimonial.location}</p>
                    <Badge variant="outline" className="mt-1 text-xs border-blue-200 text-blue-700">
                      {testimonial.procedure}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

       {/* 
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 lg:p-12 text-center border border-blue-100">
          <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-600">1000+</div>
              <p className="text-gray-600">Lives Transformed</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">99%</div>
              <p className="text-gray-600">Patient Satisfaction</p>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Quote className="h-5 w-5 text-blue-600" />
              <p className="text-lg font-semibold text-gray-900">Collective Patient Feedback</p>
            </div>
            <p className="text-gray-700 italic leading-relaxed">
              "Dr. Praveen doesn't just treat the heart; he touches lives with his compassionate care 
              and unwavering commitment to healing. His expertise gives us hope and his kindness gives us strength."
            </p>
          </div>

          <Button 
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            Read More Testimonials
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}