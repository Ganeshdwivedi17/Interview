"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserLogin } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    toast("wait while we recognize user");
    try {
      if (email != "" && password != "") {
        const response = await axios.post("/api/user/login", {
          email,
          password,
        });
        console.log(response.data);
        dispatch(UserLogin(response.data));
        router.push("/menu");
      } else {
        toast.error("please enter your email and password");
      }
    } catch (error) {
      toast.error("please enter valid email and password");
      console.log("error", error.message);
    }
  };
  return (
    <>
      <section className="overflow-hidden">
        <div className='md:w-[99.5vw] sm:w-[100vw] bg-cover bg-center bg-[url("https://img.freepik.com/premium-photo/beautiful-abstract-gold-blue-transparent-floral-design-background-banner-copy-space-minimalism_878783-7097.jpg?w=996")] pt-20  font-[FFDINforPumaW07-Regular-latin] relative  '>
          <div className="m-36 sm:m-2 ">
            <h1 className="text-4xl sm:pt-2 font-extrabold text-left lg:pl-20 pb-5 ">
              My Account
            </h1>
            <div className="mb-[-15px] p-10 flex justify-center">
              <form
                className="md:w-[37vw] rounded-md p-10 bg-black bg-opacity-10 backdrop-blur-[6px] sm:w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex justify-center flex-col items-center">
                  <p className="font-bold ">Login / Register</p>
                  <hr className="h-[2px] w-full mt-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
                <div className="flex flex-col justify-start items-center">
                  <p className="text-slate-950 text-sm self-start ">
                    Enter your username and password to log in
                  </p>
                  <div className="flex flex-col my-3">
                    <label className="text-sm font-bold">Email</label>
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                      className="md:w-[35vw] sm:w-full px-4 py-3 border border-solid border-black"
                      type="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div className="flex flex-col my-3 text-start">
                    <label className="text-sm font-bold">password</label>
                    <input
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                      autoComplete="true"
                      className="md:w-[35vw] sm:w-full px-4 py-3 border border-solid border-black"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="bg-slate-300 rounded-md px-[16vw] text-slate-900 py-5 font-bold"
                  >
                    Login
                  </button>
                  <p className="text-xs m-3 ">
                    By logging in, I confirm that I have read and accept the
                    Terms and Conditionsand the Privacy Policy.
                  </p>
                  <Link href={"/account/Register"} className="self-start ">
                    Don't Have an account yet{" "}
                    <span className="text-lg font-bold underline">
                      Register Here
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Toaster />
      </section>
    </>
  );
}

export default Login;
