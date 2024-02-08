"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Link from "next/link";
import { addtocart } from "../redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const response = await fetch("/api/product/all", {
      method: 'GET', cache: 'no-store', next: {
        revalidate: 3,
      },
    });
    const Data = await response.json();
    console.log(Data);
    setProduct(Data.products);
  };
  const handleCart = (item) => {
    dispatch(addtocart(item));
    toast("your product is added to cart", {
      icon: "👏",
    });
  };
  console.log(product);
  useEffect(() => {
    getProduct();
  }, []);
  let slug;
  const GetAllProducts = product.map((item) => {
    slug = item.title.replace(/\s/g, "-");
    return (
      <div
        key={item._id}
        className="md:w-[25vw] text-center sm:w-[49vw] h-[full] md:my-8 sm:my-2 rounded-[25px] md:p-4 sm:p-2 overflow-hidden"
      >
        <Link href={`/menu/${slug}`}>
          <img
            className=" hover:scale-[1.03] hover:transition-all hover:delay-[120ms] md:w-full md:h-[40vh] sm:h-[25vh] sm:w-full "
            src={item.thumbnail}
          />
          <div className="mt-2">
            <p className="font-medium text-3xl text-slate-800">{item.title}</p>
            <h4 className="font-bold text-2xl text-red-800">₹ {item.price}</h4>
          </div>
        </Link>
        <button
          onClick={() => {
            handleCart(item);
          }}
          className="px-4 py-2 bg-red-800 text-white rounded-[25px]"
        >
          Add to Cart
        </button>
      </div>
    );
  });
  return (
    <div className="flex justify-center sm:py-[10vh] py-12">
      {
        <div className="grid md:grid-cols-2 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-0 md:gap-x-10">
          {GetAllProducts}
        </div>
      }
      <Toaster />
    </div>
  );
};

export default page;
