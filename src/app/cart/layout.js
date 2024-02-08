import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

const layout = ({ children }) => {
  return (
    <div>
      <Nav className={"bg-white"} />
      <main> {children}</main>
      <Footer />
    </div>
  );
};

export default layout;
