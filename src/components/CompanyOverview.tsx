import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Zap, Sun, Wind, Target, Award, Users } from "lucide-react";
import solarSolutionsImg from "@/assets/solar_solutions.jpg";
import windPowerImg from "@/assets/wind_power.jpg";
import energyStorageImg from "@/assets/energy_storage_systems.jpg";
import projectManagementImg from "@/assets/project_management_energy.jpg";
import qualityAssuranceImg from "@/assets/quality_assurance_energy.jpg";
import expertTeamImg from "@/assets/expert_team_energy.jpg";

const CompanyOverview = () => {
  const taglines = [
    "Greener Power. Greater Future.",
    "Redefining energy for the next generation.",
    "Turning sunlight into possibilities, and possibilities into a brighter world.",
  ];

  const features = [
    {
      icon: <Sun className="w-8 h-8 text-white" />,
      title: "Solar Solutions",
      description:
        "Advanced photovoltaic systems for maximum energy efficiency",
      image: solarSolutionsImg,
    },
    {
      icon: <Wind className="w-8 h-8 text-white" />,
      title: "Wind Power",
      description:
        "Cutting-edge wind turbines for sustainable energy generation",
      image: windPowerImg,
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Energy Storage",
      description: "Smart grid solutions for optimized power distribution",
      image: energyStorageImg,
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Project Management",
      description: "End-to-end project delivery with proven methodologies",
      image: projectManagementImg,
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Quality Assurance",
      description: "Industry-leading standards and certifications",
      image: qualityAssuranceImg,
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Expert Team",
      description: "150+ professionals with decades of combined experience",
      image: expertTeamImg,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="space-y-6">
            {taglines.map((tagline, index) => (
              <h2
                key={index}
                className={`text-2xl md:text-4xl font-bold ${
                  index === 0
                    ? "text-primary"
                    : index === 1
                      ? "text-energy-wind"
                      : "text-energy-solar"
                } leading-relaxed`}
              >
                {tagline}
              </h2>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            JMK Groups is committed to delivering end-to-end renewable energy
            solutions that drive long-term sustainability. With over two decades
            of proven expertise and a portfolio exceeding 500 MW of clean energy
            projects, we specialize in leveraging solar and wind power to
            address the dynamic energy demands of modern industries.
          </p>
          <Button variant="energy" size="lg" asChild>
            <a href="/about">Learn More About Our Mission</a>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring group h-64"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/85 group-hover:via-black/45 transition-all duration-300"></div>
              </div>

              {/* Text content overlaid at bottom */}
              <CardContent className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <p className="text-white/90 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
