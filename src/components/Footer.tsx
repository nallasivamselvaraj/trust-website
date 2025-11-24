import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const navigation = {
    services: [
      { name: "Wind Energy", href: "/services/wind-energy" },
      { name: "Solar Power", href: "/services/solar-power" },
      { name: "O&M Services", href: "/services/operation-maintenance" },
      { name: "IT Solutions", href: "/services/it-solutions" },
      { name: "Data Analysis", href: "/services/data-analysis" },
      {
        name: "Social Responsibility",
        href: "/services/social-responsibility",
      },
    ],
    resources: [
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={logo}
                  alt="JMK Groups Logo"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold tracking-wide">
                    JMK GROUPS
                  </h3>
                  <p className="text-sm text-background/70 font-medium">
                    Energy Solutions
                  </p>
                </div>
              </div>
              <p className="text-background/80 mb-8 max-w-md leading-relaxed">
                Leading India's renewable energy revolution with innovative
                solar and wind solutions for over 20 years.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+919941066695"
                  className="flex items-center space-x-3 text-background/80 hover:text-primary-glow transition-colors group"
                >
                  <Phone className="w-4 h-4 text-primary-glow group-hover:scale-110 transition-transform" />
                  <span>+91 99410 66695</span>
                </a>
                <a
                  href="mailto:info@jmkgroups.in"
                  className="flex items-center space-x-3 text-background/80 hover:text-primary-glow transition-colors group"
                >
                  <Mail className="w-4 h-4 text-primary-glow group-hover:scale-110 transition-transform" />
                  <span>info@jmkgroups.in</span>
                </a>
                <div className="flex items-center space-x-3 text-background/80">
                  <MapPin className="w-4 h-4 text-primary-glow" />
                  <span>Muppandal Belt, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-background/70 hover:text-primary-glow transition-colors text-sm block py-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-background/70 hover:text-primary-glow transition-colors text-sm block py-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2025 JMK Groups. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-background/60 hover:text-primary-glow transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-background/60 hover:text-primary-glow transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
