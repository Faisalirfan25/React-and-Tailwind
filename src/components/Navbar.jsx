import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="bg-background dark:bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-primary text-2xl font-bold">FuturisticApp</div>
        <ul className="flex space-x-8 text-textLight">
          <li><a href="#" className="hover:text-primary">Home</a></li>
          <li><a href="#" className="hover:text-primary">About</a></li>
          <li><a href="#" className="hover:text-primary">Services</a></li>
          <li><a href="#" className="hover:text-primary">Contact</a></li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-primary text-background px-4 py-2 rounded hover:bg-accent"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
