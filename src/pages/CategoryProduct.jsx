import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";

const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();

  const getCategoryProducts = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryProducts();
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <button
        onClick={() => navigate("/")}
        className="mb-5 bg-black text-white px-3 py-1 rounded"
      >
        Back
      </button>

      {products.length > 0 ? (
        products.map((item) => (
          <div key={item.id} className="mb-5 border p-3 rounded">
            <h2 className="font-bold">{item.title}</h2>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-40"
            />
            <p>${item.price}</p>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-[400px]">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;