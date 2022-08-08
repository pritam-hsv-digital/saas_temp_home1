import saasTemp from "../../../assets/SaasTemp.png";

export default function Nav() {
  return (
    <nav className="nav flex justify-between py-6  px-2  sm:px-20 ">
      <img src={saasTemp} alt=""  className=""/>
      <ul className="flex  w-4/12 justify-between items-center text-base cursor-pointer">
        <li>Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <button className='bg-themeBlue py-3 px-12 rounded-lg text-white' >Get Started</button>
    </nav>
  );
}
