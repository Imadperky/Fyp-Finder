import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} FYP Supervisor Finder. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;