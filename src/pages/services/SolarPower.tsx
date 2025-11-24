import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Building2,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  Zap,
  Settings,
  Users,
} from "lucide-react";

const SolarPower = () => {
  const capabilities = [
    {
      icon: Building2,
      title: "Dedicated Solar Energy Wing",
      description:
        "We have end-to-end in-house capabilities across all aspects; we follow global best practices across Products, Process, Technology and Safety.",
    },
    {
      icon: Target,
      title: "Customized Solar Projects",
      description:
        "JMK is committed to developing customized solar Projects for Industrial, Commercial, and Institutional consumers. We offer each customer an innovative solution concept.",
    },
    {
      icon: Award,
      title: "Professional Project Management",
      description:
        "With an experienced Project management team, we follow an exceptionally professional and systematic approach to all our solar projects.",
    },
    {
      icon: Settings,
      title: "EPC Services",
      description:
        "Complete Engineering, Procurement, and Construction services from site acquisition, design, and installation to commissioning and long-term O&M.",
    },
  ];

  const keyStats = [
    { number: "100MW+", label: "Solar Projects" },
    { number: "20+", label: "Years Experience" },
    { number: "End-to-End", label: "EPC Services" },
    { number: "150+", label: "Team Professionals" },
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
                Solar Power Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6 animate-fade-in">
                Turning Sunlight into Possibilities
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                At JMK Groups, we deliver comprehensive solar energy solutions
                that power businesses, industries, and communities. As a leading
                EPC partner and project developer, we provide end-to-end
                services from site acquisition, design, and installation to
                commissioning and long-term O&M.
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
              Solar Power Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solar energy solutions from consultation to
              long-term operations, delivering customized projects for
              industrial, commercial, and institutional consumers.
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

export default SolarPower;
