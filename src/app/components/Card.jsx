import React from "react";

const Card = ({ src }) => {
  return (
    <>
      <div className="lg:w-[25vw] text-center md:w-[30vw] sm:w-[60vw] h-[full] md:my-4 sm:my-1 rounded-[25px] md:p-4  overflow-hidden">
        <div className="">
          <img
            className=" hover:scale-[1.03] hover:transition-all hover:delay-[120ms]"
            src={src}
          />
        </div>
        <div className="mt-2">
          <p className="font-medium text-2xl text-slate-800">Classic Burger</p>
          <h4 className="font-bold text-2xl text-red-800">$ 1999</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
