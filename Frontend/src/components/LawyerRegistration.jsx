import React from "react";
import { useState } from "react";
import API from "../api";

const LawyerRegistration = () => {
  const [form, setForm] = useState({
    fullname: "",
    location: "",
    email: "",
    phone: "",
    barnumber: "",
    expyears: "",
    practiceAreas: [],
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (area) => {
    setForm((prev) => {
      const already = prev.practiceAreas.includes(area);
      return {
        ...prev,
        practiceAreas: already
          ? prev.practiceAreas.filter((a) => a !== area)
          : [...prev.practiceAreas, area],
      };
    });
  };

  const handleSubmit = async () => {
    const res = await API.post("/lawyerregistration", form);
    const con = res.data;
    console.log(con);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        <div className="bg-[#1F2E4A] text-white px-8 py-8">
          <h1 className="text-3xl font-semibold">Lawyer Registration</h1>
          <p className="mt-2 text-gray-200">
            Join Patna's most trusted legal network.
          </p>
        </div>

        <div className="px-8 py-8">

          <h2 className="text-lg font-semibold border-b pb-2 mb-6">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                placeholder="Adv. Nutan Sahay"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Office Location
              </label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g Near Janta Darbar"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="mimansa@gmail.com"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <h2 className="text-lg font-semibold border-b pb-2 mt-10 mb-6">
            Professional Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bar Council License No.
              </label>
              <input
                type="text"
                name="barnumber"
                value={form.barnumber}
                onChange={handleChange}
                placeholder="BR/XXXX/YYYY"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Years of Experience
              </label>
              <input
                type="number"
                name="expyears"
                value={form.expyears}
                onChange={handleChange}
                placeholder="5"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Practice Areas
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Civil Law",
                "Criminal Law",
                "Family Law",
                "Corporate Law",
                "Property Law",
                "Cyber Crime",
                "Taxation",
                "Labor Law",
              ].map((area, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="accent-blue-600"
                    checked={form.practiceAreas.includes(area)}
                    onChange={() => handleCheckbox(area)}
                  />
                  <span className="text-sm">{area}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Professional Bio
            </label>
            <textarea
              rows="4"
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Tell potential clients about your expertise and background..."
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="mt-8">
            <button
              onClick={handleSubmit}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition duration-200"
            >
              Submit Application
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LawyerRegistration;