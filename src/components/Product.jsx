import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/data/flashSalesProducts.json');
        const data = await res.json();
        setProducts(data.flashSalesProducts);
      } catch (err) {
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

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
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="relative border rounded-lg p-4 hover:shadow-lg transition-all bg-white"
            >
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
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
