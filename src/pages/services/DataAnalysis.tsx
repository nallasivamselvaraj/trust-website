import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  BarChart,
  Brain,
  Target,
  ArrowRight,
  CheckCircle,
  Gauge,
  Lightbulb,
} from "lucide-react";

const DataAnalysis = () => {
  const capabilities = [
    {
      icon: BarChart,
      title: "Performance Optimization",
      description:
        "Comprehensive data analytics solutions to optimize energy generation and monitor system performance across all renewable energy assets.",
    },
    {
      icon: Brain,
      title: "Predictive Maintenance",
      description:
        "Advanced analytical tools that enable predictive maintenance for renewable energy assets, identifying potential issues before they arise.",
    },
    {
      icon: Lightbulb,
      title: "Actionable Insights",
      description:
        "Real-time data analysis that provides actionable insights to maximize efficiency, reliability, and long-term sustainability of energy projects.",
    },
    {
      icon: Target,
      title: "Data-Driven Decisions",
      description:
        "Empowering clients to make informed decisions, reduce operational costs, and ensure optimal performance through comprehensive data analytics.",
    },
  ];

  const keyStats = [
    { number: "Real-time", label: "Data Analysis" },
    { number: "Predictive", label: "Maintenance" },
    { number: "Actionable", label: "Insights" },
    { number: "Cost", label: "Reduction" },
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
                Data Analysis
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6 animate-fade-in">
                Transforming Data into Energy Insights
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We offer comprehensive data analytics solutions to optimize
                energy generation, monitor system performance, and enable
                predictive maintenance for renewable energy assets. By
                leveraging advanced analytical tools and real-time data, we help
                identify performance trends, detect potential issues before they
                arise, and provide actionable insights.
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
              Data Analytics Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our data-driven approach empowers clients to make informed
              decisions, reduce operational costs, and ensure long-term
              sustainability of their energy projects through advanced
              analytics.
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

export default DataAnalysis;
