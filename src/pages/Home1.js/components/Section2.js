import React from "react";
import section2Img from "../../../assets/section2.png";

export default function Section2() {
  return ( <div className="flex p-2 sm:p-20 sm:m-6 m-2">
    <div className="section2 grid  items-center sm:grid-cols-2 justify-between ">
      <div className="section2_ImgContainer w-10/12">
        <img src={section2Img} className='w-full' alt="section 2" />
      </div>
      <div className="section2_textContainer">
        <h1 className="text-5xl font-bold my-8">
          <span className="text-themeBlue">Custom made </span> reports to make
          great decisions
        </h1>

        <p className=" my-4 text-themegray text-2xl">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipiscing elit domil venenatis
          cursus ultrices arcu pellentesque.{" "}
        </p>

        <p className="">
          <i className="text-themeOrange  p-1.5 my-2 mr-4 rounded-lg fa-brands fa-unity"></i>
          One-click tracking code install
        </p>

        <p className="">
          <i className="text-themeGreen p-1.5 my-2 mr-4  rounded-lg fa-brands fa-unity"></i>
          Desktop and mobile tracking built-in
        </p>

        <p className="">
          <i className="text-themePurple p-1.5 my-2 mr-4 rounded-lg fa-brands fa-unity"></i>
          Hassle-free user monitoring{" "}
        </p>
      </div>
    </div>
    </div>
  );
}
