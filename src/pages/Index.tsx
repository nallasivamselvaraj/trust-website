import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import CompanyOverview from "@/components/CompanyOverview";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CompanyOverview />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
