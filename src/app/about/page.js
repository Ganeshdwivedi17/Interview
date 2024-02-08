import React from "react";

const page = () => {
  return (
    <section className="py-10 bg-[url('https://img.freepik.com/premium-vector/poster-with-hand-drawn-fresh-vegetables-healthy-food-agriculture-concept-illustration-food_559587-18.jpg?w=740')] lg:py-20 font-poppins">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="backdrop-blur-md text-slate-800 bg-black bg-opacity-10 rounded-[25px] lg:max-w-md">
              <div className="px-4 pl-4 mb-6 ">
                <span className="text-sm  uppercase">Who we are?</span>
                <h1 className="mt-2 text-3xl font-black  md:text-5xl ">
                  About Us
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam Lorem ipsum dolor sit amet.
              </p>
              <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-blue-500 dark:text-blue-400"></span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-300">
                      2097
                    </p>
                    <h2 className="text-sm text-gray-300">
                      Projects and Plans
                    </h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-blue-500 dark:text-blue-400"></span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-300">
                      3,590
                    </p>
                    <h2 className="text-sm text-gray-300">Helped people</h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-blue-500 dark:text-blue-400"></span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-300">
                      74
                    </p>
                    <h2 className="text-sm text-gray-300">Volunteer</h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-blue-500 dark:text-blue-400"></span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-300">
                      100
                    </p>
                    <h2 className="text-sm text-gray-300">Timing</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://img.freepik.com/free-psd/super-delicious-burger-instagram-post-design-template_202595-494.jpg?w=740&t=st=1702493596~exp=1702494196~hmac=b4716baf231ce6fa2b1df61a50c916771c141aa58d9eadf8ec2426f6e67e9f3b"
              alt="about-img"
              className="relative z-40 object-cover w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
