"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";

const page = ({ params }) => {
  const IsAdmin = useSelector((state) => state.auth.isAdmin);
  const router = useRouter();
  const [product, setProduct] = useState([]);
  const slug = params.slug.replace(/-/g, " ");
  const getProduct = async () => {
    const response = await axios.get(`/api/product/${slug}`);
    console.log(response.data.product);
    setProduct(response.data.product);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/product/delete/${slug}`);
      console.log(response.data.message);
      router.push("/dashboard/admin/products");
    } catch (error) {
      console.log(error, "error while deleting product");
    }
  };
  console.log(IsAdmin);
  return (
    <div>
      {IsAdmin ? (
        <div className="pt-10 text-start">
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
                <button
                  className="px-4 py-2 border-2 border-black "
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <Link
                  className="m-5 px-4 py-2 bg-slate-800 text-white"
                  href={`/dashboard/admin/products/update/${params.slug}`}
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="pt-36 text-3xl text-center">
          If you are admin Please Login
        </h1>
      )}
    </div>
  );
};

export default page;
