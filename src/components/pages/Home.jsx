import React, { useState } from "react";

const Home = () => {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="bg-indigo-100 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Find Your Perfect <span className="text-indigo-600">FYP Supervisor</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with experienced supervisors who can guide you through your Final Year Project journey.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="sm:flex justify-center">
            <div className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
              <button className="w-full px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105">
                Browse Supervisors
              </button>
            </div>
            <div className="w-full sm:w-auto">
              <button
                onClick={() => setShowHowItWorks(!showHowItWorks)}
                className="w-full px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transition duration-300"
              >
                How It Works
              </button>
            </div>
          </div>
        </div>

        {showHowItWorks && (
          <div className="mt-10 bg-white rounded-lg shadow-lg p-6 text-left text-gray-700 max-w-3xl mx-auto transition duration-500 ease-in-out transform animate-fade-in">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">How It Works</h2>
            <p className="mb-3">
              1. <strong>Explore Profiles:</strong> View supervisor profiles based on your area of interest.
            </p>
            <p className="mb-3">
              2. <strong>Send Request:</strong> Reach out to supervisors whose research aligns with your project idea.
            </p>
            <p className="mb-3">
              3. <strong>Get Matched:</strong> Once accepted, start collaborating on your FYP with their support.
            </p>
            <p>
              Our platform ensures that you connect with the most relevant and experienced supervisors to enhance your academic journey.
            </p>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Step 1 */}
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg h-full transform transition hover:-translate-y-2">
              <div className="-mt-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  1
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Explore Profiles</h3>
                <p className="mt-2 text-base text-gray-500">
                  Browse through detailed supervisor profiles with research interests and availability.
                </p>
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg h-full transform transition hover:-translate-y-2">
              <div className="-mt-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  2
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Connect</h3>
                <p className="mt-2 text-base text-gray-500">
                  Send requests to supervisors whose expertise matches your project idea.
                </p>
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg h-full transform transition hover:-translate-y-2">
              <div className="-mt-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  3
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Start Your Project</h3>
                <p className="mt-2 text-base text-gray-500">
                  Begin your FYP journey with the right guidance and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
