import React from "react";

function WhyUs() {
  return (
    <section className="bg-[#1f3352] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        
        <h2 className="text-4xl font-semibold text-center mb-16">
          <span className="text-white  px-4 py-1 rounded">
            Why Choose Legalio?
          </span>
        </h2>

        <div className="grid md:grid-cols-3 text-center gap-12 sm:grid-cols-1 ">

     
          <div className="border-r border-gray-500 md:pr-8">
            <h3 className="text-yellow-400 text-3xl font-bold">100%</h3>
            <p className="text-xl mt-4 font-medium">Verified Lawyers</p>
            <p className="text-gray-300 mt-2 text-sm">
              Every lawyer's license is verified with the Bar Council.
            </p>
          </div>


          <div className="border-r border-gray-500 md:px-8">
            <h3 className="text-yellow-400 text-3xl font-bold">500+</h3>
            <p className="text-xl mt-4 font-medium">Cases Solved</p>
            <p className="text-gray-300 mt-2 text-sm">
              Helping Patna citizens find justice daily.
            </p>
          </div>

     
          <div className="md:pl-8">
            <h3 className="text-yellow-400 text-3xl font-bold">24/7</h3>
            <p className="text-xl mt-4 font-medium">Support</p>
            <p className="text-gray-300 mt-2 text-sm">
              We are here to help you connect with the right expert.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;
