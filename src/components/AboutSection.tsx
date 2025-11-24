import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-1 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            About JMK GROUPS
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Established in the year 2010 as a small seed, we grew gradually with
            the good will of our trusted clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Card className="bg-gradient-card shadow-elegant border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Our Journey
                </h3>
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    Now we are doing Solar Projects EPC/Turnkey Projects along
                    with WindMills Multi brand O&M Service providers and Power
                    Traders. We are located in India's largest wind Energy
                    corridor Muppandal Belt, Tamilnadu.
                  </p>
                  <p>
                    As "Sons of the Soil" We have been in this green energy
                    business for the past 20 years evolving along with the
                    constant innovations of the wind and solar energy sector.
                  </p>
                  <p>
                    Currently We have a team of around 150 professionals with
                    200 portfolios of work experience in wind, solar and other
                    relevant industries to spearhead the operations of various
                    verticals within the state as well as Pan India.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6">
            <Card className="bg-gradient-secondary shadow-card border-0 hover:shadow-glow transition-spring group">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-spring">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Wind Energy Excellence
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      We are maintaining Wind Farms close to 400 MW, as a
                      trusted service provider in AMC, COAMSC provider for wind
                      turbines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-secondary shadow-card border-0 hover:shadow-glow transition-spring group">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-spring">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Solar Projects
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      In solar, we have done the turnkey projects for close to
                      100 MW in Tamil nadu for our valuable customers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-secondary shadow-card border-0 hover:shadow-glow transition-spring group">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-spring">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Leadership
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      JMK groups, under the leadership J Muthukumar is thus a
                      well-established trusted Organization in Green Energy
                      Sector.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
