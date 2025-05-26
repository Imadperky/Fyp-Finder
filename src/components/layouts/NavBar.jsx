import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
      <div className="text-xl font-bold tracking-wide">
        The University of Lahore
      </div>
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/supervisors" className="hover:underline">
            Supervisors
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </li>
        <li>
          <Link to="/fyp-track" className="hover:underline">
            FYP Track
          </Link>
          </li>

          <li>
          <Link to="/faculty-Management" className="hover:underline">
            Faculty Management
          </Link>
          </li>

        
         
          
      </ul>
    </nav>
  );
};

export default Navbar;