"use client";
import React from "react";
import Login from "../Login";
import { usePathname } from "next/navigation";
import Register from "../Register";
import Profile from "../Profile";

function page({ params }) {
  const pathname = usePathname();
  let condition;
  if (pathname == "/account/Login") {
    condition = <Login />;
  } else if (pathname == "/account/Register") {
    condition = <Register />;
  } else {
    condition = <Profile />;
  }

  return <>{condition}</>;
}

export default page;
