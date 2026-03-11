import { useParams, Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { useState } from "react";

// Eastman imports
import vl80Front from "@/assets/eastman/vl80-front.png";
import vl80Back from "@/assets/eastman/vl80-back.png";
import vl100Front from "@/assets/eastman/vl100-front.jpg";
import vl100Back from "@/assets/eastman/vl100-back.jpg";
import vl200Front from "@/assets/eastman/vl200-front.jpg";
import vl200Back from "@/assets/eastman/vl200-back.jpg";
import vl405Front from "@/assets/eastman/vl405-front.avif";
import vl405Back from "@/assets/eastman/vl405-back.avif";
import vl601Front from "@/assets/eastman/vl601-front.avif";
import vl601Back from "@/assets/eastman/vl601-back.avif";
import vl701Front from "@/assets/eastman/vl701-front.avif";
import vl701Back from "@/assets/eastman/vl701-back.avif";

// Other violin imports
import artFront from "@/assets/violins/art-front.png";
import artBack from "@/assets/violins/art-back.png";
import bwl150Front from "@/assets/violins/bwl150-front.png";
import bwl150Back from "@/assets/violins/bwl150-back.png";
import bwl600Front from "@/assets/violins/bwl600-front.png";
import bwl600Back from "@/assets/violins/bwl600-back.png";
import bwl1000Front from "@/assets/violins/bwl1000-front.png";
import bwl1000Back from "@/assets/violins/bwl1000-back.png";
import bwl1500Front from "@/assets/violins/bwl1500-front.png";
import bwl1500Back from "@/assets/violins/bwl1500-back.png";
import dimitriFront from "@/assets/violins/dimitri-front.png";
import dimitriBack from "@/assets/violins/dimitri-back.png";
import gioveiniSapiro1Front from "@/assets/violins/gioveini-sapiro1-front.png";
import gioveiniSapiro2Back from "@/assets/violins/gioveini-sapiro2-back.png";
import hiroshiKonoFront from "@/assets/violins/hiroshi-kono-front.png";
import hiroshiKonoBack from "@/assets/violins/hiroshi-kono-back.png";
import angelTaylor220Front from "@/assets/violins/Angel_Taylor_220_front_transparent.png";
import angelTaylor220Back from "@/assets/violins/Angel_Taylor_220_back_transparent.png";
import angelTaylor110Front from "@/assets/violins/Angel_Taylor_110front_transparent.png";
import angelTaylor110Back from "@/assets/violins/Angel_Taylor_110back_transparent.png";
import joeFarley1Front from "@/assets/violins/joe-farley1-front.png";
import joeFarley2Back from "@/assets/violins/joe-farley2-back.png";
import jurgenKlierFront from "@/assets/violins/jurgen-klier-front.png";
import jurgenKlierBack from "@/assets/violins/jurgen-klier-back.png";
import lh1Front from "@/assets/violins/lh1-front.png";
import lh2Back from "@/assets/violins/lh2-back.png";
import martinBeckFront from "@/assets/violins/martin-beck-front.png";
import martinBeckBack from "@/assets/violins/martin-beck-back.png";
import vincentiusPottiglioneFront from "@/assets/violins/vincentius-pottiglione-front.png";
import vincentiusPottiglioneBack from "@/assets/violins/vincentius-pottiglione-back.png";

interface ViolinSpecs {
  finish?: string;
  fingerboard?: string;
  top?: string;
  backRibs?: string;
  purfling?: string;
  bridge?: string;
  fittings?: string;
  electronics?: string;
  availablePatterns?: string;
  availableSizes?: string;
}

interface ViolinData {
  id: string;
  name: string;
  description?: string;
  images: string[];
  specs?: ViolinSpecs;
  comingSoon?: boolean;
}

const violinData: Record<string, ViolinData> = {
  vl80: {
    id: "vl80",
    name: "Eastman 80",
    images: [vl80Front, vl80Back],
    comingSoon: true,
  },
  vl100: {
    id: "vl100",
    name: "Eastman 100",
    images: [vl100Front, vl100Back],
    comingSoon: true,
  },
  vl200: {
    id: "vl200",
    name: "Eastman 200",
    images: [vl200Front, vl200Back],
    comingSoon: true,
  },
  vl405: {
    id: "vl405",
    name: "Andreas Eastman Series+ 405+",
    description: `While plugged in the Series+ 405 violin keeps the natural warmth of a traditional violin while adding edge and a whole new dimension of musical possibilities. Andreas Eastman violins feature a varnish that emulates the exceptional varnishes from master workshops in Markneukirchen, Germany a century ago. These workshops distinguished themselves by developing some of the best varnishes of the modern era, and we have employed their varnish recipes and techniques to achieve old-world results.

The unique pickup system is embedded into the spruce top of the instrument before varnishing with no disturbance to the bridge. Our proprietary 3.5 mm jack is used as the end button on the violins and violin's making it unnoticeable.

Each Series+ instrument comes with a lightweight, low-profile cable that provides a seamless connection to your amplifier or individual playing setup, making this the easiest and most comfortable design to "plug in" on the market.`,
    images: [vl405Front, vl405Back],
    specs: {
      finish: "Antiqued Spirit Varnish",
      fingerboard: "Ebony",
      top: "Spruce",
      backRibs: "Maple",
      purfling: "Genuine Hand-inlaid",
      bridge: "Despiau 2 Tree",
      fittings: "Boxwood with Ebony Trim",
      electronics: "Series+ preinstalled pickup system, 10' 3.5mm to 1/4\" cable included",
      availablePatterns: "Stradivari",
      availableSizes: "4/4 - 1/2",
    },
  },
  vl601: {
    id: "vl601",
    name: "Albert Nebel Series+ 601+",
    description: `While plugged in, the Albert Nebel 601+ violin keeps the natural warmth of a traditional violin while adding edge and a whole new dimension of musical possibilities. Albert Nebel violins, violas, and cellos provide famous quality at a modest price. These instruments are crafted from aged European tonewoods and are varnished by hand in the Eastman workshop.

The unique pickup system is embedded into the spruce top of the instrument before varnishing with no disturbance to the bridge. Our proprietary 3.5 mm jack is used as the end button on the violins and violas making it unnoticeable.

Each Series+ instrument comes with a lightweight, low-profile cable that provides a seamless connection to your amplifier or individual playing setup, making this the easiest and most comfortable design to "plug in" on the market.`,
    images: [vl601Front, vl601Back],
    specs: {
      finish: "Antiqued Spirit Varnish",
      fingerboard: "Ebony",
      top: "German Spruce",
      backRibs: "German Maple",
      purfling: "Genuine Hand-inlaid",
      bridge: "Despiau 2 Tree",
      fittings: "Ebony",
      electronics: "Series+ preinstalled pickup system, 10' 3.5mm to 1/4\" cable included",
      availablePatterns: "Guarneri",
      availableSizes: "4/4",
    },
  },
  vl701: {
    id: "vl701",
    name: "Rudoulf Doetsch Series+ 701+",
    description: `While plugged in, the Rudoulf Doetsch+ 701 violin keeps the natural warmth of a traditional violin while adding edge and a whole new dimension of musical possibilities. Rudoulf Doetsch instruments are handcrafted by our master luthiers and are hailed by teachers and performers as some of America's best German tonewood instruments. They feature a highly select spruce top with maple back, sides and scrolls, and a hand applied antique-style, multi-layer spirit varnish. The result is an instrument that is professional in both appearance and sound.

Rudoulf Doetsch violins, violas, and cellos provide famous quality at a modest price. These instruments are crafted from aged European tonewoods and are varnished by hand in the Eastman workshop. The unique pickup system is embedded into the spruce top of the instrument before varnishing with no disturbance to the bridge.

Our proprietary 3.5 mm jack is used as the end button on the violins and viola's making it unnoticeable. Each Series+ instrument comes with a lightweight, low-profile cable that provides a seamless connection to your amplifier or individual playing setup, making this the easiest and most comfortable design to "plug in" on the market.`,
    images: [vl701Front, vl701Back],
    specs: {
      finish: "Antiqued Spirit Varnish",
      fingerboard: "Ebony",
      top: "German Spruce",
      backRibs: "German Maple",
      purfling: "Genuine Hand-inlaid",
      bridge: "Despiau 2 Tree",
      fittings: "Ebony",
      electronics: "Series+ preinstalled pickup system, 10' 3.5mm to 1/4\" cable included",
      availablePatterns: "Guarneri",
      availableSizes: "4/4",
    },
  },
  art: {
    id: "art",
    name: "Art",
    images: [artFront, artBack],
    comingSoon: true,
  },
  "bwl-150": {
    id: "bwl-150",
    name: "BWL 150",
    images: [bwl150Front, bwl150Back],
    comingSoon: true,
  },
  "bwl-600": {
    id: "bwl-600",
    name: "BWL 600",
    images: [bwl600Front, bwl600Back],
    comingSoon: true,
  },
  "bwl-1000": {
    id: "bwl-1000",
    name: "BWL 1000",
    images: [bwl1000Front, bwl1000Back],
    comingSoon: true,
  },
  "bwl-1500": {
    id: "bwl-1500",
    name: "BWL 1500",
    images: [bwl1500Front, bwl1500Back],
    comingSoon: true,
  },
  dimitri: {
    id: "dimitri",
    name: "Dimitri",
    images: [dimitriFront, dimitriBack],
    comingSoon: true,
  },
  "gioveini-sapiro": {
    id: "gioveini-sapiro",
    name: "Gioveini Sapiro Naples 1902",
    images: [gioveiniSapiro1Front, gioveiniSapiro2Back],
    comingSoon: true,
  },
  "hiroshi-kono": {
    id: "hiroshi-kono",
    name: "Hiroshi Kono",
    images: [hiroshiKonoFront, hiroshiKonoBack],
    comingSoon: true,
  },
  "joe-farley": {
    id: "joe-farley",
    name: "Joe Farley",
    images: [joeFarley1Front, joeFarley2Back],
    comingSoon: true,
  },
  "jurgen-klier": {
    id: "jurgen-klier",
    name: "Jurgen Klier",
    images: [jurgenKlierFront, jurgenKlierBack],
    comingSoon: true,
  },
  lh: {
    id: "lh",
    name: "L&H",
    images: [lh1Front, lh2Back],
    comingSoon: true,
  },
  "martin-beck": {
    id: "martin-beck",
    name: "Martin Beck",
    images: [martinBeckFront, martinBeckBack],
    comingSoon: true,
  },
  "vincentius-pottiglione": {
    id: "vincentius-pottiglione",
    name: "Vincentius Pottiglione",
    images: [vincentiusPottiglioneFront, vincentiusPottiglioneBack],
    comingSoon: true,
  },
  "angel-taylor-220": {
    id: "angel-taylor-220",
    name: "Angel Taylor 220",
    images: [angelTaylor220Front, angelTaylor220Back],
    comingSoon: true,
  },
  "angel-taylor-110": {
    id: "angel-taylor-110",
    name: "Angel Taylor 110",
    images: [angelTaylor110Front, angelTaylor110Back],
    comingSoon: true,
  },
};

const ViolinDetail = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const violin = modelId ? violinData[modelId] : null;
  const [selectedImage, setSelectedImage] = useState(0);

  if (!violin) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">Violin Not Found</h1>
        <Link to="/sales" className="text-primary hover:underline">
          Back to Sales
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={violin.name} subtitle="Violin" />

      <section className="py-16">
        <div className="container">
          <Link
            to="/sales"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Sales
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {violin.images.length > 0 ? (
                <>
                  <div className="rounded-lg bg-muted flex items-center justify-center p-4">
                    <img
                      src={violin.images[selectedImage]}
                      alt={`${violin.name} - View ${selectedImage + 1}`}
                      className="max-w-full max-h-[600px] w-auto h-auto object-contain"
                    />
                  </div>
                  {violin.images.length > 1 && (
                    <div className="flex gap-4 justify-center">
                      {violin.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors flex items-center justify-center bg-muted p-1 ${
                            selectedImage === index
                              ? "border-primary"
                              : "border-transparent hover:border-muted-foreground/50"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${violin.name} - Thumbnail ${index + 1}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="rounded-lg bg-muted flex items-center justify-center p-8 min-h-[400px]">
                  <p className="text-muted-foreground">Images coming soon</p>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-8">
              {violin.comingSoon && (
                <div className="flex items-center gap-3 p-4 bg-honey-gold/10 border border-honey-gold/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-honey-gold" />
                  <p className="text-muted-foreground">
                    Detailed information for this instrument is still being developed. 
                    Please contact us for more details.
                  </p>
                </div>
              )}

              {violin.description && (
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-4">Description</h2>
                  <div className="text-muted-foreground space-y-4">
                    {violin.description.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}

              {violin.specs && (
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-4">Specifications</h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {violin.specs.finish && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Finish</dt>
                        <dd className="font-medium">{violin.specs.finish}</dd>
                      </div>
                    )}
                    {violin.specs.fingerboard && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Fingerboard</dt>
                        <dd className="font-medium">{violin.specs.fingerboard}</dd>
                      </div>
                    )}
                    {violin.specs.top && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Top</dt>
                        <dd className="font-medium">{violin.specs.top}</dd>
                      </div>
                    )}
                    {violin.specs.backRibs && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Back/Ribs</dt>
                        <dd className="font-medium">{violin.specs.backRibs}</dd>
                      </div>
                    )}
                    {violin.specs.purfling && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Purfling</dt>
                        <dd className="font-medium">{violin.specs.purfling}</dd>
                      </div>
                    )}
                    {violin.specs.bridge && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Bridge</dt>
                        <dd className="font-medium">{violin.specs.bridge}</dd>
                      </div>
                    )}
                    {violin.specs.fittings && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Fittings</dt>
                        <dd className="font-medium">{violin.specs.fittings}</dd>
                      </div>
                    )}
                    {violin.specs.electronics && (
                      <div className="bg-muted p-4 rounded-lg sm:col-span-2">
                        <dt className="text-sm text-muted-foreground">Electronics</dt>
                        <dd className="font-medium">{violin.specs.electronics}</dd>
                      </div>
                    )}
                    {violin.specs.availablePatterns && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Available Patterns</dt>
                        <dd className="font-medium">{violin.specs.availablePatterns}</dd>
                      </div>
                    )}
                    {violin.specs.availableSizes && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Available Sizes</dt>
                        <dd className="font-medium">{violin.specs.availableSizes}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              <div className="pt-4">
                <Link
                  to={`/sales/inquiry?instrument=${encodeURIComponent(violin.name)}`}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg"
                >
                  Inquire About This Instrument
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViolinDetail;
