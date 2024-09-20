
import { Listinghomes } from './Listinghomes';
import { useState } from 'react';

import React from 'react'

export default function Avahomes() {
  const [query, setQuery] = useState('');

  return (
    <div>     
   <input
    type="text"
    placeholder='Search Location or Type of Home . . .'
    className='
    rounded-full 
     px-5 placeholder:p-2 mx-8 w-[20rem] md:placeholder:px-1
     border-2 h-10 md:flex md:mx-[22rem] md:w-[40rem] 
     '
    value={query}
    onInput= {(e) => setQuery(e.target.value)}
      
      />

      {Listinghomes.filter((home) => {
      return query.toLowerCase() === ""
      ? home : home.location.toLowerCase().includes(query);
      }).map(home => ( 
            
      <div key={home.id}>
          <div className="homes md:grid md:grid-cols-4 md:gap-4 px-3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white  mt-8">
                <img className="w-full" src={home.image} alt="Sunset in the mountains"/>
                <div className="px-2 py-3">
                    <div className="font-extrabold text-xl font-mono ">{home.location}</div>
                    <p className="text-gray-700 text-base">
                        {home.description}
                    </p>
                </div>
                <div class="px-2  pb-2">
                    <span className="inline-block bg-blue-200 rounded-lg px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"># {home.security}</span>
                    <span className="inline-block bg-green-200 rounded-lg px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">#{home.light}</span>
                    <span className="inline-block bg-yellow-200 rounded-lg px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2">#{home.road}</span>
                </div>
          

            <div className="ctab flex mx-6 mb-4">
            <button className=' '>
              <a href="/" className='border-2 text-black py-2 px-8 rounded-md'>
              Intrested
              </a>
            </button>

            <button className=' mx-4 '>
              <a href="/" className='bg-black text-white py-2 px-8 rounded-md'>
              Intrested
              </a>
            </button>


            </div>

            </div>  
          </div>



      </div>
      ))}
    </div>

   
  )
}
