import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PersonIcon from "@mui/icons-material/Person";

const Special = () => {
  return (
    <>
      <div className="md:flex justify-center items-center grid sm:grid-cols-2 md:grid-rows-4">
        <div className="p-7 text-center ">
          <AccessTimeIcon className="text-7xl" />
          <p className="uppercase sm:text-xs text-lg font-bold mt-[10px] underline-offset-4 underline decoration-orange-600 decoration-4">
            FAST DELIVERY
          </p>
          <p className="uppercase m-2 text-xs font-normal mb-[20px]">
            Everything you order at QuickFood will be quickly delivered to your
            door.
          </p>
        </div>
        <div className="p-7 text-center">
          <FastfoodIcon className="text-7xl" />
          <p className="uppercase sm:text-xs text-lg font-bold mt-[10px] underline-offset-4 underline decoration-orange-600 decoration-4">
            FRESH FOOD
          </p>
          <p className="uppercase m-2 text-xs font-normal mb-[20px]">
            We use only the best ingredients to cook the tasty fresh food for
            you.
          </p>
        </div>
        <div className="p-7 text-center">
          <RestaurantMenuIcon className="text-7xl" />
          <p className="uppercase sm:text-xs text-lg font-bold mt-[10px] underline-offset-4 underline decoration-orange-600 decoration-4">
            A VARIETY OF DISHES
          </p>
          <p className="uppercase m-2 text-xs font-normal mb-[20px]">
            In our menu you’ll find a wide variety of dishes, desserts, and
            drinks.
          </p>
        </div>
        <div className="p-7 text-center">
          <PersonIcon className="text-7xl" />
          <p className="uppercase sm:text-xs text-lg font-bold mt-[10px] underline-offset-4 underline decoration-orange-600 decoration-4">
            EXPERIENCED CHEFS
          </p>
          <p className="uppercase m-2 text-xs font-normal mb-[20px]">
            Our staff consists of chefs and cooks with years of experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Special;
