import React from "react";
import ImageCarousel from "../Components/Carousel";
import Avahomes from "../Components/Avahomes";
import Avalands from "../Components/Avalands";
import Footer from "../Components/Footer";
// import Newhomes from "../Components/Newhomes";

export default function Home() {
  return (
    <div>
      <ImageCarousel />

      {/* <Newhomes /> */}

      <div class="mt-6 flex justify-center space-x-4  md:space-x-12">
        <a
          href="/"
          class=" font-semibold px-4 md:px-36 py-2 border-gray-400 border-2 rounded-md hover:bg-gray-200"
        >
          <button class="">CHAT NOW</button>
        </a>
        <a
          href="/"
          class=" bg-black font-semibold px-4 md:px-36 py-2 text-white rounded-md hover:bg-gray-200 hover:text-black"
        >
          <button class="">INSPECT NOW</button>
        </a>
      </div>

      <div className="home-tag mt-8 md:mt-16">
        <h1 class="text-center  ">AVAILABLE PROPERTIES</h1>
        <h1 class="text-center font-mono font-bold md:text-3xl mb-6 ">
          {" "}
          | HOMES | LOCATION | SPECS |
        </h1>
      </div>

      <Avahomes />

      <div className="home-tag mt-8 md:mt-16">
        <h1 class="text-center font-mono ">AVAILABLE PROPERTIES</h1>
        <h1 class="text-center  font-bold md:text-3xl mb-6 ">
          {" "}
          | LANDS | LOCATION | SPECS |
        </h1>
      </div>

      <Avalands />

      <div className="home-tag mt-8 md:mt-16">
        <h1 class="text-center font-mono ">ENQUIRES</h1>
        <h1 class="text-center  font-bold md:text-3xl mb-4">
          HOW IT WORKS?
        </h1>
        <div className=" md:max-w-4xl text-center flex justify-center rounded overflow-hidden shadow-lg bg-white md:mx-60">
          <div className="px-2 py-3 ">
            {/* <div className="font-extrabold text-xl font-mono ">ok</div> */}
            <p className="text-gray-700 text-base font-semibold ">
              The real estate website helps you to browse homes, apartments, and
              land available for sale or rent. Each property features detailed
              information, photos , and contact options for easy inquiries. The
              platform is designed to make finding a new home or investment
              property simple and convenient and simply contacting us and we responed.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-6 flex justify-center space-x-4  md:space-x-12">
        <a
          href="/"
          class="font-mono font-semibold px-4 md:px-36 py-2 border-gray-400 border-2 rounded-md hover:bg-gray-200"
        >
          <button class="">CHAT NOW</button>
        </a>
        <a
          href="/"
          class=" bg-black font-semibold px-4 md:px-36 py-2 text-white rounded-md hover:bg-gray-200 hover:text-black"
        >
          <button class="">INSPECT NOW</button>
        </a>
      </div>

      <Footer/>
    </div>
  );
}
