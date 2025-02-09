import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#121212] text-white min-h-screen">
      {/* Header */}
      <header className="bg-[#1a1a1a] bg-opacity-80 shadow-md">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2">
              <img className="w-auto h-8" src="/public/Edu_Sphere_Logo.svg" alt="Logo" />
            </a>

            {/* Mobile Menu Button */}
            <button 
              type="button" 
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-all duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Navigation Links */}
            <nav className={`absolute inset-x-0 top-16 bg-[#1a1a1a] p-4 space-y-3 rounded-lg lg:static lg:flex lg:items-center lg:space-x-10 lg:bg-transparent lg:p-0 ${menuOpen ? "block" : "hidden"}`}>
              <a href="#" className="block text-gray-300 hover:text-indigo-400 transition">Features</a>
              <a href="#" className="block text-gray-300 hover:text-indigo-400 transition">Solutions</a>
              <a href="#" className="block text-gray-300 hover:text-indigo-400 transition">Resources</a>
              <a href="#" className="block text-gray-300 hover:text-indigo-400 transition">Pricing</a>
            </nav>

            {/* Join Now Button */}
            <a href="#" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 rounded-full">
              Join Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="px-6 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-base font-semibold tracking-wider text-indigo-400 uppercase">A community for developers</p>
            <h1 className="mt-4 text-4xl font-extrabold text-white lg:mt-6 sm:text-5xl xl:text-6xl leading-tight">
              Connect & Learn with <span className="text-gradient text-indigo-400">Industry Experts</span>
            </h1>
            <p className="mt-4 text-lg text-gray-400 lg:mt-6">
              Level up your skills by collaborating with mentors and like-minded professionals.
            </p>

            <a href="#" className="inline-flex items-center px-6 py-3 mt-8 font-semibold text-black bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-200 hover:opacity-90">
              Join for Free
              <svg className="w-6 h-6 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>

            <p className="mt-5 text-gray-500">Already joined us? <a href="#" className="text-indigo-400 hover:underline">Log in</a></p>
          </div>

          {/* Right Image */}
          <div>
            <img className="w-full rounded-lg shadow-lg" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="Hero" />
          </div>
        </div>
      </section>
    </div>
  );
}
