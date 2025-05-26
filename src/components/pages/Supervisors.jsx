import React, { useState } from "react";

const supervisorList = [
  { name: "Mariya Bibi", expertise: "AI, Machine Learning" },
  { name: "Salman Irfan", expertise: "Web Development" },
  { name: "Dr. Maria Iqbal", expertise: "Data Science" },
  { name: "Asif Ali", expertise: "Cybersecurity" },
];

const Supervisors = () => {
  const [enrolled, setEnrolled] = useState([]);

  const handleEnroll = (name) => {
    if (!enrolled.includes(name)) {
      setEnrolled([...enrolled, name]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-800 mb-3">
            Available Supervisors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with experienced supervisors in various tech domains to guide your projects
          </p>
        </div>
        
        <ul className="space-y-5">
          {supervisorList.map((sup, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row justify-between items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-green-400"
            >
              <div className="mb-4 md:mb-0">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold">
                    {sup.name.charAt(0)}
                  </div>
                  <p className="text-xl font-semibold text-gray-800">{sup.name}</p>
                </div>
                <p className="text-sm text-gray-600 mt-2 ml-13">
                  <span className="font-medium text-green-700">Expertise:</span> {sup.expertise}
                </p>
              </div>
              <button
                onClick={() => handleEnroll(sup.name)}
                disabled={enrolled.includes(sup.name)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  enrolled.includes(sup.name)
                    ? "bg-green-800 text-white cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700 hover:shadow-md"
                }`}
              >
                {enrolled.includes(sup.name) ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Enrolled</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <span>Enroll Now</span>
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>

        {enrolled.length > 0 && (
          <div className="mt-10 bg-green-50 rounded-xl p-6 border border-green-200 animate-fade-in">
            <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Your Enrollments
            </h3>
            <div className="flex flex-wrap gap-2">
              {enrolled.map((name, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                  {name}
                  <button 
                    onClick={() => setEnrolled(enrolled.filter(n => n !== name))}
                    className="ml-2 text-green-500 hover:text-green-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Supervisors;