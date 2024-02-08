import React from "react";

const Hero = () => {
  return (
    <div className="text-center relative">
      <div className="">
        <img
          className="object-cover w-[100%] md:block sm:hidden relative"
          src="https://img.freepik.com/premium-photo/burger-flight-white-background_325774-4399.jpg"
        />
        <img
          className="object-cover w-[100%] md:hidden sm:block relative"
          src="https://img.freepik.com/premium-photo/burger-falls-from-vegetables-additives-spill-out-it_161299-799.jpg?w=360"
        />
      </div>
      <div className="absolute md:backdrop-blur-0 sm:backdrop-blur-sm text-left sm:w-[60%] md:w-[30%] left-[7vw] sm:top-[25vh] md:top-[18vw]">
        <h1 className="md:text-5xl text-slate-900 sm:text-2xl font-bold text-left">
          Perfect <span className="text-red-800">burgers</span>, perfect date
        </h1>
        <p className="md:text-2xl text-slate-700 sm:text-lg text-2xl font-medium text-left uppercase sm:my-2 md:my-8">
          The best burger are shared with friends
        </p>
        <div className="flex pt-2 flex-row sm:gap-2 md:gap-4">
          <button className="bg-red-800 px-4 py-2 rounded-[25px] text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
