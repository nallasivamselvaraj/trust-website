import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import landscape from "@/assets/renewable-energy-landscape.jpg";
import { useRef, useEffect, useState } from "react";
import Carousel from "@/components/Carousel";

const Blog = () => {
  

  const posts = [
    {
      id: 1,
      title: "How Wind and Solar Complement Each Other in India's Grid",
      date: "2025-10-05",
      author: "JMK Insights",
      excerpt:
        "An exploration of hybrid renewable projects and their benefits for grid stability and energy security.",
      image: landscape,
    },
    {
      id: 2,
      title: "Scaling O&M: Best Practices from 400MW of Wind Farms",
      date: "2025-08-20",
      author: "Operations Team",
      excerpt:
        "Practical lessons from large-scale operations and how predictive maintenance reduces downtime.",
      image: landscape,
    },
    {
      id: 3,
      title: "Solar EPC: From Concept to Commissioning",
      date: "2025-06-12",
      author: "Project Delivery",
      excerpt:
        "A walkthrough of the EPC process with tips on procurement, quality control, and safety.",
      image: landscape,
    },
    {
      id: 1,
      title: "How Wind and Solar Complement Each Other in India's Grid",
      date: "2025-10-05",
      author: "JMK Insights",
      excerpt:
        "An exploration of hybrid renewable projects and their benefits for grid stability and energy security.",
      image: landscape,
    },
    {
      id: 2,
      title: "Scaling O&M: Best Practices from 400MW of Wind Farms",
      date: "2025-08-20",
      author: "Operations Team",
      excerpt:
        "Practical lessons from large-scale operations and how predictive maintenance reduces downtime.",
      image: landscape,
    },
    {
      id: 3,
      title: "Solar EPC: From Concept to Commissioning",
      date: "2025-06-12",
      author: "Project Delivery",
      excerpt:
        "A walkthrough of the EPC process with tips on procurement, quality control, and safety.",
      image: landscape,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-6xl mx-auto px-4">
        <section className="max-w-3xl mx-auto p-[5px]">
          <Carousel
            id="blog"
            items={posts}
            controlsOutside
            renderCard={(post: any) => (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
              <div className="w-full h-44 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()} • {post.author}</div>
                </div>
              </CardContent>
            </Card>
            )}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
