import React from 'react'
import Footer from '../Components/Footer'

export default function Serivices() {
  return (
    <div className="bg-gray-50 py-10 font-mono">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 ">Our Services</h1>
        <p className="text-lg text-gray-600">
          Explore the range of real estate services we offer to meet your every need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Buying a Home</h2>
          <p className="text-gray-600 leading-relaxed">
            Find your dream home with our expert team guiding you every step of the way. From searching listings to closing the deal, we’ve got you covered.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Selling a Property</h2>
          <p className="text-gray-600 leading-relaxed">
            We help you sell your property quickly and efficiently, ensuring you get the best market value. Our marketing expertise ensures maximum visibility.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Renting a Home</h2>
          <p className="text-gray-600 leading-relaxed">
            Whether you’re looking for a rental or leasing out your property, we offer a range of rental services tailored to your needs.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Land Acquisitions</h2>
          <p className="text-gray-600 leading-relaxed">
            From small plots to large estates, we assist in acquiring land for both personal and commercial purposes, ensuring smooth transactions.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Management</h2>
          <p className="text-gray-600 leading-relaxed">
            We provide end-to-end property management services, taking care of maintenance, tenant relations, and everything in between.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Investment Consulting</h2>
          <p className="text-gray-600 leading-relaxed">
            Our real estate experts help you make informed investment decisions, whether you’re looking for short-term returns or long-term growth.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-4">
          Get in touch with us today and let’s turn your real estate dreams into reality.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white font-semibold py-2 px-6 rounded hover:bg-gray-600 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
    <Footer/>
  </div>

  )
}
