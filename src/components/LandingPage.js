import React from "react";
import Cover from "../assets/cover.jpg";
import meda from "../assets/meda.svg";
import { IoLogoTwitter } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import {FaTiktok} from 'react-icons/fa'
import { GrFacebookOption, GrYoutube, GrLinkedinOption } from "react-icons/gr";
const LandingPage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Cover})`,
          backgroundPosition: "center",
          width: "100%",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="absolute z-10 inset-0 bg-blue-900/90" />
        <div className=" flex flex-col space-y-2 items-center justify-center min-h-screen">
          <img src={meda} alt="" className="h-44 z-50" />
          <h1 className="z-50 text-7xl uppercase text-white font-bold">
            Meda is coming!
          </h1>
          <p className="text-gray-300 font-medium z-50">Ethiopia's most trusted betting tips app is almost here! Are you ready for this?</p>
          <div className="flex items-center space-x-3">
            <GrFacebookOption
              onClick={() => window.open("https://www.facebook.com/medascore/")}
              size={30}
              className="z-50 text-white cursor-pointer"
            />
            <AiFillInstagram
              onClick={() =>
                window.open("https://www.instagram.com/medascore/")
              }
              size={30}
              className="z-50 text-white cursor-pointer"
            />
            <IoLogoTwitter
              onClick={() => window.open("https://twitter.com/MedaScore")}
              size={30}
              className="z-50 text-white cursor-pointer"
            />
            <FaTiktok 
                   onClick={() => window.open("https://www.tiktok.com/@medascore")}
                   size={30}
                   className="z-50 text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
