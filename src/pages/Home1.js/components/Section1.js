import React from 'react'
import Group4706 from '../../../assets/Group 4706.png' 

export default function Section() {
  return (
    
  <section className="feature1  grid  items-center sm:grid-cols-2  p-8 sm:px-20  m-2 sm:m-8">

  <div className="headerText w-12/12">
    <h1 className="text-5xl font-bold my-8">
       <span>We make it </span>     
      <span className="text-themeBlue">
              easy to track
      </span> all user analytics
    </h1>
    
    <p className=" my-4 text-themegray text-lg"> Lorem ipsum dolor sit amet consectetur adipiscing elit domil venenatis cursus ultrices arcu pellentesque. </p>
    
   <p className=''>
     <i className="bg-themeBlue text-white  p-1.5 my-2 mt-4 mr-2 rounded-lg fa-solid fa-check"></i>
     One-click tracking code install
   </p>     
   
   <p className=''>
     <i className="bg-themeBlue text-white p-1.5 my-2 mr-2  rounded-lg fa-solid fa-check"></i>Desktop and mobile tracking built-in
   </p>    
        
   <p className=''>
      <i className="bg-themeBlue text-white p-1.5 my-2 mb-4 mr-2 rounded-lg fa-solid fa-check"></i>
Hassle-free user monitoring               </p>


    <button className="text-lg text-white bg-themeBlue hover:bg-blue-600 rounded-lg py-3 px-12 my-4">Get Started</button>

    </div>
    <div className="headerImg ">
      <img className='w-full' src={Group4706} alt="Group4706" />

  </div>
  
  
  </section>
  )}