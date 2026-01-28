import { useParams, Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { useState } from "react";

// Cello imports
import jjCelloFront from "@/assets/cellos/jj-cello-front.png";
import jjCelloBack from "@/assets/cellos/jj-cello-back.png";

interface CelloSpecs {
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

interface CelloData {
  id: string;
  name: string;
  description?: string;
  images: string[];
  specs?: CelloSpecs;
  comingSoon?: boolean;
}

const celloData: Record<string, CelloData> = {
  "jj-cello": {
    id: "jj-cello",
    name: "J&J",
    images: [jjCelloFront, jjCelloBack],
    comingSoon: true,
  },
};

const CelloDetail = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const cello = modelId ? celloData[modelId] : null;
  const [selectedImage, setSelectedImage] = useState(0);

  if (!cello) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">Cello Not Found</h1>
        <Link to="/sales" className="text-primary hover:underline">
          Back to Sales
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={cello.name} subtitle="Cello" />

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
              {cello.images.length > 0 ? (
                <>
                  <div className="rounded-lg bg-muted flex items-center justify-center p-4">
                    <img
                      src={cello.images[selectedImage]}
                      alt={`${cello.name} - View ${selectedImage + 1}`}
                      className="max-w-full max-h-[600px] w-auto h-auto object-contain"
                    />
                  </div>
                  {cello.images.length > 1 && (
                    <div className="flex gap-4 justify-center">
                      {cello.images.map((image, index) => (
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
                            alt={`${cello.name} - Thumbnail ${index + 1}`}
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
              {cello.comingSoon && (
                <div className="flex items-center gap-3 p-4 bg-honey-gold/10 border border-honey-gold/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-honey-gold" />
                  <p className="text-muted-foreground">
                    Detailed information for this instrument is still being developed. 
                    Please contact us for more details.
                  </p>
                </div>
              )}

              {cello.description && (
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-4">Description</h2>
                  <div className="text-muted-foreground space-y-4">
                    {cello.description.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}

              {cello.specs && (
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-4">Specifications</h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cello.specs.finish && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Finish</dt>
                        <dd className="font-medium">{cello.specs.finish}</dd>
                      </div>
                    )}
                    {cello.specs.fingerboard && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Fingerboard</dt>
                        <dd className="font-medium">{cello.specs.fingerboard}</dd>
                      </div>
                    )}
                    {cello.specs.top && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Top</dt>
                        <dd className="font-medium">{cello.specs.top}</dd>
                      </div>
                    )}
                    {cello.specs.backRibs && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Back/Ribs</dt>
                        <dd className="font-medium">{cello.specs.backRibs}</dd>
                      </div>
                    )}
                    {cello.specs.purfling && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Purfling</dt>
                        <dd className="font-medium">{cello.specs.purfling}</dd>
                      </div>
                    )}
                    {cello.specs.bridge && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Bridge</dt>
                        <dd className="font-medium">{cello.specs.bridge}</dd>
                      </div>
                    )}
                    {cello.specs.fittings && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Fittings</dt>
                        <dd className="font-medium">{cello.specs.fittings}</dd>
                      </div>
                    )}
                    {cello.specs.electronics && (
                      <div className="bg-muted p-4 rounded-lg sm:col-span-2">
                        <dt className="text-sm text-muted-foreground">Electronics</dt>
                        <dd className="font-medium">{cello.specs.electronics}</dd>
                      </div>
                    )}
                    {cello.specs.availablePatterns && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Available Patterns</dt>
                        <dd className="font-medium">{cello.specs.availablePatterns}</dd>
                      </div>
                    )}
                    {cello.specs.availableSizes && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Available Sizes</dt>
                        <dd className="font-medium">{cello.specs.availableSizes}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              <div className="pt-4">
                <Link
                  to={`/sales/inquiry?instrument=${encodeURIComponent(cello.name + " Cello")}`}
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

export default CelloDetail;
