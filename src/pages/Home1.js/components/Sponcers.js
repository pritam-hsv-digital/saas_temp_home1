import React from "react";
import sponcerImg from "../../../assets/Logos.png";

export default function Sponcers() {
  return (
   
      <div className="sponcerContainer p-12  m-8">
        <p className="text-2xl text-center font-bold">Over 200+ teams worldwide rely on us.</p>
        <img src={sponcerImg} className="w-full p-4 sm:px-32" alt="sponcers" />
      </div>
    
  );
}
