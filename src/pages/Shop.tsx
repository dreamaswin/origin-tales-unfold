
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
};

const Shop = () => {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Humans of Origin Magazine - Vol. 1',
      description: 'Our first print collection featuring 15 extraordinary stories from around the world.',
      price: 24.99,
      imageUrl: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6',
      category: 'Print',
    },
    {
      id: '2',
      name: 'Stories Untold - Book',
      description: 'A hardcover collection of our most impactful narratives with exclusive photographs.',
      price: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
      category: 'Print',
    },
    {
      id: '3',
      name: 'Organic Cotton Tote Bag',
      description: 'Ethically produced tote featuring our "Every Story Matters" design.',
      price: 18.99,
      imageUrl: 'https://images.unsplash.com/photo-1597484662317-c93a6b0e3f07',
      category: 'Merchandise',
    },
    {
      id: '4',
      name: 'Digital Subscription - 1 Year',
      description: 'Access to all our premium digital content, early releases, and member exclusives.',
      price: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1586516900572-63e25b966b3f',
      category: 'Digital',
    },
  ]);

  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-50 py-12 md:py-16">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
                Shop Our Collection
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Discover products that help us continue sharing powerful human stories and support our mission.
              </p>
            </div>
          </div>
        </section>

        {/* Product Listing */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
              <Button variant="outline" className="border-brand-300 text-brand-700 hover:bg-brand-50">
                All Products
              </Button>
              {categories.map(category => (
                <Button 
                  key={category} 
                  variant="outline" 
                  className="border-brand-300 text-brand-700 hover:bg-brand-50"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map(product => (
                <div key={product.id} className="border border-border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-brand-600 mb-1">{product.category}</p>
                    <h3 className="font-serif font-medium text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex-between">
                      <span className="font-medium">${product.price.toFixed(2)}</span>
                      <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="py-12 md:py-16 bg-earth-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4">Support Our Mission</h2>
              <p className="text-muted-foreground mb-8">
                Every purchase helps fund our storytelling projects and provides fair compensation to our contributors around the world.
              </p>
              <Button className="bg-brand-600 hover:bg-brand-700">
                Become a Patron
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
