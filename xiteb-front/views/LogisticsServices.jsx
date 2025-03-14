import React from "react";

const services = [
  {
    id: 1,
    title: "Air Freight Services",
    description: "At our Air Service garage, we fully appreciate how difficult it is for people to find.",
    image: "https://source.unsplash.com/400x300/?cargo,shipping",
  },
  {
    id: 2,
    name: "Drone Services",
    description: "These are unique and often differ from one industry to the other. Our logistics expertise.",
    image: "https://source.unsplash.com/400x300/?airplane",
  },
];

export default function LogisticsServices() {
  return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <h2 className="text-3xl font-bold text-gray-900 text-center sm:text-4xl">
          <span className="text-green-600">Real Solution, Real Fast!</span><br />
          Best Global Logistics Solutions.
        </h2>

      
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="relative bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img src={service.image} alt={service.name} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <button className="mt-4 text-green-600 font-semibold flex items-center">
                  <span>Read More</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
        ))}
      </div>
     
      <div className="text-center mt-10 text-gray-600 text-lg">
        Logistic & Transport Solutions Saves Your Time.{" "}
        <span className="font-bold text-black">Finds Your Solutions</span>
      </div>
    </div>
  );
}
