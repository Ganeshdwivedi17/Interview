"use client";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function page({ params }) {
  const router = useRouter();
  const IsAdmin = useSelector((state) => state.auth.isAdmin);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  console.log(IsAdmin);
  console.log(params)
  const handleSubmit = async () => {
    try {
      let slug = params.slug.replace(/-/g, " ");
      const response = await axios.put(`/api/product/update/${slug}`, {
        title,
        description,
        price,
        thumbnail,
        category,
      });
      console.log(response.data);
      console.log(params)
      toast.success("Product updated successfull.");
      const newSlug = title.replace(/ /g, "-");
      router.push(`/dashboard/admin/products/${newSlug}`);
      setTitle("");
      setPrice("");
      setDescription("");
      setThumbnail("");
      setCategory("");
    } catch (error) {
      console.log("error", error.message);
      toast.error("Registeration failed.");
    }
  };

  return (
    <div>
      {IsAdmin ? (
        <div className="pt-20 bg-[url('https://img.freepik.com/premium-photo/blue-glass-clear-circle-plate-background-cosmetic-product-abstract-wallpaper-scene-with-ball-aqua-transparent-3d-illustration-rendering_42100-2391.jpg?w=900')] bg-cover bg-center relative">
          <div className="sm:mt-20 md:mt-0 sm:m-2 ">
            <div className="mb-[-15px] p-10 flex justify-center">
              <form
                className="md:w-[37vw] rounded-md p-10 bg-white bg-opacity-30 backdrop-blur-[6px] sm:w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex justify-center flex-col items-center">
                  <p className="font-bold ">Add Products</p>
                  <hr className="h-[2px] w-full mt-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
                <div className="flex flex-col justify-start items-center">
                  <p className="text-slate-700 text-sm self-start">
                    Enter product details to Add
                  </p>
                  <div className="flex flex-col my-2">
                    <label className="text-sm font-bold">Name</label>
                    <input
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      required
                      className="md:w-[35vw] sm:w-full px-4 py-3 border border-solid border-black"
                      type="text"
                      placeholder="Enter product Title"
                    />
                  </div>
                  <div className="flex flex-col my-2">
                    <label className="text-sm font-bold">Price</label>
                    <input
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      required
                      className="md:w-[35vw] sm:w-full px-4 py-3 border border-solid border-black"
                      type="text"
                      placeholder="Enter product Price"
                    />
                  </div>
                  <div className="flex flex-col my-2">
                    <label className="text-sm font-bold">Thumbnail</label>
                    <input
                      value={thumbnail}
                      onChange={(e) => {
                        setThumbnail(e.target.value);
                      }}
                      required
                      className="md:w-[35vw] sm:w-full px-4 py-3 border border-solid border-black"
                      type="text"
                      placeholder="Enter product Thumbnail"
                    />
                  </div>
                  <div className="flex flex-col my-2 text-start">
                    <label className="text-sm font-bold">Description</label>
                    <input
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      required
                      className="md:w-[35vw] sm:w-full px-4 py-3 border border-solid border-black"
                      type="text"
                      placeholder="Enter product Description"
                    />
                  </div>
                  <div className="flex flex-col my-2 text-start">
                    <label className="text-sm font-bold">category</label>
                    <input
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                      required
                      className="md:w-[35vw] sm:w-full px-4 py-3 border border-solid border-black"
                      type="text"
                      placeholder="Enter product Category"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="bg-slate-300 rounded-md px-[14vw] text-slate-900 py-5 font-bold"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>

          <Toaster />
        </div>
      ) : (
        <h1 className="pt-36 text-center font-bold text-4xl">
          You can't access this page
        </h1>
      )}
    </div>
  );
}
