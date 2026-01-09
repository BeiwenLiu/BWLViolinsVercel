import { Link } from "react-router-dom";
import { ArrowRight, Music2, Wrench, GraduationCap, FileText, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-violin.jpg";
import lizhouImage from "@/assets/lizhou-single.jpg";

const Index = () => {
  return (
    <div>
      {/* Under Construction Banner */}
      <div className="bg-honey-gold/90 text-rich-brown py-3 px-4">
        <div className="container flex items-center justify-center gap-2 text-sm font-medium">
          <Construction className="h-4 w-4" />
          <span>Our website is currently under construction. More products coming soon!</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rich-brown/95 via-rich-brown/80 to-transparent" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 animate-fade-in">
              BWL Music
              <span className="block text-honey-gold">String Instruments</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-slide-up">
              Quality violins, violas, cellos and basses for rent and sale. 
              Expert repairs, bow re-hair, and professional music instruction 
              in Savannah, Georgia.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Button asChild size="lg" className="bg-honey-gold text-rich-brown hover:bg-honey-gold/90">
                <Link to="/sales">
                  Browse Instruments <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-honey-gold text-honey-gold hover:bg-honey-gold/10">
                <Link to="/rentals">View Rentals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Serving musicians throughout the Savannah and Hilton Head areas since 2000
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/sales" className="card-elegant group text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Music2 className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Sales</h3>
              <p className="text-sm text-muted-foreground">
                Quality violins, violas, cellos, basses, bows, and accessories
              </p>
            </Link>

            <Link to="/rentals" className="card-elegant group text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Rentals</h3>
              <p className="text-sm text-muted-foreground">
                Affordable monthly rentals from 1/16 to full size instruments
              </p>
            </Link>

            <Link to="/service" className="card-elegant group text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Service</h3>
              <p className="text-sm text-muted-foreground">
                Bow re-hair, repairs, and instrument setup by professionals
              </p>
            </Link>

            <Link to="/teaching" className="card-elegant group text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Teaching</h3>
              <p className="text-sm text-muted-foreground">
                Professional violin and viola lessons for all ages and levels
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-8">About Lizhou Liu</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <img
                  src={lizhouImage}
                  alt="Lizhou Liu"
                  className="w-48 h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground mb-4">
                  Lizhou Liu is a professional violinist and violist living in Savannah, Georgia. 
                  He has an M.A. degree in viola performance from State University of New York at Stony Brook. 
                  Lizhou held the position of principal viola in the Savannah Symphony, Savannah Philharmonic, 
                  and Hilton Head Symphony Orchestra for 35 years.
                </p>
                <p className="text-muted-foreground mb-4">
                  He also maintains a large and successful teaching studio as well as managing a violin 
                  rental and sales business. Lizhou combines his musical knowledge of the instruments 
                  with a true love of teaching students.
                </p>
                <p className="text-muted-foreground mb-6">
                  Since 2000 he has kept students throughout the low country supplied with just the right 
                  equipment to train them to attain a high level of string performance.
                </p>
                <Button asChild variant="outline">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rich-brown to-deep-burgundy text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you're renting your first instrument or looking for a professional upgrade, 
            we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-honey-gold text-rich-brown hover:bg-honey-gold/90">
              <Link to="/rental-form">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
