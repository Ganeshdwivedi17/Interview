"use client";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function ReviewProduct({ params }) {
  const [product, setProduct] = useState([]);

  let slug = params.slug.replace(/-/g, " ");
  console.log("this is id ok", slug);

  const getProduct = async () => {
    try {
      const response = await axios.get(`/api/product/${slug}`);
      console.log("response", response.data.product);
      setProduct(response.data.product);
      console.log("this is pro", product);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="pt-14 text-start">
        <div className="lg:flex lg:gap-20 max-w-[1200px] m-auto lg:mt-20 px-14 py-10 justify-center">
          <img
            className="w-[50vw] h-full"
            src={product.thumbnail}
            alt={product.title}
          />
          <div className="mt-4">
            <div className="text-sm font-semibold text-slate-900">
              <h1 className="text-2xl"> {product.title}</h1>
            </div>
            <div className="text-[12px] text-slate-500 font-medium">
              <p className="text-lg">{product.description}</p>
            </div>
            <div className="text-md font-semibold text-[#FF676D] mt-1">
              <h1>Price - ₹{product.price}</h1>
            </div>
            <div className=" md:mt-3 sm:mt-8">
              <button className="bg-black px-5 rounded-md py-2 text-white">
                Buy
              </button>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default ReviewProduct;
