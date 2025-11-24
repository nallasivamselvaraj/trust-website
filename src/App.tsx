import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import WindEnergy from "./pages/services/WindEnergy";
import SolarPower from "./pages/services/SolarPower";
import OperationMaintenance from "./pages/services/OperationMaintenance";
import ITSolutions from "./pages/services/ITSolutions";
import DataAnalysis from "./pages/services/DataAnalysis";
import SocialResponsibility from "./pages/services/SocialResponsibility";
import Projects from "./pages/Projects";
import OngoingProjects from "./pages/projects/Ongoing";
import CompletedProjects from "./pages/projects/Completed";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/wind-energy" element={<WindEnergy />} />
          <Route path="/services/solar-power" element={<SolarPower />} />
          <Route
            path="/services/operation-maintenance"
            element={<OperationMaintenance />}
          />
          <Route path="/services/it-solutions" element={<ITSolutions />} />
          <Route path="/services/data-analysis" element={<DataAnalysis />} />
          <Route
            path="/services/social-responsibility"
            element={<SocialResponsibility />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ongoing" element={<OngoingProjects />} />
          <Route path="/projects/completed" element={<CompletedProjects />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
