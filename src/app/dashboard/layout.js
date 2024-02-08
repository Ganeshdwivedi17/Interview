import React from "react";
import AdminNav from "../components/AdminNavbar";
import Footer from "../components/Footer";

const layout = ({ children }) => {
  return (
    <div>
      <AdminNav />
      <main> {children}</main>
      <Footer />
    </div>
  );
};

export default layout;
