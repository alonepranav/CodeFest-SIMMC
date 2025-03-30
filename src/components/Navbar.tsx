import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [hide, sethide] = useState(false);

  return (
    <nav className="bg-white border-gray-200 fixed top-0 left-0 w-screen shadow-lg shadow-slate-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" onClick={() => sethide(false)} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">SIMMC</span>
        </a>
        <button type="button" onClick={() => sethide(!hide)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Home</Link>
            </li>
            <li>
              <Link to="/event" className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Events</Link>
            </li>
            <li>
              <Link to="/gallery" className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Gallery</Link>
            </li>
            <li>
              <Link to="/register" className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Register</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</Link>
            </li>
          </ul>
        </div>

        {
          hide ?
            <div className="block w-full md:hidden md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                <li>
                  <Link onClick={() => sethide(false)} to="/" className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Home</Link>
                </li>
                <li>
                  <Link onClick={() => sethide(false)} to="/event" className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Events</Link>
                </li>
                <li>
                  <Link onClick={() => sethide(false)} to="/gallery" className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Gallery</Link>
                </li>
                <li>
                  <Link onClick={() => sethide(false)} to="/register" className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Register</Link>
                </li>
                <li>
                  <Link onClick={() => sethide(false)} to="/contact" className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</Link>
                </li>
              </ul>
            </div>
            : null
        }
      </div>
    </nav>

  )
}
