import PageHeader from "@/components/ui/PageHeader";
import { Wrench, CheckCircle } from "lucide-react";

const Service = () => {
  const bowRehairPrices = [
    { instrument: "Violin", price: "$55" },
    { instrument: "Viola", price: "$60" },
    { instrument: "Cello", price: "$65" },
    { instrument: "Bass", price: "$85" },
  ];

  const repairServices = [
    "Peg repair and replacement",
    "Bridge repair and replacement",
    "Fine tuner installation",
    "Chin rest adjustment",
    "Soundpost adjustment",
    "General setup and maintenance",
  ];

  return (
    <div>
      <PageHeader
        title="Service"
        subtitle="Professional bow re-hair and instrument repair services"
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bow Re-hair */}
            <div className="card-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-semibold">Bow Re-hair</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                We do all sizes of re-hairs for student violin, viola, cello and bass bows.
              </p>
              <div className="space-y-3">
                {bowRehairPrices.map((item) => (
                  <div
                    key={item.instrument}
                    className="flex justify-between items-center py-3 px-4 bg-muted rounded-lg"
                  >
                    <span className="font-medium">{item.instrument} Bow</span>
                    <span className="text-xl font-semibold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Repairs */}
            <div className="card-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-semibold">Instrument Repair</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                We perform minor violin and viola repairs including:
              </p>
              <ul className="space-y-3">
                {repairServices.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center">
            <h3 className="font-serif text-2xl font-semibold mb-4">Schedule a Service</h3>
            <p className="text-muted-foreground mb-4">
              Contact us to schedule your bow re-hair or instrument repair.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-muted-foreground">
              <a href="tel:912-596-3897" className="hover:text-primary transition-colors">
                (912) 596-3897
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:BWLViolins@juno.com" className="hover:text-primary transition-colors">
                BWLViolins@juno.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
