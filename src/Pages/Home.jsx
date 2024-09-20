import React from 'react'
import ImageCarousel from '../Components/Carousel'
import Avahomes from '../Components/Avahomes'

export default function Home() {
  return (
    <div>
        <ImageCarousel />
        <div class="mt-6 flex justify-center  space-x-4">
            <a href="/" class="font-mono font-semibold px-4 md:px-36 py-2 border-gray-400 border-2 rounded-md hover:bg-gray-200">
                <button class="">CHAT NOW</button>
            </a>
            <a href="/" class=" bg-black font-semibold px-4 md:px-36 py-2 text-white rounded-md hover:bg-gray-200 hover:text-black">
                <button class="">INSPECT NOW</button>
            </a>
          </div>

          <div className="home-tag mt-8 md:mt-16">
          <h1 class="text-center font-mono ">AVAILABLE PROPERTIES</h1>
        <h1 class="text-center font-mono font-semibold md:text-3xl mb-6 "> | HOMES | LOCATION | SPECS |</h1>

          </div>

      <Avahomes />
    </div>
  )
}
