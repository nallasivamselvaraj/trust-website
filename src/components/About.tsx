import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Building,
  Award,
  Calendar,
  CheckCircle,
  Factory,
  Wind,
  Sun,
  Network,
  Briefcase,
  Heart,
  Sprout,
  Globe,
} from "lucide-react";
import visionImg from "@/assets/vision_about.png";
import missionImg from "@/assets/mission_about.png";
import founderPortrait from "@/assets/founder-portrait.jpg";
import renewableEnergyLandscape from "@/assets/renewable-energy-landscape.jpg";
import operationsMaintenanceImg from "@/assets/operations-maintenance.jpg";
import epcProjectsImg from "@/assets/epc-projects.jpg";
import humanResourcesImg from "@/assets/human-resources.jpg";
import solarPlantsImg from "@/assets/solar-plants.jpg";
import powerTradingImg from "@/assets/power-trading.jpg";
import corporateSolutionsImg from "@/assets/corporate-solutions.jpg";
import coreInnovation from "@/assets/core-innovation.jpg";
import coreIntegrity from "@/assets/core-integrity.jpg";
import coreQuality from "@/assets/core-quality.jpg";
import coreSustainability from "@/assets/core-sustainability.jpg";

const About = () => {
  const milestones = [
    {
      year: "2010",
      description:
        "Maple Consultancy – Govt liaisons for corporates and individual owners",
    },
    {
      year: "2016",
      description:
        "Esal green energy PVT ltd - power trading and wind asset company of 1.75 MW",
    },
    {
      year: "2017",
      description: "JDRAJ energy PVT ltd- wind assets having 1 MW",
    },
    {
      year: "2019",
      description: "Jsalis energy PVT ltd - wind assets having 1.25 MW",
    },
    {
      year: "2019",
      description:
        "Windkraft energy PVT ltd- O&M company 5 Cr turn over Windkraft projects india pvt ltd",
    },
    { year: "2019", description: "EPC and O&M Partner of EWT Netherlands" },
    {
      year: "2022",
      description: "JJA Energy Pvt Ltd - projects company 35 Cr turn over",
    },
    {
      year: "2023",
      description:
        "JMK energy infra pvt ltd Solar EPC company having work order around 100 Cr till date",
    },
  ];

  const coreValues = [
    {
      image: coreInnovation,
      title: "Innovation",
      description:
        "Driving creative solutions for tomorrow's energy challenges",
    },
    {
      image: coreIntegrity,
      title: "Integrity",
      description: "Conducting business with transparency and ethical values",
    },
    {
      image: coreQuality,
      title: "Quality",
      description: "Delivering excellence in every project and service",
    },
    {
      image: coreSustainability,
      title: "Sustainability",
      description: "Committed to a greener future for generations",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4 sm:mb-6">
            About JMK GROUPS
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6">
            Established in 2010, we've grown from a small seed to a trusted
            leader in renewable energy solutions across India.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            With over a decade of industry experience and a proven portfolio of{" "}
            <span className="text-primary font-semibold">500+ MW</span> of clean
            energy projects, we are recognized for our commitment to innovation,
            reliability, and customer-focused delivery. Our capabilities cover
            the complete renewable energy value chain — from consultation,
            feasibility studies, design, and engineering to procurement,
            installation, commissioning, and long-term operations & maintenance
            (O&M).
          </p>
        </div>

        {/* Achievements Subsection */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 shadow-lg border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Achievements</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground">
                <li>400MW+ Wind Farms Maintained</li>
                <li>100MW+ Solar Projects Completed</li>
                <li>100+ Clients Served Pan-India</li>
                <li>100Cr+ Project Value Delivered</li>
                <li>20+ Years of Industry Experience</li>
                <li>Recognized EPC and O&M Partner of EWT Netherlands</li>
                <li>Pan-India Power Trading Network</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <Card className="bg-gradient-card shadow-elegant border-0 overflow-visible">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-6 sm:p-8 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                    <Sprout className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-0 sm:mr-3" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      Sons of the Soil in Green Energy
                    </h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Located in India's largest wind energy corridor,{" "}
                      <strong>Muppandal Belt, Tamil Nadu</strong>, we have been
                      evolving with the renewable energy sector for over 20
                      years. As "Sons of the Soil," we understand the local
                      landscape and harness nature's power efficiently.
                    </p>
                    <p>
                      Our team of <strong>150+ professionals</strong> brings{" "}
                      <strong>200+ portfolios</strong> of work experience in
                      wind, solar, and related industries, enabling us to
                      deliver comprehensive energy solutions across India.
                    </p>
                    <p>
                      We maintain wind farms totaling close to{" "}
                      <strong>400MW</strong> and have successfully completed
                      solar turnkey projects exceeding <strong>100MW</strong>,
                      earning the trust of valuable customers throughout Tamil
                      Nadu.
                    </p>
                  </div>
                </div>

                <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden">
                  <img
                    src={renewableEnergyLandscape}
                    alt="Renewable Energy Landscape"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 flex items-center justify-center">
                    <div className="text-center text-white w-full px-4 sm:px-6">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                        <div className="backdrop-blur-sm bg-white/10 rounded-lg p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                            400MW
                          </div>
                          <div className="text-xs sm:text-sm opacity-90">
                            Wind Farms Maintained
                          </div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/10 rounded-lg p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                            100MW
                          </div>
                          <div className="text-xs sm:text-sm opacity-90">
                            Solar Projects Completed
                          </div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/10 rounded-lg p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                            150+
                          </div>
                          <div className="text-xs sm:text-sm opacity-90">
                            Team Professionals
                          </div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/10 rounded-lg p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                            20+
                          </div>
                          <div className="text-xs sm:text-sm opacity-90">
                            Years Experience
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12 sm:mb-16">
          <Card className="bg-gradient-secondary shadow-card border-0">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
                  <Network className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-0 sm:mr-3" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    Innovation & Technology Partnership
                  </h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    At JMK Groups, we partner with leading technology providers
                    and manufacturers to drive innovation in renewable energy
                    solutions. Our expertise spans product development, project
                    management, and commissioning, ensuring every solution we
                    deliver is efficient, reliable, and future-ready.
                  </p>
                  <p>
                    As the world accelerates its shift towards greener energy,
                    technologies such as wind, bio, hydro, and solar power are
                    rapidly advancing through modern scientific innovations.
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-black/20 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                    Global Impact
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    This global transition is vital to safeguard our planet,
                    reduce air pollution, slow rising global temperatures, and
                    counter the growing threats of climate change.
                  </p>
                  <div className="flex items-center text-primary font-semibold text-sm sm:text-base">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Together, we are shaping a sustainable tomorrow
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12 sm:mb-16">
          <div className="grid gap-6 lg:gap-8 items-center lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr]">
            <div className="bg-gradient-secondary p-4 sm:p-6 rounded-2xl flex items-center justify-center order-2 lg:order-1">
              <div className="max-w-[280px] sm:max-w-[320px] w-full">
                <img
                  src={founderPortrait}
                  alt="Mr. Muthu Kumar J - Founder and Managing Director"
                  className="w-full max-h-[300px] sm:max-h-[360px] object-cover rounded-xl shadow-glow"
                />
              </div>
            </div>

            <div className="p-4 lg:p-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                Mr. Muthu Kumar J
              </h2>
              <h3 className="text-base sm:text-lg md:text-xl text-primary font-semibold mb-3 sm:mb-4">
                Founder and Managing Director
              </h3>
              <div className="space-y-3 text-sm sm:text-base md:text-lg text-muted-foreground">
                <p>
                  Under the visionary leadership of Mr. Muthu Kumar J, JMK
                  Groups has evolved into a well-established trusted
                  organization in the Green Energy Sector and a well-reputed
                  brand name in South India.
                </p>
                <p>
                  His commitment to sustainable energy solutions and ethical
                  business practices has positioned JMK Groups as a reliable
                  partner for renewable energy projects across the nation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Our Foundation
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Built on strong values and guided by a clear vision for a
              sustainable future
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="bg-gradient-to-br from-card to-card/50 shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <img
                      src={visionImg}
                      alt="Vision"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Vision
                  </h3>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">
                  Green and Clean mother earth for our children.
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We dream of a world where every child breathes clean air and
                  grows up on a green and thriving planet. Our mission goes
                  beyond power generation—it's about preserving a living planet
                  for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <img
                      src={missionImg}
                      alt="Mission"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Mission
                  </h3>
                </div>
                <p className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4 leading-relaxed">
                  Be an organization constantly focused on catering global
                  energy needs through green and clean energy led by scientific
                  innovations governed by ethical values.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Dedicated to meeting global energy needs through sustainable
                  solutions, driven by scientific innovation and guided by
                  strong ethical values.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-secondary/30 via-secondary/20 to-secondary/30 shadow-lg border-0">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Core Values
                </h3>
                <p className="text-base sm:text-lg text-primary font-medium">
                  Innovation • Integrity • Quality • Sustainability
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 group-hover:bg-primary/20">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-10">
          <header className="text-4xl md:text-4xl font-bold text-left text-foreground mb-4">
            Achievements
          </header>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
            Milestones We Reach
          </h2>
          <p className="text-base sm:text-lg text-center text-muted-foreground mb-6 sm:mb-8">
            Our journey of growth and innovation in renewable energy
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 to-primary/40 z-10 md:-translate-x-1/2 rounded-full"></div>
            <div className="space-y-4 sm:space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-4 sm:left-6 md:left-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full border-4 border-background shadow-glow md:-translate-x-1/2 top-4 sm:top-6 z-20"></div>
                  <div
                    className={`ml-10 sm:ml-14 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                  >
                    <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring overflow-visible">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center mb-2">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2" />
                          <span className="font-bold text-primary text-sm sm:text-base">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
