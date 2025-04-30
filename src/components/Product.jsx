import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error('Error parsing localStorage cart:', err);
      return [];
    }
  });
  const [quantities, setQuantities] = useState({}); // Track quantity for each product

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/data/flashSalesProducts.json');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data.flashSalesProducts);
        // Initialize quantities for each product to 1
        const initialQuantities = data.flashSalesProducts.reduce((acc, product) => {
          acc[product.id] = 1;
          return acc;
        }, {});
        setQuantities(initialQuantities);
      } catch (err) {
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (err) {
      console.error('Error saving to localStorage:', err);
    }
  }, [cart]);

  const updateQuantity = (productId, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta),
    }));
  };

  const addToCart = (product) => {
    const quantityToAdd = quantities[product.id] || 1;
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: quantityToAdd }];
    });
    // Reset quantity to 1 after adding to cart
    setQuantities((prev) => ({
      ...prev,
      [product.id]: 1,
    }));
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="px-[7%] py-10">
        <h2 className="text-3xl font-bold mb-6 text-red-600">All Flash Sale Products</h2>
        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative border rounded-lg p-4 hover:shadow-lg transition-all bg-white"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative mb-3">
                  <img
                    src={product.img}
                    alt={product.alt}
                    className="h-48 w-full object-contain rounded-md"
                    style={{ imageRendering: 'auto' }}
                  />
                  <span className="text-sm text-white bg-red-500 px-2 py-1 rounded-full absolute top-2 left-2">
                    {product['discount-percentage']}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <div className="flex gap-2 items-center">
                  <span className="text-action text-lg font-medium">
                    ${product['discount-price']}
                  </span>
                  <span className="line-through text-sm">${product.price}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return ratingValue <= Math.floor(product.stars) ? (
                      <FaStar key={index} className="text-yellow-500" />
                    ) : ratingValue - 0.5 === product.stars ? (
                      <FaStarHalfAlt key={index} className="text-yellow-500" />
                    ) : (
                      <FaRegStar key={index} className="text-gray-400" />
                    );
                  })}
                  <span>({product['times rated']})</span>
                </div>
              </Link>
              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg">{quantities[product.id] || 1}</span>
                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-black text-white py-2 rounded-md hover:bg-red-600 transition-all"
                >
                  Add to Cart
                </button>
              </div>
              <Link
                to="/cart"
                className="mt-2 block text-center w-full bg-red-500 text-white py-2 rounded-md hover:bg-black transition-all"
              >
                Go to Cart
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;