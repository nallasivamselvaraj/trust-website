import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Building,
  Zap,
  Award,
  Target,
  MapPin,
} from "lucide-react";
import operationsMaintenanceImg from "@/assets/operations-maintenance.jpg";
import epcProjectsImg from "@/assets/epc-projects.jpg";
import humanResourcesImg from "@/assets/human-resources.jpg";
import solarPlantsImg from "@/assets/solar-plants.jpg";
import powerTradingImg from "@/assets/power-trading.jpg";
import corporateSolutionsImg from "@/assets/corporate-solutions.jpg";
import { Badge } from "@/components/ui/badge";

const businessVerticals = [
  {
    title: "Operations & Maintenance",
    image: operationsMaintenanceImg,
    description: "100+ WEG under Operations and Maintenance",
    coverage: "Coimbatore, Tirupur, Tirunelveli and Kanyakumari Districts",
  },
  {
    title: "EPC Projects",
    image: epcProjectsImg,
    description: "100 Cr Turn Over Projects – Solar and Wind EPC",
    coverage: "Large-scale turnkey project delivery",
  },
  {
    title: "Human Resources",
    image: humanResourcesImg,
    description: "Experienced and Skilled Man power team",
    coverage: "150+ professionals with extensive expertise",
  },
  {
    title: "Solar Plants",
    image: solarPlantsImg,
    description: "Solar plants at Tirupur, Tirunelveli, Tuticorin Districts",
    coverage: "100+ MW solar capacity installed",
  },
  {
    title: "Power Trading",
    image: powerTradingImg,
    description: "Power supplier with 100+ clients and 1000+ MW",
    coverage: "Pan-India power distribution network",
  },
  {
    title: "Corporate Solutions",
    image: corporateSolutionsImg,
    description:
      "Supplying power to Corporates, Industries, Shopping Malls, Hospitals",
    coverage: "Diverse client portfolio across sectors",
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

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                JMK - THE BRAND
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive renewable energy solutions across multiple
                business verticals
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8">
              {businessVerticals.map((vertical, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition spring group overflow-hidden h-full"
                >
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-32 sm:h-40 overflow-hidden">
                      <img
                        src={vertical.image}
                        alt={vertical.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4">
                        <h3 className="text-sm sm:text-lg font-bold text-white group-hover:text-primary-glow transition-colors">
                          {vertical.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 flex-grow flex flex-col">
                      <p className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3 flex-grow">
                        {vertical.description}
                      </p>
                      <div className="flex items-start">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {vertical.coverage}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <section className="py-0 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Our Project Sites
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              We have successfully executed projects across multiple locations
              in Tamil Nadu, India's renewable energy hub.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {projectSites.map((site, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 cursor-default bg-gradient-card shadow-card border-primary/20"
              >
                {site}
              </Badge>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
