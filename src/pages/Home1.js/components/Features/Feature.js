import React from 'react'

export default function Feature({style,title,subtitle}) {
  return (
    <div className=' sm:w-4/12 px-20  py-4 text-center'>
        <i className={`block text-lg m-auto ${style.textColor} p-1.5 my-2 mr-4  rounded-lg fa-brands fa-unity`}></i>
        <h3>{title}</h3>
        <p>{subtitle}</p>
    </div>
  )
}
