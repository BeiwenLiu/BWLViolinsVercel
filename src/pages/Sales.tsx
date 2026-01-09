import { Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Music2 } from "lucide-react";

import vl145Front from "@/assets/eastman/vl145-front.avif";
import vl405Front from "@/assets/eastman/vl405-front.avif";
import vl601Front from "@/assets/eastman/vl601-front.avif";
import vl701Front from "@/assets/eastman/vl701-front.avif";

interface ViolinProduct {
  id: string;
  name: string;
  shortDescription: string;
  image?: string;
}

const violinProducts: ViolinProduct[] = [
  {
    id: "vl145",
    name: "Samuel Eastman Series+ VL145+",
    shortDescription: "Electric-acoustic violin with Series+ preinstalled pickup system",
    image: vl145Front,
  },
  {
    id: "vl405",
    name: "Andreas Eastman Series+ VL405+",
    shortDescription: "Premium violin with antiqued spirit varnish and German-style finishing",
    image: vl405Front,
  },
  {
    id: "vl601",
    name: "Albert Nebel Series+ VL601+",
    shortDescription: "Professional quality with aged European tonewoods and Guarneri pattern",
    image: vl601Front,
  },
  {
    id: "vl701",
    name: "Rudoulf Doetsch Series+ VL701+",
    shortDescription: "Master luthier crafted with German tonewoods and professional finish",
    image: vl701Front,
  },
  {
    id: "art",
    name: "Art",
    shortDescription: "Description coming soon",
  },
  {
    id: "bwl-600",
    name: "BWL 600",
    shortDescription: "Description coming soon",
  },
  {
    id: "bwl-1000",
    name: "BWL 1000",
    shortDescription: "Description coming soon",
  },
  {
    id: "dimitri",
    name: "Dimitri",
    shortDescription: "Description coming soon",
  },
  {
    id: "gioveini-sapiro",
    name: "Gioveini Sapiro Naples 1902",
    shortDescription: "Description coming soon",
  },
  {
    id: "hiroshi-kono",
    name: "Hiroshi Kono",
    shortDescription: "Description coming soon",
  },
  {
    id: "joe-farley",
    name: "Joe Farley",
    shortDescription: "Description coming soon",
  },
  {
    id: "jurgen-klier",
    name: "Jurgen Klier",
    shortDescription: "Description coming soon",
  },
  {
    id: "lh",
    name: "L&H",
    shortDescription: "Description coming soon",
  },
];

interface CategoryCard {
  title: string;
  description: string;
}

const otherCategories: CategoryCard[] = [
  { title: "Violas", description: "Quality violas for the discerning musician" },
  { title: "Cellos", description: "Professional cellos from around the world" },
  { title: "Bass", description: "Quality bass instruments" },
  { title: "Bows", description: "Well-balanced bows for optimal performance" },
  { title: "Accessories", description: "Essential accessories for string players" },
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
          {/* Violins Section with Product Cards */}
          <div className="mb-12">
            <h2 className="section-heading">Violins</h2>
            <p className="section-subheading">From student instruments to professional grade violins</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {violinProducts.map((violin) => (
                <Link key={violin.id} to={`/sales/violins/${violin.id}`}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    <div className="aspect-[4/5] overflow-hidden bg-muted flex items-center justify-center p-4">
                      {violin.image ? (
                        <img
                          src={violin.image}
                          alt={violin.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <Music2 className="h-24 w-24 text-primary/30" />
                      )}
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
          </div>

          {/* Other Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.map((category) => (
              <Card key={category.title} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Music2 className="h-16 w-16 text-primary/30" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
