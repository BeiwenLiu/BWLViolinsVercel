import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Music2 } from 'lucide-react';
import { getProducts } from '@/lib/products';
import type { Product } from '@/lib/types';

const Sales = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const violinProducts = products.filter((p) => p.type === 'Violin');
  const violaProducts = products.filter((p) => p.type === 'Viola');
  const celloProducts = products.filter((p) => p.type === 'Cello');

  const renderProductCard = (product: Product, category: string) => (
    <Link key={product.id} to={`/sales/${category}/${product.slug}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
        <div className="aspect-[4/5] overflow-hidden bg-muted flex items-center justify-center p-4">
          <img
            src={product.front_image_url}
            alt={product.name}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {product.is_coming_soon ? 'Description coming soon' : product.description || 'Description coming soon'}
          </p>
        </CardContent>
      </Card>
    </Link>
  );

  const renderSection = (title: string, subtitle: string, items: Product[], category: string) => (
    <div className="mb-12">
      <h2 className="section-heading">{title}</h2>
      <p className="section-subheading">{subtitle}</p>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="overflow-hidden h-full opacity-50 animate-pulse">
              <div className="aspect-[4/5] bg-muted" />
              <CardContent className="p-6">
                <div className="h-4 bg-muted rounded mb-2" />
                <div className="h-3 bg-muted rounded w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="flex items-center justify-center py-12 text-muted-foreground">
          <Music2 className="h-8 w-8 mr-3 opacity-30" />
          <span>No {title.toLowerCase()} currently listed — check back soon.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p) => renderProductCard(p, category))}
        </div>
      )}
    </div>
  );

  return (
    <div>
      <PageHeader
        title="Sales"
        subtitle="Quality string instruments, bows, and accessories for musicians of all levels"
      />

      <section className="py-16">
        <div className="container">
          {renderSection('Violins', 'From student instruments to professional grade violins', violinProducts, 'violins')}
          {renderSection('Violas', 'Quality violas for the discerning musician', violaProducts, 'violas')}
          {renderSection('Cellos', 'Professional cellos from around the world', celloProducts, 'cellos')}

          {/* Other Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Bass', description: 'Quality bass instruments' },
              { title: 'Bows', description: 'Well-balanced bows for optimal performance' },
              { title: 'Accessories', description: 'Essential accessories for string players' },
            ].map((category) => (
              <Card key={category.title} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Music2 className="h-16 w-16 text-primary/30" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-muted rounded-lg text-center">
            <h3 className="font-serif text-2xl font-semibold mb-4">Need Help Choosing?</h3>
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
