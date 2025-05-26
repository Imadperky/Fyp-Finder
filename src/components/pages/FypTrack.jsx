import React from "react";
import { FiClock, FiCheck, FiX, FiEdit, FiHelpCircle } from "react-icons/fi";

const IdeaStatusTracker = () => {
  // Sample data - replace with actual backend/API data
  const ideas = [
    { id: 1, title: "AI-Powered Learning Platform", status: "accepted", date: "2023-05-15" },
    { id: 2, title: "Blockchain for Academic Records", status: "pending", date: "2023-05-20" },
    { id: 3, title: "VR Campus Tour", status: "rejected", date: "2023-05-10" },
    { id: 4, title: "Sustainable Energy Monitoring", status: "revision", date: "2023-05-18" },
  ];

  const getStatusDetails = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return { color: "bg-yellow-100 text-yellow-800", icon: <FiClock className="mr-2" />, text: "Pending Review" };
      case "accepted":
        return { color: "bg-green-100 text-green-800", icon: <FiCheck className="mr-2" />, text: "Accepted" };
      case "rejected":
        return { color: "bg-red-100 text-red-800", icon: <FiX className="mr-2" />, text: "Rejected" };
      case "revision":
        return { color: "bg-blue-100 text-blue-800", icon: <FiEdit className="mr-2" />, text: "Requires Revision" };
      default:
        return { color: "bg-gray-100 text-gray-800", icon: <FiHelpCircle className="mr-2" />, text: "Unknown" };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">MyGE - Idea Submission Portal</h1>
          <p className="text-lg text-gray-600">Track the status of your submitted ideas and project proposals</p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">ECP Form A - Submitted Ideas</h2>
            <p className="text-gray-500 mt-1">View and manage your idea submissions</p>
          </div>

          <div className="divide-y divide-gray-200">
            {ideas.length > 0 ? (
              ideas.map((idea) => {
                const status = getStatusDetails(idea.status);
                return (
                  <div key={idea.id} className="p-6 hover:bg-gray-50 transition-colors duration-150">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-medium text-gray-800">{idea.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">Submitted on {idea.date}</p>
                      </div>
                      <div className="flex items-center">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${status.color}`}>
                          {status.icon}
                          {status.text}
                        </span>
                        <button className="ml-4 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>

                    {idea.status === "revision" && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                        <p>Reviewer notes: Please provide more technical details about your implementation plan.</p>
                      </div>
                    )}

                    {idea.status === "rejected" && (
                      <div className="mt-4 p-3 bg-red-50 rounded-lg text-sm text-red-800">
                        <p>Reviewer notes: This idea doesn't align with current program objectives.</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-6 text-center text-gray-500">
                <p>You haven't submitted any ideas yet.</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Submit New Idea
                </button>
              </div>
            )}
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Need Assistance?</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-600 mb-3 sm:mb-0">
                Contact the FG Entry team if you need help with your submission.
              </p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Request Assistance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaStatusTracker;
