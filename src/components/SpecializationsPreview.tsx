import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Heart, 
  Baby, 
  Stethoscope, 
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Play,
  ExternalLink
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import videoCard1Img from '../assets/1ST - vIDEO Thumbnail.jpg'
import videoCard2Img from '../assets/2nd - Video Thumbnail.jpg'
import videoCard3Img from '../assets/3rd - Video Thumbnail.jpg'
import videoCard4Img from '../assets/4th - Video Thumbnail.png'

export function SpecializationsPreview({redirectHanlder}:{redirectHanlder:(name:string)=>void}) {
  const videoCards = [
    {
      icon: Heart,
      title: "Heart Surgery Insights | Dr. G. Praveen Prabu",
      description: "Comprehensive overview of modern cardiac surgical techniques and patient care approaches",
      videoUrl: "https://www.youtube.com/watch?v=4kYM2NMiZhQ",
      thumbnail: videoCard1Img,
      duration: "2:17",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Stethoscope,
      title: "Advanced Cardiac Procedures | Medical Education",
      description: "Educational video covering cutting-edge cardiovascular surgical procedures and innovations",
      videoUrl: "https://www.youtube.com/watch?v=OmtXasI_A7g",
      thumbnail: videoCard2Img,
      duration: "2:23",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Minimally Invasive Heart Surgery Techniques",
      description: "Learn about revolutionary minimally invasive cardiac surgery methods and patient benefits",
      videoUrl: "https://youtu.be/kiYZeF1MKc4?si=7zqAD9IRlIxTRi3A", // Placeholder - you can replace with actual educational video
      thumbnail: videoCard3Img,
      duration: "21:32",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: Baby,
      title: "CABG - proximal anastomosis without partial aorta  clamping",
      description: "Understanding complex congenital heart defect repairs and pediatric cardiac surgery approaches",
      videoUrl: "https://vimeo.com/1123609800?share=copy#t=0", // Placeholder - you can replace with actual educational video
      thumbnail: videoCard4Img,
      duration: "8:56",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Faster Recovery",
      description: "Minimally invasive techniques for quicker healing"
    },
    {
      icon: Heart,
      title: "Precision Care",
      description: "Advanced surgical methods with highest accuracy"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "99% success rate in complex procedures"
    }
  ];

  return (
    <section id="specializations" className="py-24 bg-gradient-to-br from-gray-50 via-white to-teal-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200 mb-6 px-4 py-2 font-medium">
            Specializations
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Educational Videos &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Medical Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch educational videos and gain insights into advanced cardiac and thoracic 
            surgical procedures from Dr. Praveen Prabu.
          </p>
        </div>

        {/* Educational Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {videoCards.map((video, index) => (
            <Card 
              key={index} 
              className="group bg-white hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => window.open(video.videoUrl, '_blank')}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-2xl group-hover:bg-white transition-colors duration-200">
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </div>
                </div>
                
                {/* Icon and Duration */}
                <div className={`absolute top-4 left-4 bg-gradient-to-br ${video.gradient} p-3 rounded-xl shadow-lg`}>
                  <video.icon className="h-6 w-6 text-white" />
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md">
                  <span className="text-white text-xs font-medium">{video.duration}</span>
                </div>
                
                {/* External Link Icon */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Play className="h-4 w-4" />
                    <span className="text-sm font-medium">Watch Video</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                    Educational
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50 mb-12">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8 text-gray-900">
            Educational Content Benefits
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-serif font-semibold mb-4">
              Ready for Expert Cardiac Care?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Schedule a consultation to discuss your cardiac health needs 
              with Dr. Praveen Prabu today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full shadow-lg group"
              >
                View All Services
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={()=>redirectHanlder('appointments')}
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 text-blue-600 cursor-pointer"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}