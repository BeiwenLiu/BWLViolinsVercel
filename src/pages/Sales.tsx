import { Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import CategoryCard from "@/components/ui/CategoryCard";
import { Music2 } from "lucide-react";

const violinProducts = [
  { label: "Eastman Instruments", path: "/sales/violins/eastman" },
  { label: "BWL 150", path: "/sales/violins/bwl150" },
  { label: "BWL 200", path: "/sales/violins/bwl200" },
  { label: "BWL 300", path: "/sales/violins/bwl300" },
  { label: "BWL 500", path: "/sales/violins/bwl500" },
  { label: "BWL 1000", path: "/sales/violins/bwl1000" },
  { label: 'BWL "Collection"', path: "/sales/violins/bwl-collection" },
  { label: "German Violins", path: "/sales/violins/german" },
  { label: "Romanian Instruments", path: "/sales/violins/romanian" },
  { label: "Art Violins", path: "/sales/violins/art" },
];

const otherStrings = [
  { label: "Viola", path: "/sales/viola" },
  { label: "Cello", path: "/sales/cello" },
  { label: "Bass", path: "/sales/bass" },
];

const bows = [
  { label: "Violin Bow", path: "/sales/bows/violin" },
  { label: "Viola Bow", path: "/sales/bows/viola" },
  { label: "Cello & Bass Bow", path: "/sales/bows/cello-bass" },
];

const accessories = [
  { label: "Shoulder Rests", path: "/sales/accessories/shoulder-rest" },
  { label: "Rosins", path: "/sales/accessories/rosins" },
  { label: "Violin, Viola & Cello Cases", path: "/sales/accessories/cases" },
];

const Sales = () => {
  return (
    <div>
      <PageHeader
        title="Sales"
        subtitle="Quality string instruments, bows, and accessories for musicians of all levels"
      />

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CategoryCard
              title="Violins"
              description="From student instruments to professional grade violins"
              items={violinProducts}
              icon={<Music2 className="h-6 w-6" />}
            />

            <CategoryCard
              title="Viola, Cello & Bass"
              description="Quality instruments for the complete string section"
              items={otherStrings}
              icon={<Music2 className="h-6 w-6" />}
            />

            <CategoryCard
              title="Bows"
              description="Well-balanced bows for optimal performance"
              items={bows}
              icon={<Music2 className="h-6 w-6" />}
            />

            <CategoryCard
              title="Accessories"
              description="Essential accessories for string players"
              items={accessories}
              icon={<Music2 className="h-6 w-6" />}
            />
          </div>

          <div className="mt-12 p-8 bg-muted rounded-lg text-center">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us for personalized recommendations based on your skill level, 
              budget, and musical goals.
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

export default Sales;
