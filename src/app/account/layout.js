import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

function layout({ children }) {
  return (
    <>
      <Nav />
      <main> {children}</main>
      <Footer className={"md:pt-24"} />
    </>
  );
}

export default layout;
