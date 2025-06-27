
import { ShoppingCart, Plus, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ShopScreen = () => {
  const [cartCount, setCartCount] = useState(0);
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Bridal Makeup Kit",
      price: 299,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      description: "Complete bridal makeup collection with premium products"
    },
    {
      id: 2,
      name: "Party Glam Kit",
      price: 199,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "Perfect for evening parties and special occasions"
    },
    {
      id: 3,
      name: "HD Makeup Kit",
      price: 399,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      description: "Professional HD makeup for photo shoots"
    },
    {
      id: 4,
      name: "Everyday Essentials",
      price: 149,
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
      description: "Daily makeup essentials for natural looks"
    }
  ];

  const addToCart = (product: typeof products[0]) => {
    setCartCount(prev => prev + 1);
    toast({
      title: "Added to Cart! 🛍️",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pb-20">
      {/* Header */}
      <div className="makeup-gradient pt-12 pb-6 px-6 rounded-b-3xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 font-montserrat mb-2">
            Shop Makeup Kits
          </h1>
          <p className="text-gray-700 opacity-90">
            Premium collections for every occasion
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-6 mt-8">
        <div className="grid gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="makeup-card overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                  <Heart size={20} className="text-pink-600" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">
                    ${product.price}
                  </span>
                  <Button
                    onClick={() => addToCart(product)}
                    className="makeup-button flex items-center space-x-2"
                  >
                    <Plus size={18} />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <button className="fixed bottom-24 right-6 bg-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40">
          <div className="relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </div>
        </button>
      )}
    </div>
  );
};

export default ShopScreen;
