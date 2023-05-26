import { useState } from "react";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  const handleDrop = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className="w-full  p-6 flex flex-row font-medium justify-between text-[15px] md:text-2xl items-center border-b border-b-gray-300 relative">
      <div className="flex space-x-4 items-center">
        <h1 className="md:text-xl">EkomTon</h1>
        <div className="flex items-center md:hidden " onClick={handleDrop}>
          Menu
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 ml-1">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </span>
        </div>
        <div>
          <ul className="hidden md:flex items-center space-x-5 text-[18px] ml-5">
            <li>
              <a href="#link">Live</a>
            </li>
            <li>
              <a href="#link">Push</a>
            </li>
            <li>
              <a href="#link">Note</a>
            </li>
            <li>
              <a href="#link">Link</a>
            </li>
            <li>
              <a href="#link">Shop</a>
            </li>
            <li>
              <a href="#link">Packs</a>
            </li>
            <li>
              <a href="#link">Help</a>
            </li>
            <li>
              <a href="#link" className="text-brickorange">
                More +
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block space-x-5">
        <a href="#" className="text-deepblue text-[19px]">
          Try Live for free
        </a>
        <a href="#" className="text-[16px]">
          Log in or register
        </a>
      </div>
      {dropDown && (
        <div
          className={`fixed text-white  font-bold inset-0 bg-deep-blue z-50 p-5 slide-animation`}>
          <div className="flex space-x-5  duration-500">
            <h1 className="md:text-xl">EkomTon</h1>
            <div className="flex items-center md:hidden " onClick={handleDrop}>
              Menu
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 ml-1">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </span>
            </div>
          </div>
          <ul className="space-y-6 mt-8 text-[14px]">
            <li>
              <a href="#link">Live</a>
            </li>
            <li>
              <a href="#link">Push</a>
            </li>
            <li>
              <a href="#link">Note</a>
            </li>
            <li>
              <a href="#link">Link</a>
            </li>
            <li>
              <a href="#link">Shop</a>
            </li>
            <li>
              <a href="#link">Packs</a>
            </li>
            <li>
              <a href="#link">Help</a>
            </li>
            <li>
              <a href="#">Try Live for free</a>
            </li>
            <li>
              <a href="#">Login or register</a>
            </li>
          </ul>
          <div className="mt-9">More on EkomTon:</div>

          <div className="mt-4 space-y-4 flex flex-col">
            <a href="#" className="">
              Blog
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
