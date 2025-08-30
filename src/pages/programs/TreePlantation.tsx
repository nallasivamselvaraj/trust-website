import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TreePine, 
  Users, 
  Target, 
  Award, 
  Leaf,
  ArrowRight,
  MapPin,
  Calendar,
  Wind,
  Droplets
} from 'lucide-react';
import treePlantationHero from '@/assets/tree.jpg';
import treePlantationProgram from '@/assets/tree plantation.jpeg';

const TreePlantation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={treePlantationHero} 
          alt="Tree Plantation Program" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Tree Plantation</h1>
            <p className="text-xl md:text-2xl mb-6">
              Organizing community-led tree plantation drives to restore local ecosystems and improve air quality
            </p>
            {/* Hero CTA commented out per request
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              Plant with Us <TreePine className="ml-2 w-5 h-5" />
            </Button>
            */}
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Overview Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Greening Our Future, One Tree at a Time
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Climate change and deforestation threaten our planet's future. Our tree plantation programs 
                  mobilize communities to restore degraded lands, create green spaces, and build climate 
                  resilience through systematic afforestation and reforestation efforts.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We don't just plant trees - we nurture forests. Our comprehensive approach includes 
                  community engagement, species selection based on local ecology, long-term maintenance, 
                  and education about environmental conservation for sustainable green cover.
                </p>
                {/* Buttons removed per request
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Our Impact <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Join Plantation Drive
                  </Button>
                </div>
                */}
              </div>
              <div className="relative">
                <img 
                  src={treePlantationProgram} 
                  alt="Tree Plantation Activities" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">500K+</div>
                    <div className="text-sm">Trees Planted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-green-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Environmental Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: TreePine, number: "500K+", label: "Trees Planted", desc: "Across multiple states" },
                { icon: Leaf, number: "2,000+", label: "Acres Greened", desc: "Forest restoration" },
                { icon: Wind, number: "85%", label: "Survival Rate", desc: "With proper care" },
                { icon: Users, number: "50,000+", label: "Volunteers Engaged", desc: "Community participation" }
              ].map((stat, idx) => (
                <Card key={idx} className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-green-600 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Green Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Community Plantation Drives",
                  description: "Organizing large-scale tree plantation events with community participation and environmental education.",
                  features: ["Mass plantation events", "Community mobilization", "Environmental education", "Species diversity"]
                },
                {
                  title: "School Green Programs",
                  description: "Engaging schools in environmental conservation through tree planting and green campus initiatives.",
                  features: ["School partnerships", "Student engagement", "Green campus development", "Environmental clubs"]
                },
                {
                  title: "Urban Greening",
                  description: "Creating green spaces in urban areas through parks, roadside plantations, and vertical gardens.",
                  features: ["Urban forest creation", "Roadside plantation", "Vertical gardens", "Air purification"]
                },
                {
                  title: "Watershed Restoration",
                  description: "Restoring degraded watersheds through strategic tree plantation and soil conservation measures.",
                  features: ["Watershed management", "Soil conservation", "Water retention", "Biodiversity restoration"]
                },
                {
                  title: "Carbon Offset Programs",
                  description: "Corporate partnerships for carbon offsetting through scientific tree plantation and monitoring.",
                  features: ["Carbon calculation", "Monitoring systems", "Corporate partnerships", "Verification protocols"]
                },
                {
                  title: "Native Species Conservation",
                  description: "Protecting and propagating native tree species to maintain local biodiversity and ecosystem balance.",
                  features: ["Native species focus", "Seed collection", "Nursery development", "Biodiversity conservation"]
                }
              ].map((program, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Green Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-8 bg-green-50 border-green-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-600 font-semibold">Rajasthan</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Desert Greening Project</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "In the Thar Desert, our innovative plantation drive has successfully established 50,000 
                    drought-resistant trees across 500 acres. The project has improved groundwater levels and 
                    created green corridors that support local wildlife."
                  </p>
                  <div className="text-sm text-gray-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Project Duration: 2019-2024
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-blue-50 border-blue-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-semibold">Maharashtra</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Urban Forest Creation</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "Our urban forest project in Pune has transformed 100 acres of barren land into a thriving 
                    green lung. The forest now hosts 200+ species of plants and has become a model for urban 
                    environmental restoration across India."
                  </p>
                  <div className="text-sm text-gray-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Project Duration: 2020-Ongoing
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Environmental Benefits */}
        <section className="py-16 bg-green-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Environmental Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Wind,
                  title: "Air Purification",
                  description: "Trees filter pollutants and produce oxygen, improving air quality in urban and rural areas."
                },
                {
                  icon: Droplets,
                  title: "Water Conservation",
                  description: "Tree roots prevent soil erosion and help recharge groundwater through improved infiltration."
                },
                {
                  icon: Leaf,
                  title: "Climate Regulation",
                  description: "Trees absorb CO2 and provide natural cooling, helping mitigate climate change effects."
                },
                {
                  icon: TreePine,
                  title: "Biodiversity Support",
                  description: "Forests provide habitat for wildlife and support diverse ecosystems and food chains."
                }
              ].map((benefit, idx) => (
                <Card key={idx} className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Plant Today, Breathe Tomorrow</h2>
            <p className="text-xl mb-8 opacity-90">
              Every tree planted is a step towards a greener, healthier planet. Join our mission 
              to restore forests and fight climate change through community action.
            </p>
            {/* Bottom CTA buttons removed per request
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                Fund Tree Plantation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Join Plantation Drive
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Corporate Green Partnership
              </Button>
            </div>
            */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TreePlantation;
