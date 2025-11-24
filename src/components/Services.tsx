import { Card, CardContent} from "@/components/ui/card";
import windImg from "@/assets/wind_energy.jpg";
import solarImg from "@/assets/solar_power.jpg";
import operImg from "@/assets/operatation_maintanace.jpg";
import itImg from "@/assets/it_solutions.jpg";
import dataImg from "@/assets/data_analysis.jpg";
import socialImg from "@/assets/social_responsibility.jpg";
import { Database, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Wind,
  Sun,
  Settings,
  Laptop,
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export const services = [
    {
      icon: Wind,
      title: "Wind Energy Projects",
      description:
        "Wind power is a proven and powerful way to generate large-scale renewable energy. Capable of producing substantial electricity, wind energy has emerged as a reliable solution for powering industries, businesses, and communities.",
      image: windImg,
      path: "/services/wind-energy",
      status: "completed",
    },
    {
      icon: Sun,
      title: "Solar Power Projects",
      description:
        "At JMK Groups, we deliver comprehensive solar energy solutions that power businesses, industries, and communities. As a leading EPC partner and project developer, we provide end-to-end services.",
      image: solarImg,
      path: "/services/solar-power",
      status: "ongoing",
    },
    {
      icon: Settings,
      title: "Operations & Maintenance",
      description:
        "Comprehensive O&M services designed to ensure optimal performance, maximum uptime, and long-term reliability of your renewable energy assets.",
      image: operImg,
      path: "/services/operation-maintenance",
      status: "ongoing",
    },
    {
      icon: Laptop,
      title: "IT Solutions",
      description:
        "We provide advanced technology solutions for energy management, monitoring, and data analytics, enabling businesses and utilities to optimize performance and improve efficiency.",
      image: itImg,
      path: "/services/it-solutions",
      status: "ongoing",
    },
    {
      icon: TrendingUp,
      title: "Data Analysis",
      description:
        "We offer comprehensive data analytics solutions to optimize energy generation, monitor system performance, and enable predictive maintenance for renewable energy assets.",
      image: dataImg,
      path: "/services/data-analysis",
      status: "completed",
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description:
        "At JMK Groups, we are committed to community development and sustainable practices that create lasting positive impact in the regions where we operate.",
      image: socialImg,
      path: "/services/social-responsibility",
      status: "completed",
    },
  ];

    const projectSites = [
    "Muppandal",
    "Avaraikulam",
    "Surundai",
    "Tenkasi",
    "Devarkulam",
    "Palladam",
    "Kovilpatti",
    "Kayathar",
    "Theni",
    "Udumalpet",
  ];

  const keyHighlights = [
    "20+ Years of Experience",
    "Multi-brand O&M Service Providers",
    "EPC/Turnkey Project Specialists",
    "Power Trading Experts",
  ];

  const Services = () => {

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24 bg-muted/30 border-b border-muted-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-5 py-2 text-base tracking-wide shadow">
              What We Do
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 drop-shadow-sm">
              JMK Group Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Solar & Wind EPC/Turnkey Projects, Multi-brand O&M, Power Trading, and more—serving India's largest renewable corridor.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {keyHighlights.map((highlight, index) => (
              <span key={index} className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/80 to-secondary/80 text-black font-semibold rounded-full px-5 py-2 shadow-sm text-base">
                <span className="inline-block w-2 h-2 rounded-full bg-white/70" />
                {highlight}
              </span>
            ))}
          </div>

          <div>
            <Accordion type="multiple" className="w-full">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <AccordionItem key={service.title} value={`service-${index}`}>
                    <AccordionTrigger className="text-left bg-white/80 hover:bg-white/90 border border-muted-foreground/10 rounded-lg px-4 py-3 mb-2 shadow-sm transition-all">
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                        <span className="text-lg md:text-xl font-bold">
                          {service.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-6 md:grid-cols-[1fr,300px] items-start bg-white/90 rounded-lg p-6 border border-muted-foreground/10 shadow">
                        <div className="space-y-4">
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                          <div>
                            <Link
                              to={service.path ?? "/services"}
                              className="inline-flex items-center text-primary font-semibold hover:underline"
                              aria-label={`Learn more about ${service.title}`}
                            >
                              Learn more
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                        {service.image ? (
                          <div className="rounded-md overflow-hidden border bg-muted/20">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="h-40 w-full object-cover md:h-full"
                              loading="lazy"
                            />
                          </div>
                        ) : null}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
              {/* Completed Projects Accordion Item */}
              <AccordionItem value="completed-projects">
                <AccordionTrigger className="text-left bg-white/80 hover:bg-white/90 border border-muted-foreground/10 rounded-lg px-4 py-3 mb-2 shadow-sm transition-all">
                  <div className="flex items-center gap-3">
                    <Database className="h-6 w-6 text-primary" aria-hidden="true" />
                    <span className="text-lg md:text-xl font-bold">Completed Projects</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-white/90 rounded-lg p-6 border border-muted-foreground/10 shadow">
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                      A portfolio of our finished and delivered projects.
                    </p>
                    <Link
                      to="/projects/completed"
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                      aria-label="View all completed projects"
                    >
                      View all completed projects
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/10 to-muted/30 border-b border-muted-foreground/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-foreground drop-shadow-sm tracking-tight">
            Our Core Sectors
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mb-8">
            <Card className="p-8 bg-white/90 border border-muted-foreground/10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <Wind className="h-9 w-9 text-primary" />
                <h3 className="text-2xl font-bold">Wind Energy Sector</h3>
              </div>
              <div className="space-y-5 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Comprehensive Annual Operation and Maintenance Security Service Contracts</h4>
                  <p>Developers conduct extensive wind resource assessments to identify suitable locations for wind farms. Areas with consistent and strong wind speeds are preferred.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Turn Key Projects</h4>
                  <p>With our expertise gained over 20 years, we will identify the right load and location, perform micrositing, land deals, transportation, foundation, balance of plants, and TANGEDCO powering.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Power Requirements</h4>
                  <p>We offer consultation, mentorship, and government liaison services from power registering to catering to organizational power needs.</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-white/90 border border-muted-foreground/10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <Sun className="h-9 w-9 text-primary" />
                <h3 className="text-2xl font-bold">Solar Energy Sector</h3>
              </div>
              <div className="space-y-5 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">JMK Group's dedicated wing for solar energy</h4>
                  <p>We have end-to-end in-house capabilities across all aspects; we follow global best practices across products, process, technology, and safety.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Customized Solar Projects</h4>
                  <p>JMK is committed to developing customized solar projects for industrial, commercial, and institutional consumers. We offer each customer an innovative solution concept.</p>
                </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Professional Project Management</h4>
                    <p>With an experienced project management team, we follow an exceptionally professional and systematic approach to all our solar projects.</p>
                  </div>
                </div>
              </Card>
  
              <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring relative group">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <Settings className="h-9 w-9 text-primary" />
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      Operations & Maintenance
                    </h3>
                  </div>
                  <div className="space-y-4 text-sm sm:text-base text-muted-foreground mb-4">
                    <p>
                      Comprehensive O&M services designed to ensure optimal
                      performance, maximum uptime, and long-term reliability of
                      your renewable energy assets with multi-brand expertise.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>Maximum uptime guarantee</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>Long-term reliability assurance</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>Multi-brand service expertise</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/services/operation-maintenance"
                    className="absolute bottom-4 right-4 inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-200 text-sm group-hover:translate-x-1 transform"
                  >
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring relative group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img
                      src={itImg}
                      alt="IT Solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    IT Solutions
                  </h3>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground mb-4">
                  <p>
                    We provide advanced technology solutions for energy
                    management, monitoring, and data analytics, enabling
                    businesses and utilities to optimize performance and improve
                    efficiency.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Smart monitoring systems</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Real-time performance tracking</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Advanced analytics & reporting</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/services/it-solutions"
                  className="absolute bottom-4 right-4 inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-200 text-sm group-hover:translate-x-1 transform"
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring relative group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img
                      src={dataImg}
                      alt="Data Analysis"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Data Analysis
                  </h3>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground mb-4">
                  <p>
                    We offer comprehensive data analytics solutions to optimize
                    energy generation, monitor system performance, and enable
                    predictive maintenance for renewable energy assets.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Performance optimization</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Predictive maintenance</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Actionable insights & reporting</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/services/data-analysis"
                  className="absolute bottom-4 right-4 inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-200 text-sm group-hover:translate-x-1 transform"
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring relative group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img
                      src={socialImg}
                      alt="Social Responsibility"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Social Responsibility
                  </h3>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground mb-4">
                  <p>
                    At JMK Groups, we are committed to community development and
                    sustainable practices that create lasting positive impact in
                    the regions where we operate.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Community development programs</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Education & healthcare initiatives</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Local economic growth support</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/services/social-responsibility"
                  className="absolute bottom-4 right-4 inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-200 text-sm group-hover:translate-x-1 transform"
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <MapPin className="h-9 w-9 text-primary" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground drop-shadow-sm">Our Project Sites</h2>
          </div>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
            We have successfully executed projects across multiple locations in Tamil Nadu, India's renewable energy hub.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {projectSites.map((site, index) => (
              <Badge key={index} variant="outline" className="text-base px-5 py-2 bg-white/80 border border-muted-foreground/10 shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {site}
              </Badge>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
