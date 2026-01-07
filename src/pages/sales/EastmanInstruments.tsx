import { Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

import vl145Front from "@/assets/eastman/vl145-front.avif";

interface EastmanViolin {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
}

const eastmanViolins: EastmanViolin[] = [
  {
    id: "vl145",
    name: "Samuel Eastman Series+ VL145+",
    shortDescription: "Electric-acoustic violin with Series+ preinstalled pickup system",
    image: vl145Front,
  },
];

const EastmanInstruments = () => {
  return (
    <div>
      <PageHeader
        title="Eastman Instruments"
        subtitle="Premium quality violins crafted with exceptional tonewoods and craftsmanship"
      />

      <section className="py-16">
        <div className="container">
          <Link
            to="/sales"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Sales
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eastmanViolins.map((violin) => (
              <Link key={violin.id} to={`/sales/violins/eastman/${violin.id}`}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={violin.image}
                      alt={violin.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {violin.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {violin.shortDescription}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-8 bg-muted rounded-lg text-center">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Interested in an Eastman Instrument?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us for availability, pricing, and to schedule a viewing.
            </p>
            <Link
              to="/rental-form"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EastmanInstruments;
