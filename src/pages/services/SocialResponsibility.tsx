import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  GraduationCap,
  Building,
  ArrowRight,
  CheckCircle,
  Globe,
  Handshake,
} from "lucide-react";

const SocialResponsibility = () => {
  const capabilities = [
    {
      icon: Building,
      title: "Community Development",
      description:
        "Focused initiatives to improve local infrastructure and create lasting positive impact in the communities where we operate.",
    },
    {
      icon: GraduationCap,
      title: "Education & Healthcare",
      description:
        "Supporting education and healthcare initiatives to enhance quality of life and empower local communities for sustainable growth.",
    },
    {
      icon: Globe,
      title: "Renewable Energy Awareness",
      description:
        "Promoting renewable energy awareness and environmental sustainability practices throughout our operational regions.",
    },
    {
      icon: Handshake,
      title: "Economic Growth",
      description:
        "Fostering economic growth and development in regional communities through sustainable business practices and local partnerships.",
    },
  ];

  const keyStats = [
    { number: "Community", label: "Development" },
    { number: "Education", label: "& Healthcare" },
    { number: "Environmental", label: "Awareness" },
    { number: "Economic", label: "Growth" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                Social Responsibility
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6 animate-fade-in">
                Building Communities, Powering Futures
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                At JMK Groups, we are committed to community development and
                sustainable practices that create lasting positive impact. Our
                initiatives focus on improving local infrastructure, supporting
                education and healthcare, promoting renewable energy awareness,
                and fostering economic growth in the regions where we operate.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-glow rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-card rounded-2xl p-8 shadow-glow">
                <div className="grid grid-cols-2 gap-6">
                  {keyStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Social Impact Initiatives
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              By integrating social responsibility into our core operations, we
              aim to empower communities, enhance quality of life, and
              contribute to a greener, more sustainable future for all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <capability.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SocialResponsibility;
