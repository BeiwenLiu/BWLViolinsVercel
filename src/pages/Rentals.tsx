import { Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { Check, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Rentals = () => {
  return (
    <div>
      <PageHeader
        title="Rentals & Policy"
        subtitle="Affordable instrument rentals for students of all ages"
      />

      <section className="py-16">
        <div className="container">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground">
              We rent all sizes of violins, violas and cellos from 1/16 size to full size. 
              All instruments come with a bow, a case and rosin. No charge for changing sizes. 
              Most repairs are free.
            </p>
          </div>

          {/* Rental Prices */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="card-elegant">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-6 w-6 text-secondary" />
                <h3 className="font-serif text-2xl font-semibold">Standard Rental</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span>Violins & Violas</span>
                  <span className="text-2xl font-semibold text-primary">$20<span className="text-sm text-muted-foreground">/month</span></span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span>Cellos</span>
                  <span className="text-2xl font-semibold text-primary">$30<span className="text-sm text-muted-foreground">/month</span></span>
                </div>
                <ul className="space-y-2 mt-6">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-secondary mt-0.5" />
                    Non-refundable initial three month rental required
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-secondary mt-0.5" />
                    Automatic ACH withdrawal every three months
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-secondary mt-0.5" />
                    $15 one-time registration fee for first-time renters
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-elegant border-2 border-secondary relative">
              <div className="absolute -top-3 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Best Value
              </div>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-6 w-6 text-secondary" />
                <h3 className="font-serif text-2xl font-semibold">Rent to Own</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span>Violins & Violas (2 year)</span>
                  <span className="text-2xl font-semibold text-primary">$30<span className="text-sm text-muted-foreground">/month</span></span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span>Cellos (2 year)</span>
                  <span className="text-2xl font-semibold text-primary">$40<span className="text-sm text-muted-foreground">/month</span></span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Size exchanges qualify—start with a smaller size and own a bigger size by the end.
                </p>
                <p className="text-sm text-muted-foreground">
                  Trade completed rent-to-own instrument toward a more advanced instrument: 
                  <strong> $100 credit</strong> for violins/violas, <strong>$150 credit</strong> for cellos, 
                  or get <strong>10% off</strong> purchase price.
                </p>
              </div>
            </div>
          </div>

          {/* Rental Instruments */}
          <h2 className="section-heading text-center mb-8">Available Rentals</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            <Link
              to="/rentals/violin-viola"
              className="card-elegant text-center group hover:border-secondary transition-colors"
            >
              <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                BWL 200 Violin & Viola
              </h3>
              <p className="text-3xl font-bold text-secondary mb-2">$20<span className="text-base font-normal text-muted-foreground">/month</span></p>
              <p className="text-sm text-muted-foreground">All sizes available</p>
            </Link>

            <Link
              to="/rentals/cello"
              className="card-elegant text-center group hover:border-secondary transition-colors"
            >
              <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                BWL 500 Cello
              </h3>
              <p className="text-3xl font-bold text-secondary mb-2">$30<span className="text-base font-normal text-muted-foreground">/month</span></p>
              <p className="text-sm text-muted-foreground">All sizes available</p>
            </Link>
          </div>

          {/* CTA */}
          <div className="text-center bg-muted p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-semibold mb-4">Ready to Rent?</h3>
            <p className="text-muted-foreground mb-6">
              Fill out our rental form to get started with your instrument today.
            </p>
            <Button asChild size="lg">
              <Link to="/rental-form">
                Start Rental Application <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rentals;
