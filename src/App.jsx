import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import Supervisors from "./components/pages/Supervisors";
import Login from "./components/pages/Login";
import FypTrack from "./components/pages/FypTrack";
import FacultyManagement from "./components/pages/FacultyManagement";



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/supervisors" element={<Supervisors />} />
            <Route path="/login" element={<Login />} />
            <Route path="/fyp-track" element={<FypTrack />} />
            <Route path="/faculty-management" element={<FacultyManagement />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;