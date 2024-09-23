import React, { useState } from "react";
import Listinghomes from "./Listinghomes";
import { FaDoorOpen, FaKey, FaLightbulb, FaRoad } from "react-icons/fa";
import { FaBoreHole} from "react-icons/fa6";

const Newhomes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 8; // Define how many items you want per page

  // Function to handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to the first page on new search
  };

  // Filtered data based on the search term
  const filteredData = Listinghomes.filter((home) =>
    home.location.toLowerCase().includes(searchTerm)
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Function to handle page change
  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search input */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search for Home Type or Location or Price. . ."
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 w-[30rem] border border-gray-300 rounded-lg shadow-lg md:w-1/2"
        />
      </div>

      <div className="homes px-3 md:grid grid-cols-4 gap-4">
        {paginatedData.length > 0 ? (
          paginatedData.map((home) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white  mt-8"
              key={home.id}
            >
              <img
                className="w-full"
                src={home.image}
                alt="Sunset in the mountains"
              />
              <div className="px-2 py-3">
                <div className="font-bold text-xl">{home.location}</div>
                <p className="text-gray-500 text-base">{home.description}</p>
              </div>
              <div class="px-2  pb-2 flex flex-wrap gap-2">
                <span
                  className="flex justify-evenly text-gray-500 bg-slate-100
                    p-2 mb-1 rounded-md"
                >
                  <FaKey className="mt-1 mr-1" />
                  <span
                    className="
                            text-md 
                          font-semibold"
                  >
                    {home.security}
                  </span>
                </span>

                
                <span
                  className="flex justify-evenly text-gray-500 bg-slate-100
                     mb-1 p-2 rounded-md"
                >
                  <FaBoreHole className="mt-1 mr-1" />
                  <span
                    className="
                            text-md 
                          font-semibold"
                  >
                    {home.water}
                  </span>
                </span>

                <span
                  className="flex justify-evenly text-gray-500 bg-slate-100
                     mb-1 p-2  rounded-md"
                >
                  <FaLightbulb className="mt-1 mr-1" />
                  <span
                    className="
                            text-md 
                          font-semibold"
                  >
                    {home.light}
                  </span>
                </span>

                <span
                  className="flex justify-evenly text-gray-500 bg-slate-100
                    p-2 mb-1  rounded-md"
                >
                  <FaRoad className="mt-1 mr-1" />
                  <span
                    className="
                            text-md 
                          font-semibold"
                  >
                    {home.road}
                  </span>
                </span>

                <span
                  className="flex justify-evenly text-gray-500 bg-slate-100
                    p-2 mb-1  rounded-md"
                >
                  <FaDoorOpen className="mt-1 mr-1" />
                  <span
                    className="
                            text-md 
                          font-semibold"
                  >
                    {home.compound}
                  </span>
                </span>

              </div>
              <div
                className="
                flex justify-evenly mb-5
                md:block md:space-y-6 md:mt-3 md:ml-4
                lg:mb-4 lg:
                
                "
              >
                <button className="lg:mt-2 ">
                  <a
                    href="/"
                    className="border-2 text-black py-2 px-6 rounded-md lg:mt-8 hover:bg-gray-100 lg:mr-4"
                  >
                    Know more
                  </a>
                </button>

                <button className=" ">
                  <a
                    href="/"
                    className="bg-black text-white py-2 px-6 rounded-md hover:text-black hover:bg-gray-100"
                  >
                    Intrested
                  </a>
                </button>
              </div>
              <p className="bg-red-500 text-white font-bold tracking-wide text-lg text-center  ">{home.state}</p>

            </div>
          ))
        ) : (
          <p className="flex flex-col justify-center md:flex md:justify-end">
            <span className="font-mono font-semibold">
              Sorry you could not find your prefered Home chat us now to get
              your prefered Home
            </span>
            <button className=" mt-4">
              <a
                href="/"
                className="
                    
                    bg-black text-white py-2 px-12
                    rounded-md hover:text-black
                     hover:bg-gray-200"
              >
                Chat Now
              </a>
            </button>
          </p> // Show 'None' when no results are found
        )}
      </div>

      {/* Pagination Controls */}
      {filteredData.length > itemsPerPage && (
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className={`px-2 py-1 rounded-lg ${
              currentPage === 1
                ? "bg-gray-300"
                : "bg-black text-white hover:bg-black"
            } transition-colors`}
          >
            PREV
          </button>

          <span className="text-gray-700">
            <strong className="font-mono">Page</strong> {currentPage} of{" "}
            {totalPages}
          </span>

          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
            className={`px-2 py-1 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-300"
                : "bg-black text-white hover:bg-black"
            } transition-colors`}
          >
            NEXT
          </button>
        </div>
      )}
    </div>
  );
};

export default Newhomes;
