import React, { useState } from "react";

function ScheduleCall() {
  const [selected, setSelected] = useState("schedule");

  const options = [
    {
      id: "now",
      title: "Consult Now",
      desc: "For instant assistance with an immediate call",
    },
    {
      id: "schedule",
      title: "Schedule Call",
      desc: "Choose a convenient time for your consultation.",
    },
  ];

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">


      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center p-8 space-y-4">

        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={`border rounded-lg p-4 cursor-pointer transition 
              ${
                selected === option.id
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300"
              }`}
          >
            <div className="flex items-start space-x-3">
              
           
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center
                  ${
                    selected === option.id
                      ? "border-blue-600"
                      : "border-gray-400"
                  }`}
              >
                {selected === option.id && (
                  <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
                )}
              </div>

              <div>
                <h3 className="font-semibold">{option.title}</h3>
                <p className="text-sm text-gray-500">{option.desc}</p>
              </div>
            </div>
          </div>
        ))}


        <button className="mt-6 bg-blue-900 text-white py-3 rounded-lg">
          Next →
        </button>

      </div>
    </div>
  );
}

export default ScheduleCall;