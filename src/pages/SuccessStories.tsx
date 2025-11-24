import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/components/Services";
import { Link } from "react-router-dom";
import Carousel from "@/components/Carousel";

const successStories = [
  {
    id: "ss-1",
    title: "Solar Microgrid Deployment for Rural Clinic",
    summary:
      "Designed and deployed a solar microgrid enabling uninterrupted power to a rural health clinic, reducing diesel consumption by 92%.",
    tags: ["Solar", "Microgrid", "Sustainability"],
    image: "",
  },
  {
    id: "ss-2",
    title: "Wind Farm O&M Optimization",
    summary:
      "Implemented predictive maintenance and operations improvements across a 30MW wind farm, increasing availability by 6%.",
    tags: ["Wind", "O&M", "Analytics"],
    image: "",
  },
  {
    id: "ss-3",
    title: "Smart Metering Rollout for Industrial Park",
    summary:
      "Delivered a scalable smart-metering solution that provided real-time usage metrics and enabled energy cost reductions for tenants.",
    tags: ["IoT", "Energy Efficiency"],
    image: "",
  },
];

const SuccessStories = () => {
  const related = services.filter((s) => s.status === "completed").slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-6xl mx-auto px-4">
        <section className="mb-12">
          <Carousel
            id="ss-a"
            items={successStories}
            title="Featured Success Stories"
            renderCard={(s: any) => (
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
                {s.image && (
                  <div className="w-full h-44 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{s.summary}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    {s.tags.map((t: string) => (
                      <span key={t} className="text-xs px-2 py-1 bg-muted/50 rounded">{t}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          />

          {/* Single featured carousel (removed duplicated rows) */}
        </section>

        {related.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>

            {/* Centered carousel (matches Blog layout) */}
            <section className="max-w-3xl mx-auto p-[5px]">
              <Carousel
                id="related-projects"
                items={related}
                controlsOutside
                renderCard={(p: any) => (
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
                    {p.image && (
                      <div className="w-full h-36 overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <CardContent className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
                      <div className="flex justify-end">
                        <Link to={p.path ?? "/projects/completed"} className="text-primary font-semibold">Details</Link>
                      </div>
                    </CardContent>
                  </Card>
                )}
              />
            </section>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;
