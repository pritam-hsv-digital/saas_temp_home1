import React from "react";
import linkedImg from "../../../assets/LinkedIN.png";
import facebookImg from "../../../assets/Facebook.png";
import figmaImg from "../../../assets/Figma.png";
import youtubeImg from "../../../assets/Youtube.png";
import twitterImg from "../../../assets/Twitter.png";

export default function Integration() {
  return (
    <div className="my-4">
      <div className="heading text-center w-6/12 m-auto my-20">
        <h2 className="text-4xl font-bold my-4">
          Intregrated with more than
          <span className="text-themeBlue"> 100+ applications </span> you love
        </h2>
        <p className="text-themegray text-2xl py-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit domil venenatis
          cursus ultrices arcu pellentesque.
        </p>
      </div>
      <div className="socialIcons grid justify-between grid-flow-col m-4  my-8 sm:mx-20">
        <div className="icon bg-themeLightGray shadow-2xl px-12 py-6 shadow-blue-rgba'  rounded-2xl">
          <img src={linkedImg} alt="" />
          <p className="pt-6">Linkedin</p>
        </div>

        <div className="icon bg-themeLightGray  shadow-2xl px-12 py-6 shadow-blue-rgba'  rounded-2xl">
          <img src={facebookImg} alt="" />
          <p className="pt-6">Facebook</p>
        </div>
        <div className="icon bg-themeLightGray shadow-2xl px-12 py-6 shadow-blue-rgba'  rounded-2xl">
          <img src={figmaImg} alt="" />
          <p className="pt-6">Figma</p>
        </div>

        <div className="icon bg-themeLightGray shadow-2xl px-12 py-6 shadow-blue-rgba'  rounded-2xl">
          <img src={youtubeImg} alt="" /> <p className="pt-6">Youtube</p>
        </div>
        <div className="icon bg-themeLightGray  shadow-2xl px-12 py-6 shadow-blue-rgba'  rounded-2xl ">
          <img src={twitterImg} alt="" /> <p className="pt-6">Twitter</p>
        </div>
      </div>

      <button className="bg-themeBlue hover:bg-blue-600 py-3 my-20  px-12 rounded-lg text-white text-center m-auto block">
        Brows Integration
      </button>
    </div>
  );
}
