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
              We rent all sizes of violins, violas, cellos and basses from 1/16 size to full size. 
              All instruments come with a bow, a case and rosin. No charge for changing sizes. 
              Most repairs are free.
            </p>
          </div>

          {/* Rental Prices */}
          <div className="max-w-xl mx-auto mb-16">
            <div className="card-elegant">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-6 w-6 text-secondary" />
                <h3 className="font-serif text-2xl font-semibold">Standard Rental</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span>Violins & Violas</span>
                  <span className="text-2xl font-semibold text-primary">$25<span className="text-sm text-muted-foreground">/month</span></span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span>Cellos</span>
                  <span className="text-2xl font-semibold text-primary">$45<span className="text-sm text-muted-foreground">/month</span></span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span>Bass</span>
                  <span className="text-2xl font-semibold text-primary">$65<span className="text-sm text-muted-foreground">/month</span></span>
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
