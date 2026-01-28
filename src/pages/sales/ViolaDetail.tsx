import { useParams, Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { useState } from "react";

// Viola imports
import joeFarleyViolaFront from "@/assets/violas/joe-farley-viola-front.png";
import joeFarleyViolaBack from "@/assets/violas/joe-farley-viola-back.png";

interface ViolaSpecs {
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

interface ViolaData {
  id: string;
  name: string;
  description?: string;
  images: string[];
  specs?: ViolaSpecs;
  comingSoon?: boolean;
}

const violaData: Record<string, ViolaData> = {
  "joe-farley-viola": {
    id: "joe-farley-viola",
    name: "Joe Farley",
    images: [joeFarleyViolaFront, joeFarleyViolaBack],
    comingSoon: true,
  },
};

const ViolaDetail = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const viola = modelId ? violaData[modelId] : null;
  const [selectedImage, setSelectedImage] = useState(0);

  if (!viola) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">Viola Not Found</h1>
        <Link to="/sales" className="text-primary hover:underline">
          Back to Sales
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={viola.name} subtitle="Viola" />

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
              {viola.images.length > 0 ? (
                <>
                  <div className="rounded-lg bg-muted flex items-center justify-center p-4">
                    <img
                      src={viola.images[selectedImage]}
                      alt={`${viola.name} - View ${selectedImage + 1}`}
                      className="max-w-full max-h-[600px] w-auto h-auto object-contain"
                    />
                  </div>
                  {viola.images.length > 1 && (
                    <div className="flex gap-4 justify-center">
                      {viola.images.map((image, index) => (
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
                            alt={`${viola.name} - Thumbnail ${index + 1}`}
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
              {viola.comingSoon && (
                <div className="flex items-center gap-3 p-4 bg-honey-gold/10 border border-honey-gold/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-honey-gold" />
                  <p className="text-muted-foreground">
                    Detailed information for this instrument is still being developed. 
                    Please contact us for more details.
                  </p>
                </div>
              )}

              {viola.description && (
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-4">Description</h2>
                  <div className="text-muted-foreground space-y-4">
                    {viola.description.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}

              {viola.specs && (
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-4">Specifications</h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {viola.specs.finish && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Finish</dt>
                        <dd className="font-medium">{viola.specs.finish}</dd>
                      </div>
                    )}
                    {viola.specs.fingerboard && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Fingerboard</dt>
                        <dd className="font-medium">{viola.specs.fingerboard}</dd>
                      </div>
                    )}
                    {viola.specs.top && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Top</dt>
                        <dd className="font-medium">{viola.specs.top}</dd>
                      </div>
                    )}
                    {viola.specs.backRibs && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Back/Ribs</dt>
                        <dd className="font-medium">{viola.specs.backRibs}</dd>
                      </div>
                    )}
                    {viola.specs.purfling && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Purfling</dt>
                        <dd className="font-medium">{viola.specs.purfling}</dd>
                      </div>
                    )}
                    {viola.specs.bridge && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Bridge</dt>
                        <dd className="font-medium">{viola.specs.bridge}</dd>
                      </div>
                    )}
                    {viola.specs.fittings && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Fittings</dt>
                        <dd className="font-medium">{viola.specs.fittings}</dd>
                      </div>
                    )}
                    {viola.specs.electronics && (
                      <div className="bg-muted p-4 rounded-lg sm:col-span-2">
                        <dt className="text-sm text-muted-foreground">Electronics</dt>
                        <dd className="font-medium">{viola.specs.electronics}</dd>
                      </div>
                    )}
                    {viola.specs.availablePatterns && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Available Patterns</dt>
                        <dd className="font-medium">{viola.specs.availablePatterns}</dd>
                      </div>
                    )}
                    {viola.specs.availableSizes && (
                      <div className="bg-muted p-4 rounded-lg">
                        <dt className="text-sm text-muted-foreground">Available Sizes</dt>
                        <dd className="font-medium">{viola.specs.availableSizes}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              <div className="pt-4">
                <Link
                  to={`/sales/inquiry?instrument=${encodeURIComponent(viola.name + " Viola")}`}
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

export default ViolaDetail;
