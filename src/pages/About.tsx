import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
