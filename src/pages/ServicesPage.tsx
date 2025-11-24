import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="relative bg-gradient-to-br from-primary/80 to-secondary/80 py-20 md:py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/public/hero-bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-6">Our Services</h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium mb-4 drop-shadow">
            Empowering your business with sustainable energy, technology, and innovation.
          </p>
          <p className="text-base md:text-lg text-black/80 max-w-2xl mx-auto">
            Explore our comprehensive solutions in wind, solar, IT, data analysis, and more—delivered with 20+ years of expertise and a commitment to excellence.
          </p>
        </div>
      </section>
      <main className="py-12">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
