import { Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Music2, ChevronRight } from "lucide-react";

import vl145Front from "@/assets/eastman/vl145-front.avif";
import vl405Front from "@/assets/eastman/vl405-front.avif";
import vl601Front from "@/assets/eastman/vl601-front.avif";
import vl701Front from "@/assets/eastman/vl701-front.avif";

// Violin categories with preview images from Eastman collection
const violinCategories = [
  { 
    label: "Eastman Instruments", 
    path: "/sales/violins/eastman",
    previewImages: [vl145Front, vl405Front, vl601Front, vl701Front],
    description: "Premium electric-acoustic violins with Series+ pickup systems"
  },
  { 
    label: "BWL Violins", 
    path: "/sales/violins/bwl",
    description: "Quality student to professional violins"
  },
  { 
    label: "German Violins", 
    path: "/sales/violins/german",
    description: "Traditional German craftsmanship"
  },
  { 
    label: "Romanian Instruments", 
    path: "/sales/violins/romanian",
    description: "Handcrafted Romanian violins"
  },
  { 
    label: "Italian Violins", 
    path: "/sales/violins/italian",
    description: "Fine Italian string instruments"
  },
  { 
    label: "Art Violins", 
    path: "/sales/violins/art",
    description: "Unique artistic violin designs"
  },
];

const violas = [
  { label: "Romanian Violas", path: "/sales/violas/romanian" },
  { label: "German Violas", path: "/sales/violas/german" },
  { label: "Japanese Violas", path: "/sales/violas/japanese" },
  { label: "Chinese Violas", path: "/sales/violas/chinese" },
];

const cellos = [
  { label: "Romanian Cellos", path: "/sales/cellos/romanian" },
  { label: "German Cellos", path: "/sales/cellos/german" },
  { label: "Chinese Cellos", path: "/sales/cellos/chinese" },
];

const bass = [
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

const CategoryCard = ({ 
  title, 
  description, 
  items, 
  icon 
}: { 
  title: string; 
  description?: string; 
  items: { label: string; path: string }[]; 
  icon?: React.ReactNode;
}) => {
  return (
    <div className="card-elegant group">
      <div className="flex items-start gap-4 mb-4">
        {icon && (
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1 group/item"
            >
              <ChevronRight className="h-4 w-4 text-secondary group-hover/item:translate-x-1 transition-transform" />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Sales = () => {
  return (
    <div>
      <PageHeader
        title="Sales"
        subtitle="Quality string instruments, bows, and accessories for musicians of all levels"
      />

      <section className="py-16">
        <div className="container">
          {/* Featured Violin Categories with Preview */}
          <div className="mb-12">
            <h2 className="section-heading">Violins</h2>
            <p className="section-subheading">From student instruments to professional grade violins</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {violinCategories.map((category) => (
                <Link key={category.path} to={category.path}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    {category.previewImages ? (
                      <div className="aspect-[16/9] overflow-hidden bg-muted p-4">
                        <div className="flex items-center justify-center gap-2 h-full">
                          {category.previewImages.slice(0, 4).map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt=""
                              className="h-full max-h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <Music2 className="h-16 w-16 text-primary/30" />
                      </div>
                    )}
                    <CardContent className="p-5">
                      <h3 className="font-serif text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                        {category.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Other Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CategoryCard
              title="Violas"
              description="Quality violas for the discerning musician"
              items={violas}
              icon={<Music2 className="h-6 w-6" />}
            />

            <CategoryCard
              title="Cellos"
              description="Professional cellos from around the world"
              items={cellos}
              icon={<Music2 className="h-6 w-6" />}
            />

            <CategoryCard
              title="Bass"
              description="Quality bass instruments"
              items={bass}
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
