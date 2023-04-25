import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-[2px] fixed top-0 w-[100%]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a className="flex items-center">
            <span className="self-center text-2xl font-semibold pl-[3rem]">
              Homechef
            </span>
          </a>

          <div className="block w-auto">
            <ul className="font-medium flex flex-row p-4 pr-[3rem] flex-row space-x-5">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-black rounded">
                  RECIPES
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-black rounded">
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black rounded "
                >
                  ADD A RECIPE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
