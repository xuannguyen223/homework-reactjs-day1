import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-gray-800">
        <div className="flex justify-between items-center text-white px-32 py-5 ">
          <div className="header_logo text-2xl font-semibold">
            Start Bootstrap
          </div>
          <nav>
            <ul className="flex text-lg">
              <li>Home</li>
              <li className="mx-5 text-gray-400 hover:text-white">About</li>
              <li className=" text-gray-400 hover:text-white">Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
