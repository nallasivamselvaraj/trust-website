import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Wind,
  Zap,
  Settings,
  Users,
  MapPin,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle,
  Target,
  Building2,
  Gauge,
  Shield,
} from "lucide-react";

const WindEnergy = () => {
  const capabilities = [
    {
      icon: Building2,
      title: "Turn Key Projects",
      description:
        "Complete end-to-end wind farm development with 20+ years of expertise. We identify optimal locations, handle land deals, transportation, foundation work, and TANGEDCO powering.",
    },
    {
      icon: Settings,
      title: "Annual O&M Security Services",
      description:
        "Comprehensive maintenance contracts ensuring maximum uptime and optimal performance. Our multi-brand O&M capabilities cover all major wind turbine manufacturers.",
    },
    {
      icon: Users,
      title: "Power Requirements Consultation",
      description:
        "Expert consultation and government liaison services from power registration to meeting organizational energy needs. We bridge the gap between power generation and consumption.",
    },
    {
      icon: Target,
      title: "Site Assessment & Micrositing",
      description:
        "Extensive wind resource assessments to identify locations with consistent and strong wind speeds. Our expertise ensures optimal turbine placement for maximum energy yield.",
    },
  ];

  const projectModels = [
    {
      title: "BOOT Model",
      description:
        "Build-Own-Operate-Transfer partnerships that minimize client investment while ensuring long-term energy security",
      features: [
        "Zero upfront investment",
        "Guaranteed power supply",
        "Transfer of ownership",
      ],
    },
    {
      title: "CAPS Model",
      description:
        "Captive Power Stations designed to meet specific industrial energy requirements with cost-effective solutions",
      features: [
        "Dedicated power supply",
        "Reduced energy costs",
        "Industrial scale solutions",
      ],
    },
    {
      title: "EPC Turnkey",
      description:
        "Complete Engineering, Procurement, and Construction services for large-scale wind energy projects",
      features: [
        "End-to-end project delivery",
        "Quality assurance",
        "Timely completion",
      ],
    },
  ];

  const keyStats = [
    { number: "400MW+", label: "Wind Farms Maintained" },
    { number: "20+", label: "Years Experience" },
    { number: "10+", label: "Project Locations" },
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
                Wind Energy Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6 animate-fade-in">
                Harnessing Wind Power for Sustainable Future
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Wind power is a proven and powerful way to generate large-scale
                renewable energy. With advanced turbine technology and
                sustainable business models, we make wind projects both
                economically viable and environmentally responsible.
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
              Wind Energy Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive wind energy solutions from site assessment to
              long-term operations, backed by decades of experience in India's
              largest wind corridor.
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

export default WindEnergy;
