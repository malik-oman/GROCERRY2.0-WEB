import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto p-8">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Send Us a Message
          </h2>

          <div className="mb-5">
            <label className="block mb-1 font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-1 font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-1 font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300 outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-secondary text-white py-3 text-lg rounded-lg hover:bg-green-600 transition shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-xl border border-green-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Get in Touch
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed">
            If you have any questions about our organic products, deliveries, or services,
            feel free to reach out. Our support team will respond as soon as possible.
          </p>

          <ul className="space-y-6 text-gray-800">
            <li className="flex items-center gap-3">
              <MapPin size={22} className="text-green-700" />
              <p>
                <strong>Address:</strong> BCG Chowk, Multan — Jutt Sialkot
              </p>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={22} className="text-green-700" />
              <p>
                <strong>Phone:</strong> +92 311 7343706
              </p>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={22} className="text-green-700" />
              <p>
                <strong>Email:</strong> malikoman@gmail.com
              </p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Contact;
