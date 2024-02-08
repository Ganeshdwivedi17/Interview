import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="bg-slate-100 overflow-x-hidden">
      <div className="flex md:flex-row sm:flex-col  justify-between bg-slate-100  gap-10 px-5 py-5">
        <div className="sm:m-0 md:block lg:m-5">
          <h1 className="uppercase text-lg font-bold mb-3">Supports</h1>
          <div className="foot-part">
            <p className="text-sm  font-light pb-2">Contact us</p>
            <p className="text-sm  font-light pb-2">Promotions & Sale</p>
            <p className="text-sm  font-light pb-2">Track Order</p>
            <p className="text-sm  font-light pb-2">Privacy Policy</p>
            <p className="text-sm  font-light pb-2">Terms & Conditions</p>
            <p className="text-sm  font-light pb-2">Cookie Settings</p>
          </div>
        </div>

        <div className="sm:m-0 md:block lg:m-5">
          <h1 className="uppercase text-lg font-bold mb-3">About</h1>
          <div className=" foot-part">
            <p className="text-sm  font-light pb-2">Company</p>
            <p className="text-sm  font-light pb-2">Corporate News</p>
            <p className="text-sm  font-light pb-2">Press Center</p>
            <p className="text-sm  font-light pb-2">Investors</p>
            <p className="text-sm  font-light pb-2">Sustainability</p>
            <p className="text-sm  font-light pb-2">Careers</p>
            <p className="text-sm  font-light pb-2">Store Finder</p>
          </div>
        </div>
        <div className="sm:m-0 lg:m-5 ">
          <h1 className="uppercase text-lg font-bold mb-3">Stay up to Date</h1>
          <div className="flex flex-row ">
            <div className="my-4 mx-4">
              <YouTubeIcon fontSize="medium" />
            </div>
            <div className="my-4 mx-4">
              <TwitterIcon fontSize="medium" />
            </div>
            <div className="my-4 mx-4">
              <PinterestIcon fontSize="medium" />
            </div>
            <div className="my-4 mx-4">
              <InstagramIcon fontSize="medium" />
            </div>
            <div className="my-4 mx-4">
              <FacebookIcon fontSize="medium" />
            </div>
          </div>
          <img
            className="w-20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Food_Network_Logo.svg/2085px-Food_Network_Logo.svg.png"
          />
        </div>
      </div>
    </div>
  ); //rel="noopener noreferrer"
}

export default Footer;
