import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">NETFLEX</h1>
        <div>
          <Link to="/" className="text-white mr-6 hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/create-event" className="text-white mr-6 hover:text-gray-300 transition duration-300">Create Event</Link>
          <Link to="/find-events" className="text-white hover:text-gray-300 transition duration-300">Find Events</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
