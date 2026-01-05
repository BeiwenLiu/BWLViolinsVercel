import { Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const directions = [
    {
      from: "From downtown Savannah",
      directions: "Take Truman Park Way south, then exit at Montgomery Cross Rd, right turn on Montgomery Cross Rd. Pass 1st traffic light, Kent Dr. will be the first right.",
    },
    {
      from: "From southside of Savannah",
      directions: "Take Abercorn St. to Montgomery Cross Rd., make right turn on Montgomery Cross Rd., about two miles, left turn on Kent Dr.",
    },
    {
      from: "From outside of Savannah",
      directions: "Take I-516 to Savannah, I-516 will become DeRenne Ave. automatically, keep on DeRenne Ave. until you see Truman Park Way, Turn right on Truman Park Way, then exit at Montgomery Cross Rd, right turn on Montgomery Cross Rd. Pass 1st traffic light, Kent Dr. will be the first right.",
    },
  ];

  const schools = [
    "Gasden", "Charles Ellis", "May Howard", "Calvary", "Country Day School",
    "Bloomingdale", "Blessed Sacrament", "McRiley", "Heard", "St. Andrews", "Isle of Hope"
  ];

  return (
    <div>
      <PageHeader
        title="About Us & Location"
        subtitle="Serving musicians in Savannah and the Low Country since 2000"
      />

      <section className="py-16">
        <div className="container">
          {/* About */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="card-elegant">
              <h2 className="font-serif text-2xl font-semibold mb-6">About Lizhou Liu</h2>
              <p className="text-muted-foreground mb-4">
                Lizhou Liu is a professional violinist and violist living in Savannah, Georgia. 
                He has an M.A. degree in viola performance from State University of New York at Stony Brook. 
                Lizhou held the position of principal viola in the Savannah Symphony for 13 years and 
                retains that position in the Hilton Head Orchestra.
              </p>
              <p className="text-muted-foreground mb-4">
                He also maintains a large and successful teaching studio as well as managing a violin 
                rental and sales business. Lizhou combines his musical knowledge of the instruments 
                with a true love of teaching students.
              </p>
              <p className="text-muted-foreground">
                Since 2000 he has kept students throughout the low country supplied with just the right 
                equipment to train them to attain a high level of string performance.
              </p>
            </div>
          </div>

          {/* Schools */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="section-heading text-center">Schools We Serve</h2>
            <p className="text-center text-muted-foreground mb-8">
              BWL Music String Instruments rentals have clients in several public and private schools 
              in the Savannah and Hilton Head areas:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {schools.map((school) => (
                <span
                  key={school}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                >
                  {school}
                </span>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 italic">
              BWL Music String Instruments would like to thank all the music teachers for supporting BWL.
            </p>
          </div>

          {/* Location */}
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center">Our Location</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card-elegant">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">8312 Kent Drive</p>
                      <p className="text-muted-foreground">Savannah, GA 31406</p>
                      <p className="text-sm text-muted-foreground mt-1">Next to Lake Mayer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                    <div>
                      <a href="tel:912-596-3897" className="hover:text-primary transition-colors">
                        (912) 596-3897
                      </a>
                      <span className="text-muted-foreground"> or </span>
                      <a href="tel:912-303-9522" className="hover:text-primary transition-colors">
                        (912) 303-9522
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                    <a href="mailto:BWLViolins@juno.com" className="hover:text-primary transition-colors">
                      BWLViolins@juno.com
                    </a>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-semibold mb-4">Directions</h3>
                <div className="space-y-4">
                  {directions.map((dir, index) => (
                    <div key={index}>
                      <p className="font-medium text-sm text-primary">{dir.from}</p>
                      <p className="text-sm text-muted-foreground">{dir.directions}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.6456!2d-81.1097!3d31.9947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb75c0e!2s8312+Kent+Dr%2C+Savannah%2C+GA+31406!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BWL Music Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link to="/rental-form">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
