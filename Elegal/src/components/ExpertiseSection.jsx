import React from 'react'

function ExpertiseSection() {
const categories = [
"Civil Law",
"Criminal Law",
"Family Law",
"Corporate Law",
"Property Law",
"Cyber Crime",
"Taxation",
"Labor Law",
];
  return (
    <div>
      <section className='max-w-6xl mx-auto px-6 py-16 text-center'>
        <h2 className="text-4xl font-semibold text-gray-800">
           Expertise You Need
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Browse lawyers by their specialized practice areas to ensure you get the best representation.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
       {categories.map((item, index) => (
       <div
         key={index}
        className="w-64 bg-white border hover:bg-[#1E2A44] hover:text-white rounded-xl shadow-sm hover:shadow-md transition p-8 flex items-center justify-center"
>
        <h3 className="text-lg font-medium hover:text-white ">
        {item}
         </h3>
        </div>
       ))}
</div>
      </section>
    </div>
  )
}

export default ExpertiseSection
