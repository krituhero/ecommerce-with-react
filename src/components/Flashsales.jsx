import React, { useState, useEffect, useRef } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { HiOutlineHeart, HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Flashsales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  async function getProducts() {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await fetch("/data/flashSalesProducts.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.flashSalesProducts);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const scrollAmount = clientWidth / 1.5;

      let newScrollPosition =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      newScrollPosition = Math.max(0, Math.min(maxScroll, newScrollPosition));
      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-[7%] my-14 max-sm:mt-8">
      <div className="flex w-full items-center gap-6 mb-8 justify-between relative">
        <h2 className="text-3xl font-bold max-sm:text-xl text-red-600">
          Today’s Flash Sales
        </h2>
        <div className="flex items-center gap-4">
          <button
            className="bg-secondary w-8 h-8 rounded-full hover:bg-action hover:text-primary flex items-center justify-center"
            onClick={() => scroll("left")}
          >
            <HiArrowLeft />
          </button>
          <button
            className="bg-secondary w-8 h-8 rounded-full hover:bg-action hover:text-primary flex items-center justify-center"
            onClick={() => scroll("right")}
          >
            <HiArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex w-full overflow-x-auto scroll-smooth gap-6 scrollbar-hide"
      >
        {products.map((product) => (
          <div
            className="flex flex-col gap-1 w-[20rem] max-sm:w-[12rem] flex-shrink-0"
            key={product.id}
          >
            <div className="group flex flex-col items-center justify-center w-full h-[17rem] max-sm:h-[14rem] rounded-md p-4 bg-secondary relative overflow-hidden">
              <img
                className="hover:scale-[1.2] transition-all"
                src={product.img}
                alt={product.alt}
              />
              <span className="absolute px-2 rounded-md bg-accent left-3 top-2 text-sm text-primary">
                {product["discount-percentage"]}
              </span>

              <div className="absolute top-2 right-3 flex flex-col gap-4">
                <button className="hover:bg-red-600 hover:text-white bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]">
                  <HiOutlineHeart className="w-full h-full" />
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="hover:bg-red-600 hover:text-white bg-white text-black w-6 h-6 rounded-full flex items-center justify-center p-[1px]"
                >
                  <HiOutlineEye className="w-full h-full" />
                </Link>
              </div>
              <button className="w-full h-[2rem] absolute bottom-0 bg-black text-primary hidden max-lg:block group-hover:block">
                Add To Cart
              </button>
            </div>
            <h3 className="text-md font-medium">{product.name}</h3>
            <div className="flex gap-2 items-center">
              <span className="text-action">${product["discount-price"]}</span>
              <span className="line-through">${product.price}</span>
            </div>
            <div className="flex items-center gap-1">
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
              <span>({product["times rated"]})</span>
            </div>
          </div>
        ))}
      </div>

      {/* Button to Redirect to All Products */}
      <div className="flex justify-center mt-6">
        <Link
          to="/allproducts"
          className="text-white bg-red-500 py-2 px-4 rounded-md hover:bg-black transition-all"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default Flashsales;
