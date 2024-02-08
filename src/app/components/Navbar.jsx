"use client";
import React, { useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Logo from "../assets/Logo";

function Navbar() {
    const [toggle, settoggle] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const Toggle = () => {
        settoggle(!toggle);
    };
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);
        window.addEventListener('scroll', handleIsSticky);
    }, [isSticky])

    const navlinkcss =
        "text-black text-[#222744] text-[16px] font-[400] ";
    const mobNavlinkcss =
        "text-[25px] font-medium hover:underline decoration-black decoration-2 underline-offset-8";

    return (
        <>
            <nav className="relative">
                <div className={"flex fixed lg:sticky bg-white shadow-md  w-full z-40 flex-row justify-between xl:px-[65px] py-[10px] lg:py-[19px] items-center px-[25px]"}>
                    <Logo className={"xl:w-[108px] w-[80px] xl:h-[42px]"} />
                    <div className="lg:block hidden">
                        <ul className="flex flex-row items-center gap-x-[40px]">
                            <li className={navlinkcss}>
                                About
                            </li>
                            <li className={navlinkcss}>
                                Services
                            </li>
                            <li className={navlinkcss}>
                                Our Work
                            </li>
                            <li className={`${navlinkcss}`}>
                                Blog
                            </li>

                            <li>
                                <button className="rounded-[13px] border bg-[#556EE6] lg:px-[45px] px-[25px] py-[7px] hover:border hover:border-[#556EE6] hover:text-[#556EE6] hover:bg-[white] transition-colors lg:py-[14px]  relative text-white font-medium">
                                    Get A Quote
                                </button>
                            </li>
                        </ul>
                    </div>


                    <div className="flex lg:hidden flex-row gap-5">
                        <button
                            onClick={Toggle}
                            className="text-black block lg:hidden Hamburger "
                        >
                            {toggle ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
                        </button></div>
                </div>

            </nav>
            {toggle && (
                <div
                    className="p-10 z-10 pl-10 duration-1000 delay-300 ease-in-out pt-36 fixed bg-white w-[100vw] h-[100vh]"
                >
                    <div className="">
                        <div className="lg:hidden block">
                            <ul className="flex flex-col gap-4">
                                <li className={mobNavlinkcss}>
                                    Home
                                </li>
                                <li className={mobNavlinkcss}>
                                    Services
                                </li>
                                <li className={mobNavlinkcss}>
                                    Our Work
                                </li>
                                <li className={`${mobNavlinkcss}`}>
                                    Blog
                                </li>
                                <li className={`${mobNavlinkcss}`}>
                                    About Us
                                </li>
                                <li className={`${mobNavlinkcss}`}>
                                    Blog
                                </li>
                                <li>
                                    <button className="rounded-[13px] border bg-[#556EE6] lg:px-[45px] px-[25px] py-[7px] lg:py-[14px] text-white relative  group overflow-hidden font-medium inline-block">
                                        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#556EE6] group-hover:h-full opacity-90"></span>
                                        <span class="relative text-[16px] font-[600] capitalize group-hover:text-white">Get a quote</span>
                                    </button>
                                </li>
                            </ul>
                        </div>


                    </div >

                </ div>
            )
            }
        </>
    );
}

export default Navbar;