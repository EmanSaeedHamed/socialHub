import { faMagnifyingGlass, faPlus, faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SignupNavbar() {
  return (
    <nav className="bg-zinc-900 py-3 px-6 fixed z-50 left-0 w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo and Nav Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-lime-500 text-zinc-900 font-bold text-lg px-3 py-1 rounded">T</span>
            <span className="text-white font-bold text-xl">TWEETIX</span>
          </Link>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-6 text-zinc-400">
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/explore" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link to="/communities" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span>Communities</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side - Search, Icons, and Create Post */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden lg:block">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              type="search"
              placeholder="Search posts..."
              className="bg-zinc-800 text-white pl-10 pr-4 py-2 rounded-full border border-zinc-700 focus:border-lime-500 focus:outline-none w-48 placeholder-zinc-500"
            />
          </div>

          {/* Notification Icons */}
          <div className="flex items-center gap-3 text-zinc-400">
            <button className="relative hover:text-white transition-colors">
              <FontAwesomeIcon icon={faBell} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="relative hover:text-white transition-colors">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* Create Post Button */}
          <button className="bg-lime-500 hover:bg-lime-400 text-zinc-900 font-semibold px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
            <FontAwesomeIcon icon={faPlus} />
            <span className="hidden sm:inline">Create Post</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
