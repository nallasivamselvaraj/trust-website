import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Laptop,
  Monitor,
  Activity,
  Brain,
  ArrowRight,
  CheckCircle,
  Gauge,
  Settings,
} from "lucide-react";

const ITSolutions = () => {
  const capabilities = [
    {
      icon: Monitor,
      title: "Smart Monitoring Systems",
      description:
        "Advanced real-time monitoring systems that provide comprehensive visibility into your renewable energy operations and performance metrics.",
    },
    {
      icon: Activity,
      title: "Real-time Performance Tracking",
      description:
        "Continuous performance tracking with instant alerts and detailed analytics to optimize energy generation and identify improvement opportunities.",
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description:
        "AI-powered predictive maintenance analytics that detect potential issues before they arise, ensuring optimal system performance and reliability.",
    },
    {
      icon: Settings,
      title: "Integrated Platforms",
      description:
        "Seamless integration platforms that ensure unified management of renewable energy assets across multiple sites and technologies.",
    },
  ];

  const keyStats = [
    { number: "Real-time", label: "Data Monitoring" },
    { number: "24/7", label: "System Tracking" },
    { number: "AI-Powered", label: "Analytics" },
    { number: "Integrated", label: "Platforms" },
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
                IT Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6 animate-fade-in">
                Advanced Technology for Energy Management
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We provide advanced technology solutions for energy management,
                monitoring, and data analytics, enabling businesses and
                utilities to optimize performance, improve efficiency, and make
                data-driven decisions. Our IT services include smart monitoring
                systems, real-time performance tracking, predictive maintenance
                analytics, and integrated platforms.
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
              IT Solution Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology solutions that ensure seamless management
              of renewable energy assets, maximizing value through data-driven
              insights and automated optimization.
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

export default ITSolutions;
