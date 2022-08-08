import React from 'react'

import Group4706 from '../../../assets/Group 4706.png' 

export default function Header() {
  return (
<header className="header grid sm:grid-cols-2  p-4 sm:px-20 items-center">

<div className="headerText pr-8">
  <h1 className="text-5xl font-bold my-8"> <span className="text-themeBlue">Email</span> marketing for fast-growing startups.</h1>
  <p className="text-2xl my-4 text-themegray">It's simple. We help you send the right messages, on the right channels, at the right time.</p>
  <button className="text-lg text-white bg-themeBlue rounded-lg py-3 px-12 my-4">Start your Free Trial</button>
</div>

<div className="headerImg pl-8">
  <img src={Group4706} alt="group 4706" />
</div>

</header>
  )
}
