import React, { useState } from "react";
import { FiEdit, FiTrash2, FiCheck, FiX, FiRefreshCw } from "react-icons/fi";

const FacultyManagement = () => {
  // Initial faculty data
  const initialFaculty = [
    {
      id: 1,
      name: "Dr. Adnan Khalid",
      email: "adnan.khalid@university.edu",
      domain: "AI",
      slots: "5",
      officeHours: "10:00-12:00",
    },
    {
      id: 2,
      name: "Prof. Nadia Ali",
      email: "nadia.ali@university.edu",
      domain: "Cybersecurity",
      slots: "3",
      officeHours: "14:00-16:00",
    },
  ];

  // Initial idea submissions
  const initialIdeas = [
    { id: 1, title: "AI Chatbot", status: "pending", student: "Ali Raza" },
    { id: 2, title: "Smart Campus IoT", status: "accepted", student: "Sara Malik" },
  ];

  const [facultyList, setFacultyList] = useState(initialFaculty);
  const [ideas, setIdeas] = useState(initialIdeas);
  const [newFaculty, setNewFaculty] = useState({
    name: "",
    email: "",
    domain: "",
    slots: "",
    officeHours: "",
  });

  const handleAddFaculty = () => {
    // Simple validation to prevent adding empty names or emails
    if (!newFaculty.name.trim() || !newFaculty.email.trim()) {
      alert("Please fill in at least name and email.");
      return;
    }
    const newEntry = { ...newFaculty, id: Date.now() };
    setFacultyList([...facultyList, newEntry]);
    setNewFaculty({ name: "", email: "", domain: "", slots: "", officeHours: "" });
  };

  const handleDeleteFaculty = (id) => {
    setFacultyList(facultyList.filter((f) => f.id !== id));
  };

  const handleIdeaStatusChange = (id, status) => {
    setIdeas(ideas.map((idea) => (idea.id === id ? { ...idea, status } : idea)));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Faculty Management Panel</h1>

      {/* Add Faculty Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(newFaculty).map(([key, value]) => (
            <input
              key={key}
              type="text"
              placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
              value={value}
              onChange={(e) => setNewFaculty({ ...newFaculty, [key]: e.target.value })}
              className="border border-gray-300 p-2 rounded w-full"
            />
          ))}
        </div>
        <button
          onClick={handleAddFaculty}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Faculty
        </button>
      </div>

      {/* Faculty List */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Faculty Members</h2>
        {facultyList.length > 0 ? (
          <ul className="space-y-4">
            {facultyList.map((f) => (
              <li
                key={f.id}
                className="p-4 border border-gray-200 rounded flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-medium">{f.name}</p>
                  <p className="text-sm text-gray-600">
                    {f.email} | Domain: {f.domain}
                  </p>
                  <p className="text-sm text-gray-500">
                    Slots: {f.slots}, Office Hours: {f.officeHours}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-yellow-600 hover:text-yellow-800">
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteFaculty(f.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No faculty members added yet.</p>
        )}
      </div>

      {/* Idea Submission Management */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Manage Idea Submissions</h2>
        {ideas.length > 0 ? (
          <ul className="space-y-4">
            {ideas.map((idea) => (
              <li
                key={idea.id}
                className="p-4 border border-gray-200 rounded flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-medium">{idea.title}</p>
                  <p className="text-sm text-gray-600">Student: {idea.student}</p>
                  <p className="text-sm text-gray-500">
                    Status:{" "}
                    <span
                      className={`capitalize font-medium ${
                        idea.status === "accepted"
                          ? "text-green-600"
                          : idea.status === "rejected"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {idea.status}
                    </span>
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleIdeaStatusChange(idea.id, "accepted")}
                    className="text-green-600 hover:text-green-800"
                    title="Accept"
                  >
                    <FiCheck />
                  </button>
                  <button
                    onClick={() => handleIdeaStatusChange(idea.id, "rejected")}
                    className="text-red-600 hover:text-red-800"
                    title="Reject"
                  >
                    <FiX />
                  </button>
                  <button
                    onClick={() => handleIdeaStatusChange(idea.id, "pending")}
                    className="text-blue-600 hover:text-blue-800"
                    title="Reset to Pending"
                  >
                    <FiRefreshCw />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No idea submissions found.</p>
        )}
      </div>
    </div>
  );
};

export default FacultyManagement;
