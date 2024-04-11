import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-900 text-white py-8">
      <div className="logo">
        <span className="text-3xl mx-9 font-semibold">Work Easy</span>
      </div>
      <div className='list-none flex gap-10 mx-10 font-semibold'>
            <NavLink to="/"><li className='navBar text-xl font-light list-none capitalize ml-3 cursor-pointer hover:bg-slate-700 transition duration-700 p-2.5 px-8 rounded-md'>Home</li></NavLink>
            <NavLink to="/todo"><li className='navBar text-xl font-light list-none capitalize ml-3 cursor-pointer hover:bg-slate-700 transition duration-700 p-2.5 px-8 rounded-md'>Todo List</li></NavLink>
            <NavLink to="/login"><li className='navBar text-xl font-light list-none capitalize ml-3 cursor-pointer hover:bg-slate-700 transition duration-700 p-2.5 px-8 rounded-md'>Login</li></NavLink>
            </div>
    </nav>
  );
};

export default Navbar;
