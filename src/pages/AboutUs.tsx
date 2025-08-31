import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Calendar,
  TrendingUp
} from 'lucide-react';
import aboutUsImage from '@/assets/about_us.jpg';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={aboutUsImage} 
          alt="About Us" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl mb-6">
              Empowering communities through education, healthcare, and sustainable development
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Mission & Vision */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To create sustainable positive change in underserved communities by providing 
                  access to quality education, healthcare, and livelihood opportunities. We work 
                  tirelessly to break the cycle of poverty and empower individuals to build better futures.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  A world where every individual, regardless of their background, has the opportunity 
                  to thrive through education, health, and economic empowerment.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={aboutUsImage} 
                  alt="Our Mission" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm">Years of Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-teal-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, our organization began as a small initiative to address educational 
                disparities in rural communities. What started as a single school support program has 
                grown into a comprehensive development organization working across multiple states in India.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we've expanded our reach to include healthcare initiatives, skill 
                development programs, and sustainable livelihood projects. Our work is guided by the 
                belief that true change comes from empowering communities to solve their own challenges.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we serve over 50,000 beneficiaries annually through our various programs, 
                working in partnership with local governments, communities, and other NGOs to maximize impact.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Heart, title: "Compassion", desc: "We approach every individual with empathy and understanding" },
                { icon: Target, title: "Excellence", desc: "We strive for the highest standards in all our programs" },
                { icon: Users, title: "Collaboration", desc: "We work together with communities and partners" },
                { icon: Globe, title: "Sustainability", desc: "We focus on long-term, sustainable solutions" }
              ].map((value, idx) => (
                <Card key={idx} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, number: "50,000+", label: "Beneficiaries Served", desc: "Across all programs" },
                { icon: Award, number: "25+", label: "Programs Implemented", desc: "Education, health & livelihood" },
                { icon: Globe, number: "8", label: "States Covered", desc: "Pan-India presence" },
                { icon: TrendingUp, number: "95%", label: "Program Success Rate", desc: "Measured outcomes" }
              ].map((stat, idx) => (
                <Card key={idx} className="text-center p-6 bg-gray-50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-teal-600 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
