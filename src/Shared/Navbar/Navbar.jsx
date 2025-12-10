import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/image.png'
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 px-20  ">
      <div className="logo">
        <img src={logo} alt="Logo" className="w-12" />
      </div>


      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold text-black" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              isActive ? "font-semibold text-black" : ""
            }
          >
            How It Works
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/student-review"
            className={({ isActive }) =>
              isActive ? "font-semibold text-black" : ""
            }
          >
            Student Review
          </NavLink>
        </li>
      </ul>


      <div className="auth-links flex space-x-4">
        <Link to='/login'>
          <button className="bg-gradient-to-r from-[#FFC30B] via-[#9235bd] to-[#8113B5] text-[#FFFFFF] px-4 py-2 rounded-2xl ">
            Login
          </button>

        </Link>
        <Link to="/selectrole">
          <button className="bg-gradient-to-r from-[#6657E2] via-[#8113B5] to-[#903CD1] text-[#FFFFFF] px-4 py-2 rounded-2xl ">
            Sign Up
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
