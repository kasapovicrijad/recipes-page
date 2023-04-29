import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <div class="w-[60rem] h-[60rem] bg-blue-900 rounded-full float-right my-0 py-0 overflow-hidden mr-[-15rem] mt-[-30rem] "></div>
      </div>
      <div>
        <h1 className="text-8xl font-bold text-white border-white border-[2px] w-[30rem] ml-[10rem] mt-[15rem] text-center">
          CHEFS ACADEMY SECRETS
        </h1>
        <p className="text-2xl text-white border-white border-[2px] w-[30rem] ml-[10rem] px-[1rem] mt-[5rem] text-left">
          "Whip Up Culinary Magic: Unleash Your Inner Chef with Our Deliciously
          Easy Recipes!"
        </p>
      </div>

      <div>
        <div class="w-[60rem] h-[60rem] bg-blue-900 rounded-full float-left my-0 py-0 overflow-hidden ml-[-15rem] mt-[5rem] "></div>
      </div>
      <div className="border-[2px] flex flex-col justify-center float-right mr-[9rem] mt-[12.5rem]">
        <h1 className="text-8xl font-bold text-white border-white border-[2px] w-[30rem] text-center">
          TRY OUR RECIPES
        </h1>
        <p className="text-2xl text-white border-white border-[2px] w-[30rem] px-[1rem] mt-[5rem] text-left">
          Speedy weeknight dinners, 5-ingredient dishes, quick and easy meals,
          plus kid- pleasing snacks and desserts.
        </p>
        <Link to="/recipeform" className="text-white font-semibold text-xl mx-auto my-[2rem] border-[2px] bg-amber-800 w-[15rem] p-[1rem] border-none rounded-2xl text-center">RECIPES ➡</Link>
      </div>
    </div>
  );
};

export default Home;
