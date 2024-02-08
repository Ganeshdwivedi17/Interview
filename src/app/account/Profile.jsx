import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const User = useSelector((state) => state.auth.user);
  const IsLogedIn = useSelector((state) => state.auth.isLogedIn);

  return IsLogedIn ? (
    <div className="mt-20">
      <header className="flex flex-wrap items-center p-4 md:py-8">
        <div className="md:w-3/12 md:ml-16 ">
          <img
            className="w-60 h-60 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-blue-600 p-1"
            src={User.profile}
            alt="profile"
          />
        </div>

        <div className="w-8/12 md:w-7/12 ml-4">
          <div className="md:flex md:flex-wrap md:items-center mb-4">
            <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 text-blue-600 sm:mb-0">
              {User.name}
            </h2>
          </div>

          <div className="hidden md:block">
            <h1 className="text-2xl text-green-600">Your Credentials are:-</h1>
            <h1 className="font-semibold">Email: {User.email}</h1>
            <span>Id: {User.id}</span>
            <p>Your Account is created on: {User.created}</p>
          </div>
        </div>

        <div className="md:hidden text-sm my-2">
          <h1 className="text-2xl text-green-600">Your Credentials are:-</h1>
          <h1 className="font-semibold">Email: {User.email}</h1>
          <span>Id: {User.id}</span>
          <p>Your Account is created on: {User.created}</p>
        </div>
      </header>
    </div>
  ) : (
    <h1 className="mt-20 text-5xl">Please Login to visit Profile</h1>
  );
};

export default Profile;
