import React, { useState, useEffect, useRef } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch("../data/categoriesData.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-[7%] my-20">
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-[1.3rem] h-[3rem] rounded-md bg-accent"></span>
        <h2 className="text-base text-action font-bold">Categories</h2>
      </div>
      <div className="flex w-full items-center gap-6 mb-8 justify-between">
        <h5 className="text-3xl max-sm:text-xl font-bold">
          Browse By Category
        </h5>
        <div className="flex items-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-action hover:text-primary flex items-center justify-center"
          >
            <HiArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-action hover:text-primary flex items-center justify-center"
          >
            <HiArrowRight />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex w-full gap-6 whitespace-nowrap overflow-x-auto border-b-[3px] border-secondary pb-16"
      >
        {categories.map((category, index) => (
          <Link
            className="flex flex-col gap-1 w-[14rem] h-[10rem] max-sm:w-[9rem] max-sm:h-[8rem] border-[3px] border-secondary rounded-lg p-4 items-center justify-center hover:bg-action transition-all hover:text-primary"
            id="category-p"
            to="/"
            key={index}
          >
            <img
              className="category-icon"
              src={category.icon}
              alt={category.alt}
            />
            <h3>{category.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
