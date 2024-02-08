"use client";
import React from "react";
import { removefromcart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

function page() {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);
  // window.localStorage.setItem("cartitems", cartitems);
  // const localcart = window.localStorage.getItem("cartitems");
  // console.log(localcart);
  const HandleRemove = (id) => {
    dispatch(removefromcart(id));
    toast("your cart is too light", {
      icon: "😢",
    });
  };
  const GetCartProducts = cartitems.map((item) => {
    {
      var slug = item.title.replace(/ /g, "-");
    }
    return (
      <div
        key={item._id}
        className="flex  border-2 border-slate-300 justify-between items-center sm:flex-col md:flex-row my-2 mx-10"
      >
        <Link
          className="flex sm:gap-2 md:gap-20 justify-between items-center sm:flex-col md:flex-row"
          href={`/menu/${slug}`}
        >
          <img
            className="sm:w-[30vh] h-full md:w-20 m-2"
            src={item.thumbnail}
            alt={item.title}
          />
          <p className="font-bold text-sm">{item.title}</p>
          <p> ₹{item.price}</p>
        </Link>

        <button
          onClick={() => {
            HandleRemove(item._id);
          }}
          className="bg-red-400 h-[80%] m-2 text-white px-4 py-1 rounded-md"
        >
          Remove
        </button>
      </div>
    );
  });

  return (
    <div className="pt-[15vh]  mb-10">
      {cartitems.length == 0 ? (
        <h1 className=" sm:text-2xl md:text-3xl bg-red-900 p-5 text-white m-12 text-center">
          Please Add products first
        </h1>
      ) : (
        GetCartProducts
      )}
      <Toaster />
    </div>
  );
}

export default page;
