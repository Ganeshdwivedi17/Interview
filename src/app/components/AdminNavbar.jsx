"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSelector, useDispatch } from "react-redux";
import { UserLogout } from "../redux/authSlice";
import toast, { Toaster } from "react-hot-toast";

function AdminNav() {
  const dispatch = useDispatch();
  const IsAdmin = useSelector((state) => state.auth.isAdmin);
  const pathname = usePathname();
  const [toggle, settoggle] = useState(false);
  const Toggle = () => {
    settoggle(!toggle);
  };
  const handleLogout = () => {
    dispatch(UserLogout());
    toast.error("See you again", {
      icon: "😩",
    });
  };
  return (
    <>
      <nav className="">
        <div
          className={`flex backdrop-blur-sm px-10 sm:fixed flex-row md:justify-around sm:justify-between z-50 bg-transparent p-3 absolute w-[100%]`}
        >
          <div className="self-center ">
            <Link href={"/"}>
              <img
                className="w-16"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Food_Network_Logo.svg/2085px-Food_Network_Logo.svg.png"
              />
            </Link>
          </div>
          <div className={`md:block sm:hidden md:mt-[3.5vh]`}>
            <ul className={`flex-row flex font-medium gap-4 text-base`}>
              <li className="">
                <Link
                  className={`link ${
                    pathname === "/dashboard/admin/products"
                      ? "text-red-800"
                      : ""
                  } hover:text-red-800`}
                  href="/dashboard/admin/products"
                >
                  Products
                </Link>
              </li>
              <li className="">
                <Link
                  className={`link ${
                    pathname === "/dashboard/admin/addProduct"
                      ? "text-red-800"
                      : ""
                  } hover:text-red-800`}
                  href="/dashboard/admin/addProduct"
                >
                  Add Products
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-row gap-5  items-center ld:order-1 sm:order-none md:order-1">
            <div className="md:block sm:hidden">
              {IsAdmin ? (
                <button
                  onClick={handleLogout}
                  className="border-2 border-black px-4 py-2"
                >
                  Logout
                </button>
              ) : (
                <Link
                  className="border-2 border-black px-4 py-2"
                  href={"/dashboard/admin/login"}
                >
                  Login
                </Link>
              )}
            </div>
            <div className="sm:block md:hidden">
              <button
                onClick={Toggle}
                className={"text-black Hamburger px-2 py-2"}
              >
                {toggle ? (
                  <CancelIcon fontSize="large" />
                ) : (
                  <MenuIcon fontSize="large" />
                )}
              </button>
            </div>
          </div>
        </div>
        {toggle ? (
          <div
            className={`md:hidden fixed w-[100vw] h-[100vh] z-40 px-[10vw] bg-white text-black sm:block sm:pt-[30vh]`}
          >
            <p className="text-3xl mb-20">Admin Dashboard</p>
            <ul className={`flex-col flex font-medium gap-4 text-base`}>
              <li className="text-xl">
                <Link
                  className={`link ${
                    pathname === "/dashboard/admin/products"
                      ? "text-red-800"
                      : ""
                  } hover:text-red-800`}
                  href="/dashboard/admin/products"
                >
                  Products
                </Link>
              </li>
              <li className="text-xl">
                <Link
                  className={`link ${
                    pathname === "/dashboard/admin/addProduct"
                      ? "text-red-800"
                      : ""
                  } hover:text-red-800`}
                  href="/dashboard/admin/addProduct"
                >
                  Add Products
                </Link>
              </li>
              {IsAdmin ? (
                <li className="text-xl">
                  <button
                    className="px-4 py-2 border-black border-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="text-xl">
                  <Link
                    href={"/dashboard/admin/login"}
                    className="px-4 py-2 border-black border-2"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ) : (
          ""
        )}
        <Toaster />
      </nav>
    </>
  );
}

export default AdminNav;
