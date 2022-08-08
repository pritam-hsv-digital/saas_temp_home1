import React from "react";

export default function Integration() {
  return (
    <div className="my-4">
      <div className="heading text-center w-5/12 m-auto my-20">
        <h2 className="text-3xl font-bold my-4">
          Intregrated with more than
          <span className="text-themeBlue"> 100+ applications </span> you love
        </h2>
        <p className="text-themegray text-lg">
          Lorem ipsum dolor sit amet consectetur adipiscing elit domil venenatis
          cursus ultrices arcu pellentesque.
        </p>
      </div>
      <div className="socialIcons grid justify-between grid-flow-col m-4 sm:mx-60 my-8">
        
        <div className="icon bg-themeLightGray">
          <i class="fa-brands fa-linkedin text-center block text-4xl "></i>
          <p className="py-4">Linkedin</p>
          
        </div>

         
        <div className="icon bg-themeLightGray">
          <i class="fa-brands fa-facebook text-center block text-4xl "></i>
          <p className="py-4">Linkedin</p>
          
        </div> 
        <div className="icon bg-themeLightGray">
          <i class="fa-brands fa-figma text-center block text-4xl "></i>
          <p className="py-4">Linkedin</p>
          
        </div> 
        <div className="icon bg-themeLightGray">
          <i class="fa-brands fa-youtube text-center block text-4xl "></i>
          <p className="py-4">Linkedin</p>
          
        </div> 
        <div className="icon bg-themeLightGray">
          <i class="fa-brands fa-twitter text-center block text-4xl "></i>
          <p className="py-4">Linkedin</p>
          
        </div>


      </div>

     <button className='bg-themeBlue py-3 my-20  px-12 rounded-lg text-white text-center m-auto block'>Brows Integration</button> 
    </div>
  );
}
