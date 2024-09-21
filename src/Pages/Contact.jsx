import React from 'react'
import Footer from '../Components/Footer'

export default function Contact() {
  return (
    <div className="bg-gray-50 py-10 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with us for any inquiries, questions, or to schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h2>
            <form action="/contact">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-500"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              Have any questions? Feel free to reach out to us via the following channels:
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-700">Office Address:</h3>
              <p className="text-gray-600">No 23, Suite 456, Jos City,Plateau State</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-700">Phone Number:</h3>
              <p className="text-gray-600">+1 (234) 567-8901</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-700">Email:</h3>
              <p className="text-gray-600"> prestigeproperty@gmail.com</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-700">Working Hours:</h3>
              <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sun:  Closed</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
