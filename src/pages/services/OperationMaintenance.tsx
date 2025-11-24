import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Shield,
  Gauge,
  Wrench,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
} from "lucide-react";

const OperationMaintenance = () => {
  const capabilities = [
    {
      icon: Shield,
      title: "Maximum Uptime",
      description:
        "Comprehensive maintenance strategies designed to ensure your renewable energy assets operate at peak performance with minimal downtime.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "Advanced monitoring and maintenance techniques that maximize energy output and extend the operational life of your renewable energy systems.",
    },
    {
      icon: Wrench,
      title: "Long-term Reliability",
      description:
        "Preventive and predictive maintenance programs that ensure consistent performance and reliability of your energy infrastructure over decades.",
    },
    {
      icon: TrendingUp,
      title: "Multi-brand Expertise",
      description:
        "Specialized O&M services across all major renewable energy equipment manufacturers with 20+ years of industry experience.",
    },
  ];

  const keyStats = [
    { number: "96.8%", label: "Average Uptime" },
    { number: "20+", label: "Years Experience" },
    { number: "Multi-brand", label: "O&M Services" },
    { number: "24/7", label: "Support Available" },
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
                Operations & Maintenance
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6 animate-fade-in">
                Ensuring Peak Performance & Reliability
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive O&M services designed to ensure optimal
                performance, maximum uptime, and long-term reliability of your
                renewable energy assets. Our expert maintenance strategies keep
                your systems running at peak efficiency.
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
              O&M Service Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional operations and maintenance services that maximize
              asset performance, ensure reliability, and deliver long-term value
              for your renewable energy investments.
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

export default OperationMaintenance;
