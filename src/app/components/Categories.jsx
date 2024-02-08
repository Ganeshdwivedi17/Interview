import React from "react";

const Categories = () => {
  return (
    <>
      <h1 className="text-center sm:text-xl md:text-2xl font-bold my-3 uppercase ">
        Deal Of The Day
      </h1>
      <div className="lg:grid-rows-3 md:grid-rows-2  sm:grid-rows-1 md:flex justify-center sm:px-10 items-center md:gap-5">
        <div className="p-5 text-center ">
          <img
            className="hover:shadow-lg hover:scale-[1.01]"
            src="https://livedemo00.template-help.com/wt_61177_v1/images/index-01-566x401.jpg"
          />
          <p className="uppercase text-lg font-bold mt-[10px]">For Vegans</p>
          <p className="uppercase text-xs font-normal mb-[20px]">
            burger + french fries + drink
          </p>
        </div>
        <div className="p-5 text-center">
          <img
            className="hover:shadow-lg hover:scale-[1.01]"
            src="https://livedemo00.template-help.com/wt_61177_v1/images/index-02-566x401.jpg"
          />
          <p className="uppercase text-lg font-bold mt-[10px]">Order Online</p>
          <p className="uppercase text-xs font-normal mb-[20px]">
            Available Every day 9 am - 11pm
          </p>
        </div>
        <div className="p-5 text-center">
          <img
            className="hover:shadow-lg hover:scale-[1.01]"
            src="https://livedemo00.template-help.com/wt_61177_v1/images/index-03-566x401.jpg"
          />
          <p className="uppercase text-lg font-bold mt-[10px]">Cake Specials</p>
          <p className="uppercase text-xs font-normal mb-[20px]">
            Every friday only $ 0.99
          </p>
        </div>
      </div>
    </>
  );
};

export default Categories;
