import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-[2px] fixed top-0 w-[100%]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link className="flex items-center">
            <Link to="/home" className="self-center text-2xl font-semibold pl-[3rem]">
              Homechef
            </Link>
          </Link>

          <div className="block w-auto">
            <ul className="font-medium flex flex-row p-4 pr-[3rem] flex-row space-x-5">
              <li>
                <Link to="/recipes" className="block py-2 pl-3 pr-4 text-black rounded">
                  RECIPES
                </Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 pl-3 pr-4 text-black rounded">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/recipeform"
                  className="block py-2 pl-3 pr-4 text-black rounded "
                >
                  ADD A RECIPE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
