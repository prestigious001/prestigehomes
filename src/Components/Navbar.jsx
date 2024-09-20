import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo.png';




export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>

            <nav className="bg-black md:bg-gray-100 p-4">
                <div className="flex items-center justify-between">
                    <div className="text-white text-xl font-bold">
                       <img src={logo} class="h-12" alt="logo" />
                    </div>
                    
                    {/* Hamburger Icon */}
                    <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                        </svg>
                    </button>
                    </div>

                    {/* Desktop Menu */}
                    <ul class="hidden lg:flex space-x-4">
                    
                    <NavLink to="/">
                        <li class="text-black font-mono font-semibold tracking-wider hover:text-gray-500">HOME</li>
                    </NavLink>
                    
                    <NavLink to="/about">
                        <li class="text-black font-mono font-semibold tracking-wider hover:text-gray-500">ABOUT</li>
                    </NavLink>
                    <a href="#" class="text-black font-mono font-semibold tracking-wider hover:text-gray-500">SERVICES</a>
                    <a href="#" class="text-black font-mono font-semibold tracking-wider hover:text-gray-500">CONTACT</a>
                    </ul>



                    <div class="hidden lg:flex space-x-4">
                            <a href="/" class="font-mono px-4 py-2 border-gray-400 border-2 rounded-md hover:bg-gray-200">
                                <button class="">CHAT NOW</button>
                            </a>
                            <a href="/" class=" bg-black px-4 py-2 text-white rounded-md hover:bg-gray-200 hover:text-black">
                                <button class="">INSPECT NOW</button>
                            </a>
                    </div>

                    </div>
            



                {/* Mobile Menu */}
                <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4 mb-4`}>
                    <ul class=" flex flex-col ">
                        
                        <NavLink to="/about">
                            <li class="text-white font-mono font-semibold tracking-wider hover:text-gray-500">ABOUT</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li class="text-white font-mono font-semibold tracking-wider hover:text-gray-500">ABOUT</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li class="text-white font-mono font-semibold tracking-wider hover:text-gray-500">ABOUT</li>
                        </NavLink>
                       
                    </ul>

                </div>
            </nav>


            <div class="flex justify-center mt-4 mb-4 lg:hidden space-x-4">
                            <a href="/" class="font-mono px-4 py-1 border-gray-400 border-2 rounded-md hover:bg-gray-200">
                                <button class="">CALL NOW</button>
                            </a>
                            <a href="/" class=" bg-black px-4 py-1 text-white rounded-md hover:bg-gray-200 hover:text-black">
                                <button class="">INSPECT NOW</button>
                            </a>
                    </div>

    <hr/>
    </>
  )
}
