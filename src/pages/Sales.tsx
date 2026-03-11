import { Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Music2 } from "lucide-react";

// Eastman violin imports
import vl80Front from "@/assets/eastman/vl80-front.png";
import vl100Front from "@/assets/eastman/vl100-front.jpg";
import vl200Front from "@/assets/eastman/vl200-front.jpg";
import vl405Front from "@/assets/eastman/vl405-front.avif";
import vl601Front from "@/assets/eastman/vl601-front.avif";
import vl701Front from "@/assets/eastman/vl701-front.avif";

// Other violin imports
import artFront from "@/assets/violins/art-front.png";
import bwl150Front from "@/assets/violins/bwl150-front.png";
import bwl600Front from "@/assets/violins/bwl600-front.png";
import bwl1000Front from "@/assets/violins/bwl1000-front.png";
import bwl1500Front from "@/assets/violins/bwl1500-front.png";
import dimitriFront from "@/assets/violins/dimitri-front.png";
import gioveiniSapiro1Front from "@/assets/violins/gioveini-sapiro1-front.png";
import hiroshiKonoFront from "@/assets/violins/hiroshi-kono-front.png";
import angelTaylor220Front from "@/assets/violins/Angel_Taylor_220_front_transparent.png";
import angelTaylor110Front from "@/assets/violins/Angel_Taylor_110front_transparent.png";
import joeFarley1Front from "@/assets/violins/joe-farley1-front.png";
import jurgenKlierFront from "@/assets/violins/jurgen-klier-front.png";
import lh1Front from "@/assets/violins/lh1-front.png";
import martinBeckFront from "@/assets/violins/martin-beck-front.png";
import vincentiusPottiglioneFront from "@/assets/violins/vincentius-pottiglione-front.png";

// Viola imports
import joeFarleyViolaFront from "@/assets/violas/joe-farley-viola-front.png";
import ludovicLassaratViolaFront from "@/assets/violas/ludovic-lassarat-viola-front.png";
import pragerViolaFront from "@/assets/violas/prager-viola-front.png";
import sonataViolaFront from "@/assets/violas/sonata-viola-front.png";
import hagenViolaFront from "@/assets/violas/Hagen_front__1__transparent.png";
import hiroshiKonoViolaFront from "@/assets/violas/Hiroshi-Kono-1_front__1__transparent.png";
import klierViolaFront from "@/assets/violas/Klier_viola_front__1__transparent.png";
import martinBeckViolaFront from "@/assets/violas/Martin-Beck_front__1__transparent.png";

// Cello imports
import jjCelloFront from "@/assets/cellos/jj-cello-front.png";
import sebaftienKrinerFront from "@/assets/cellos/Sebaftien_Kriner_front_transparent.png";
import lApprentiFront from "@/assets/cellos/L__Apprenti_front_transparent.png";
import krutz300Front from "@/assets/cellos/Krutz300_front_transparent.png";

interface ViolinProduct {
  id: string;
  name: string;
  shortDescription: string;
  image?: string;
}

const violinProducts: ViolinProduct[] = [
  {
    id: "vl80",
    name: "Eastman 80",
    shortDescription: "Description coming soon",
    image: vl80Front,
  },
  {
    id: "vl100",
    name: "Eastman 100",
    shortDescription: "Description coming soon",
    image: vl100Front,
  },
  {
    id: "vl200",
    name: "Eastman 200",
    shortDescription: "Description coming soon",
    image: vl200Front,
  },
  {
    id: "vl405",
    name: "Andreas Eastman Series+ 405+",
    shortDescription: "Premium violin with antiqued spirit varnish and German-style finishing",
    image: vl405Front,
  },
  {
    id: "vl601",
    name: "Albert Nebel Series+ 601+",
    shortDescription: "Professional quality with aged European tonewoods and Guarneri pattern",
    image: vl601Front,
  },
  {
    id: "vl701",
    name: "Rudoulf Doetsch Series+ 701+",
    shortDescription: "Master luthier crafted with German tonewoods and professional finish",
    image: vl701Front,
  },
  {
    id: "art",
    name: "Art",
    shortDescription: "Description coming soon",
    image: artFront,
  },
  {
    id: "bwl-150",
    name: "BWL 150",
    shortDescription: "Description coming soon",
    image: bwl150Front,
  },
  {
    id: "bwl-600",
    name: "BWL 600",
    shortDescription: "Description coming soon",
    image: bwl600Front,
  },
  {
    id: "bwl-1000",
    name: "BWL 1000",
    shortDescription: "Description coming soon",
    image: bwl1000Front,
  },
  {
    id: "bwl-1500",
    name: "BWL 1500",
    shortDescription: "Description coming soon",
    image: bwl1500Front,
  },
  {
    id: "dimitri",
    name: "Dimitri",
    shortDescription: "Description coming soon",
    image: dimitriFront,
  },
  {
    id: "gioveini-sapiro",
    name: "Gioveini Sapiro Naples 1902",
    shortDescription: "Description coming soon",
    image: gioveiniSapiro1Front,
  },
  {
    id: "hiroshi-kono",
    name: "Hiroshi Kono",
    shortDescription: "Description coming soon",
    image: hiroshiKonoFront,
  },
  {
    id: "joe-farley",
    name: "Joe Farley",
    shortDescription: "Description coming soon",
    image: joeFarley1Front,
  },
  {
    id: "jurgen-klier",
    name: "Jurgen Klier",
    shortDescription: "Description coming soon",
    image: jurgenKlierFront,
  },
  {
    id: "lh",
    name: "L&H",
    shortDescription: "Description coming soon",
    image: lh1Front,
  },
  {
    id: "martin-beck",
    name: "Martin Beck",
    shortDescription: "Description coming soon",
    image: martinBeckFront,
  },
  {
    id: "vincentius-pottiglione",
    name: "Vincentius Pottiglione",
    shortDescription: "Description coming soon",
    image: vincentiusPottiglioneFront,
  },
  {
    id: "angel-taylor-220",
    name: "Angel Taylor 220",
    shortDescription: "Description coming soon",
    image: angelTaylor220Front,
  },
  {
    id: "angel-taylor-110",
    name: "Angel Taylor 110",
    shortDescription: "Description coming soon",
    image: angelTaylor110Front,
  },
];

