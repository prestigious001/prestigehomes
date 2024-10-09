import React, { useState, useEffect } from 'react';

const AutomaticPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl mb-4">GOOD NEWS</h2>
            <p>GET A GIFT IF YOU BUY OR RENT A HOUSE OR LAND THROUGH US!</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AutomaticPopup;
