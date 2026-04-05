import React from "react";
import { getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";

const Carousel = () => {
  const { data } = getData();

  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowLeft
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "5px",
            left: "20px",
            zIndex: 10,
          }}
        />
      </div>
    );
  };

  
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "5px",
            right: "20px",
            zIndex: 10,
          }}
        />
      </div>
    );
  };

  
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
          >
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center h-[500px] px-4">

              {/* TEXT */}
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-red-500 text-sm">
                  Powering Your World with Electronics
                </h3>

                <h1 className="text-xl md:text-4xl font-bold text-white">
                  {item.title}
                </h1>

                <p className="text-gray-400 max-w-md">
                  {item.description}
                </p>

                <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                  Shop Now
                </button>
              </div>

              {/* IMAGE */}
              <div>
                <img
                  src={item.thumbnail}   
                  alt={item.title}
                  className="rounded-full w-[250px] md:w-[400px] hover:scale-105 transition-all"
                />
              </div>

            </div>
          </div>
        ))}
      </Slider>

      <Category />
    </div>
  );
};

export default Carousel;