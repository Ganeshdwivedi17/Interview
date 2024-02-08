import Card from "../components/Card";
import React from "react";

const Menu = () => {
  return (
    <div className="bg-[#f2f3f8]">
      <h1 className="text-center font-bold sm:text-3xl md:text-5xl py-5">
        Our Menu
      </h1>
      <div className="grid lg:grid-rows-3 md:grid-rows-2  sm:grid-rows-1 md:flex justify-center items-center md:gap-20">
        <Card
          src={
            "https://livedemo00.template-help.com/wt_61177_v1/images/menu-modern-2-310x260.png"
          }
        />
        <Card
          src={
            "https://livedemo00.template-help.com/wt_61177_v1/images/menu-modern-6-310x260.png"
          }
        />
        <Card
          src={
            "https://livedemo00.template-help.com/wt_61177_v1/images/menu-modern-5-310x260.png"
          }
        />
      </div>
    </div>
  );
};

export default Menu;
