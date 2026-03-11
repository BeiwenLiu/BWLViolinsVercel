import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { getProductBySlug } from '@/lib/products';
import type { Product } from '@/lib/types';

export default function InstrumentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  // Derive type label from the URL path (e.g. /sales/violas/:slug → "Viola")
  const typeLabel = location.pathname.includes('/violas/')
    ? 'Viola'
    : location.pathname.includes('/cellos/')
    ? 'Cello'
    : 'Violin';

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setSelectedImage(0);
    getProductBySlug(slug).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-16 flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Loading…</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">Instrument Not Found</h1>
        <Link to="/sales" className="text-primary hover:underline">
          Back to Sales
        </Link>
      </div>
    );
  }

  const images = [
    { label: 'Front', url: product.front_image_url },
    { label: 'Back', url: product.back_image_url },
  ];

  return (
    <div>
      <PageHeader title={product.name} subtitle={typeLabel} />

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
              <div className="rounded-lg bg-muted flex items-center justify-center p-4">
                <img
                  src={images[selectedImage].url}
                  alt={`${product.name} - ${images[selectedImage].label}`}
                  className="max-w-full max-h-[600px] w-auto h-auto object-contain"
                />
              </div>
              <div className="flex gap-4 justify-center">
                {images.map((image, index) => (
                  <button
                    key={image.label}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors flex items-center justify-center bg-muted p-1 ${
                      selectedImage === index
                        ? 'border-primary'
                        : 'border-transparent hover:border-muted-foreground/50'
                    }`}
                    title={image.label}
                  >
                    <img
                      src={image.url}
                      alt={`${product.name} - ${image.label}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              {product.is_coming_soon && (
                <div className="flex items-center gap-3 p-4 bg-honey-gold/10 border border-honey-gold/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-honey-gold" />
                  <p className="text-muted-foreground">
                    Detailed information for this instrument is still being developed.
                    Please contact us for more details.
                  </p>
                </div>
              )}

              {product.description && (
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-4">Description</h2>
                  <div className="text-muted-foreground space-y-4">
                    {product.description.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4">
                <Link
                  to={`/sales/inquiry?instrument=${encodeURIComponent(product.name + ' ' + typeLabel)}`}
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
}