interface ViolaProduct {
  id: string;
  name: string;
  shortDescription: string;
  image?: string;
}

const violaProducts: ViolaProduct[] = [
  {
    id: "joe-farley-viola",
    name: "Joe Farley",
    shortDescription: "Description coming soon",
    image: joeFarleyViolaFront,
  },
  {
    id: "ludovic-lassarat-viola",
    name: "Ludovic Lassarat",
    shortDescription: "Description coming soon",
    image: ludovicLassaratViolaFront,
  },
  {
    id: "prager-viola",
    name: "Prager",
    shortDescription: "Description coming soon",
    image: pragerViolaFront,
  },
  {
    id: "sonata-viola",
    name: "Sonata",
    shortDescription: "Description coming soon",
    image: sonataViolaFront,
  },
  {
    id: "hagen-viola",
    name: "Hagen",
    shortDescription: "Description coming soon",
    image: hagenViolaFront,
  },
  {
    id: "hiroshi-kono-viola",
    name: "Hiroshi Kono",
    shortDescription: "Description coming soon",
    image: hiroshiKonoViolaFront,
  },
  {
    id: "klier-viola",
    name: "Klier",
    shortDescription: "Description coming soon",
    image: klierViolaFront,
  },
  {
    id: "martin-beck-viola",
    name: "Martin Beck",
    shortDescription: "Description coming soon",
    image: martinBeckViolaFront,
  },
];

interface CelloProduct {
  id: string;
  name: string;
  shortDescription: string;
  image?: string;
}

const celloProducts: CelloProduct[] = [
  {
    id: "jj-cello",
    name: "J&J",
    shortDescription: "Description coming soon",
    image: jjCelloFront,
  },
  {
    id: "sebaftien-kriner-cello",
    name: "Sebaftien Kriner",
    shortDescription: "Description coming soon",
    image: sebaftienKrinerFront,
  },
  {
    id: "l-apprenti-cello",
    name: "L'Apprenti",
    shortDescription: "Description coming soon",
    image: lApprentiFront,
  },
  {
    id: "krutz-300-cello",
    name: "Krutz 300",
    shortDescription: "Description coming soon",
    image: krutz300Front,
  },
];

interface CategoryCard {
  title: string;
  description: string;
}

const otherCategories: CategoryCard[] = [
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

          {/* Violas Section with Product Cards */}
          <div className="mb-12">
            <h2 className="section-heading">Violas</h2>
            <p className="section-subheading">Quality violas for the discerning musician</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {violaProducts.map((viola) => (
                <Link key={viola.id} to={`/sales/violas/${viola.id}`}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    <div className="aspect-[4/5] overflow-hidden bg-muted flex items-center justify-center p-4">
                      {viola.image ? (
                        <img
                          src={viola.image}
                          alt={viola.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <Music2 className="h-24 w-24 text-primary/30" />
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {viola.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {viola.shortDescription}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Cellos Section with Product Cards */}
          <div className="mb-12">
            <h2 className="section-heading">Cellos</h2>
            <p className="section-subheading">Professional cellos from around the world</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {celloProducts.map((cello) => (
                <Link key={cello.id} to={`/sales/cellos/${cello.id}`}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    <div className="aspect-[4/5] overflow-hidden bg-muted flex items-center justify-center p-4">
                      {cello.image ? (
                        <img
                          src={cello.image}
                          alt={cello.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <Music2 className="h-24 w-24 text-primary/30" />
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {cello.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cello.shortDescription}
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
