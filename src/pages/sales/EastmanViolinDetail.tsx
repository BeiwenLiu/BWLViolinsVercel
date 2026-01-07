import { useParams, Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

import vl145Front from "@/assets/eastman/vl145-front.avif";
import vl145Back from "@/assets/eastman/vl145-back.avif";
import vl405Front from "@/assets/eastman/vl405-front.avif";
import vl405Back from "@/assets/eastman/vl405-back.avif";
import vl601Front from "@/assets/eastman/vl601-front.avif";
import vl601Back from "@/assets/eastman/vl601-back.avif";
import vl701Front from "@/assets/eastman/vl701-front.avif";
import vl701Back from "@/assets/eastman/vl701-back.avif";

interface ViolinSpecs {
  finish: string;
  fingerboard: string;
  top: string;
  backRibs: string;
  purfling: string;
  bridge: string;
  fittings: string;
  electronics?: string;
  availablePatterns: string;
  availableSizes: string;
}

interface EastmanViolinData {
  id: string;
  name: string;
  description: string;
  images: string[];
  specs: ViolinSpecs;
}

const eastmanViolinData: Record<string, EastmanViolinData> = {
  vl145: {
    id: "vl145",
    name: "Samuel Eastman Series+ VL145+",
    description: `While plugged in, the Series+ Model 145+ violin keeps the natural warmth of a traditional violin while adding edge and a whole new dimension of musical possibilities. Ivan Dunov Prelude model VL145 violins provide remarkable sound, visual beauty, sturdiness, playability, and affordability. It is extremely rare to find student-grade instruments constructed of such fine tonewoods.

Other features that make these instruments among the finest inexpensive student models available are the ebony pegs, chinrests, and fingerboards, and inlaid purfling. The unique pickup system is embedded into the spruce top of the instrument before varnishing with no disturbance to the bridge.

Our proprietary 3.5 mm jack is used as the end button on the violins and violas making it unnoticeable. Each Series+ instrument will come with a lightweight, low-profile cable that provides a seamless connection to your amplifier or individual playing setup, making this the easiest and most comfortable design to "plug in" on the market.`,
    images: [vl145Front, vl145Back],
    specs: {
      finish: "Satin Varnish",
      fingerboard: "Ebony",
      top: "Romanian Spruce",
      backRibs: "Romanian Maple",
      purfling: "Genuine Hand-inlaid",
      bridge: "Despiau",
      fittings: "Ebony",
      electronics: "Series+ preinstalled pickup system, 10' 3.5mm to 1/4\" cable included",
      availablePatterns: "Stradivari",
      availableSizes: "4/4 - 1/4",
    },
  },
  vl405: {
    id: "vl405",
    name: "Andreas Eastman Series+ VL405+",
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
    name: "Albert Nebel Series+ VL601+",
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
    name: "Rudoulf Doetsch Series+ VL701+",
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
};

const EastmanViolinDetail = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const violin = modelId ? eastmanViolinData[modelId] : null;
  const [selectedImage, setSelectedImage] = useState(0);

  if (!violin) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">Violin Not Found</h1>
        <Link to="/sales/violins/eastman" className="text-primary hover:underline">
          Back to Eastman Instruments
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={violin.name} subtitle="Eastman Instruments" />

      <section className="py-16">
        <div className="container">
          <Link
            to="/sales/violins/eastman"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Eastman Instruments
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
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
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4">Description</h2>
                <div className="text-muted-foreground space-y-4">
                  {violin.description.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4">Specifications</h2>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <dt className="text-sm text-muted-foreground">Finish</dt>
                    <dd className="font-medium">{violin.specs.finish}</dd>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <dt className="text-sm text-muted-foreground">Fingerboard</dt>
                    <dd className="font-medium">{violin.specs.fingerboard}</dd>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <dt className="text-sm text-muted-foreground">Top</dt>
                    <dd className="font-medium">{violin.specs.top}</dd>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <dt className="text-sm text-muted-foreground">Back/Ribs</dt>
                    <dd className="font-medium">{violin.specs.backRibs}</dd>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <dt className="text-sm text-muted-foreground">Purfling</dt>
                    <dd className="font-medium">{violin.specs.purfling}</dd>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <dt className="text-sm text-muted-foreground">Bridge</dt>
                    <dd className="font-medium">{violin.specs.bridge}</dd>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <dt className="text-sm text-muted-foreground">Fittings</dt>
                    <dd className="font-medium">{violin.specs.fittings}</dd>
                  </div>
                  {violin.specs.electronics && (
                    <div className="bg-muted p-4 rounded-lg sm:col-span-2">
                      <dt className="text-sm text-muted-foreground">Electronics</dt>
                      <dd className="font-medium">{violin.specs.electronics}</dd>
                    </div>
                  )}
                  <div className="bg-muted p-4 rounded-lg">
                    <dt className="text-sm text-muted-foreground">Available Patterns</dt>
                    <dd className="font-medium">{violin.specs.availablePatterns}</dd>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <dt className="text-sm text-muted-foreground">Available Sizes</dt>
                    <dd className="font-medium">{violin.specs.availableSizes}</dd>
                  </div>
                </dl>
              </div>

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

export default EastmanViolinDetail;
