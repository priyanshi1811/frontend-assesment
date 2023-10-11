import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "../css/styles.css";
import { baseurl } from "../constant";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [slider, setSlider] = useState(null);
  useEffect(() => {
    axios
      .get(`${baseurl}/products`)
      .then((response) => {
        setProducts(response.data);
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true, // Show arrow keys for navigation
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const prevSlide = () => {
    slider && slider.slickPrev(); // Go to the previous slide using slickPrev()
  };

  const nextSlide = () => {
    slider && slider.slickNext(); // Go to the next slide using slickNext()
  };
  const category = [
    "All",
    "Men's clothing",
    "Women's clothing",
    "Jewelery",
    "Electronics",
  ];
  const filterProduct = (item) => {
    console.log("===>", item);
    const category = item.toLowerCase();
    let filteredProducts = [];
    if (category === "all") {
      setProducts(allProducts);
      return;
    } else {
      filteredProducts = allProducts.filter(
        (product) => product.category === category
      );
    }
    setProducts(filteredProducts);
  };

  return (
    <div className="p-4 md:w-full overflow-x-hidden">
      <h1 className=" md:text-[90px] text-[40px] font-syne ">New Products</h1>
      <hr className="md:w-[45%] w-[80%] mb-12 p-1 rounded bg-[#000]" />

      <div className="flex md:flex-row md:justify-between flex-col overflow-x-hidden">
        <div className="md:w-[20%] flex flex-col md:text-[18px] text-[10px] font-syne font-600 flex items-center">
          <div className="flex md:flex-col corsor-pointer ">
            {category.map((item, index) => (
              <div
                className="hover:scale-110 hover:font-800 mt-2 ml-2 md:ml-0"
                key={index}
              >
                <text
                  className=""
                  onClick={() => {
                    filterProduct(item);
                  }}
                >
                  {item}
                </text>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:w-[80%] overflow-x-hidden">
          <Slider {...sliderSettings} ref={(slider) => setSlider(slider)}>
            {products.map((product, index) => (
              <div key={index} className="product-slide m">
                <div className="product-card">
                  <div className="items-center flex justify-center m-3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className=" product-image"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </div>
                  <h2 className="product-title">
                    {product.title.length < 20
                      ? product.title
                      : product.title.slice(0, 20) + "..."}
                  </h2>
                  <p className="product-description">
                    {product.description.length < 100
                      ? product.description
                      : product.description.slice(0, 100) + "..."}
                  </p>
                  <span className="text-blue-600 font-semibold">
                    ${product.price}
                  </span>
                  <span className="text-gray-600 line-through ml-2">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
          <div className="text-center mb-4">
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-md mr-2"
              onClick={prevSlide}
            >
              Previous
            </button>
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
              onClick={nextSlide}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
