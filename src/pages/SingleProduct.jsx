import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
  try {
    const res = await axios.get(
      `https://dummyjson.com/products/${id}`
    );

    setProduct(res.data);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
  }, [id]);

  const originalPrice = product
    ? Math.round(
        product.price +
          (product.price * product.discountPercentage) / 100
      )
    : 0;

  return (
    <>
      {product ? (
        <div className="max-w-6xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-md rounded-lg"
          />

          <p className="mt-4 text-lg font-semibold">
            ${product.price}
            <span className="line-through ml-2 text-gray-500">
              ${originalPrice}
            </span>
          </p>

          <p className="mt-2">
            {product.brand?.toUpperCase()} /{" "}
            {product.category?.toUpperCase()}
          </p>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;