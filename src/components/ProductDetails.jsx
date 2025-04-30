import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch('/data/flashSalesProducts.json');
        const data = await response.json();
        const found = data.flashSalesProducts.find(p => p.id === id);
        setProduct(found);
      } catch (err) {
        console.error('Error loading product:', err);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-start bg-gray-100 rounded-xl mt-6 shadow-md">
        <div className="w-full md:w-1/2">
          <img src={product.img} alt={product.alt} className="w-full object-contain rounded-xl shadow-sm" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-yellow-500 font-medium mb-3">⭐ {product.stars} ({product["times rated"]} reviews)</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-400 line-through text-xl">${product.price}</span>
            <span className="text-2xl font-bold text-pink-600">${product["discount-price"]}</span>
            <span className="text-green-600 font-medium">{product["discount-percentage"]} OFF</span>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            This is a premium {product.name} available on flash sale with unbeatable price and rating.
          </p>
          <div className="flex gap-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              Buy Now
            </button>
            <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Button to Redirect to All Products Page */}
      <div className="flex justify-center mt-6">
        <Link
          to="/allproducts"
          className="text-white bg-red-500 py-2 px-4 rounded-md hover:bg-black transition-all mb-12"
        >
          View All Products
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
