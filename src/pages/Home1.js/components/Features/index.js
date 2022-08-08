import React from "react";
import Feature from "./Feature";

export default function Features() {
  return (
    <div>
      <div className="heading text-center w-5/12 m-auto ">
        <h2 className="text-3xl font-bold my-4">
          A robust set of <span className="text-themeBlue">features</span>
        </h2>
        <p className="text-themegray text-lg">
          Lorem ipsum dolor sit amet consectetur adipiscing elit domil venenatis
          cursus ultrices arcu pellentesque.
        </p>
      </div>
      <div className="featureContainer flex  justify-between  flex-wrap m-6 sm:mx-20">
        <Feature
          style={{ textColor: "text-themeOrange" }}
          title={"Realtime analytics"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit domil venenatis "
          }
        />
        <Feature
          style={{ textColor: "text-themeOrange" }}
          title={"User journey"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit domil venenatis "
          }
        />
        <Feature
          style={{ textColor: "text-themeGreen" }}
          title={"Automated reports"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit domil venenatis "
          }
        />
        <Feature
          style={{ textColor: "text-themePurple" }}
          title={"Realtime analytics"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit domil venenatis "
          }
        />
        <Feature
          style={{ textColor: "text-themeGreen" }}
          title={"Realtime analytics"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit domil venenatis "
          }
        />
        <Feature
          style={{ textColor: "text-themePurple" }}
          title={"Realtime analytics"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit domil venenatis "
          }
        />

      </div>        <p className="text-themeBlue text-center">View All Features <i className="text-themeBlue fa-solid fa-arrow-right"></i></p>
    </div>
  );
}
