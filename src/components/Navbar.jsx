import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="
    fixed top-0 left-0 w-full
    bg-white/80 backdrop-blur-md
    shadow-sm z-50
    ">

      <div className="
      max-w-7xl mx-auto
      px-5 md:px-6
      py-4
      flex justify-between items-center
      ">


        {/* LOGO */}
        <div className="
        text-2xl
        font-bold
        text-blue-600
        ">
          NorthPeak
        </div>



        {/* DESKTOP MENU */}
        <div className="
        hidden md:flex
        gap-8
        text-gray-700
        font-medium
        ">

          <a href="#services"
          className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
            Services
          </a>


          <a href="#results"
          className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
            Results
          </a>


          <a href="#projects"
          className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
            Projects
          </a>


          <a href="#pricing"
          className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
            Pricing
          </a>


          <a href="#contact"
          className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
            Contact
          </a>

          <a href="#about">About</a>

        </div>




        {/* DESKTOP BUTTON */}
        <button
        type="button"
        className="
        hidden md:block
        bg-blue-600
        text-white
        px-6 py-2.5
        rounded-full
        hover:bg-blue-700
        transition
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        ">
          Start Your Project
        </button>





        {/* MOBILE MENU BUTTON */}
        <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={()=>setOpen(!open)}
        className="
        md:hidden
        text-2xl
        text-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        rounded
        ">
          ☰
        </button>

      </div>




      {/* MOBILE MENU */}

      {open && (

        <div className="
        md:hidden
        bg-white
        border-t
        px-6
        py-5
        space-y-4
        ">


          <a href="#services"
          className="block text-gray-700 hover:text-blue-600">
            Services
          </a>


          <a href="#results"
          className="block text-gray-700 hover:text-blue-600">
            Results
          </a>


          <a href="#projects"
          className="block text-gray-700 hover:text-blue-600">
            Projects
          </a>


          <a href="#pricing"
          className="block text-gray-700 hover:text-blue-600">
            Pricing
          </a>


          <a href="#contact"
          className="block text-gray-700 hover:text-blue-600">
            Contact
          </a>



          <button
          className="
          w-full
          bg-blue-600
          text-white
          py-3
          rounded-full
          ">
            Start Your Project
          </button>


        </div>

      )}

    </nav>
  );
}

export default Navbar;