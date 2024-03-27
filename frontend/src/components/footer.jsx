import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center items-center text-gray-300 max-h-screen">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} The Millennium Universal College . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
