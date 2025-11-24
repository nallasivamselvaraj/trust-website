import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/components/Services";
import { Link } from "react-router-dom";
import PageGrid from "@/components/PageGrid";

const OngoingProjects = () => {
  const ongoing = services.filter((s) => s.status === "ongoing");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Ongoing Projects</h1>
        <p className="text-muted-foreground mb-8">A showcase of our current and active projects.</p>

        <PageGrid>
          {ongoing.map((p) => (
            <Card key={p.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {p.image && <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />}
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                <div className="flex justify-end">
                  <Link to={p.path ?? "/projects"} className="text-primary font-semibold">Details</Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </PageGrid>
      </main>
      <Footer />
    </div>
  );
};

export default OngoingProjects;
