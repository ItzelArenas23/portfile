import React, { useState, useEffect} from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

const Navbar = () => {

  const links = [
    {
        id: 1,
        link: "Home"
    },
    {
        id: 2,
        link: "About"
    },
    {
        id: 3,
        link: "Skills"
    },
    {
        id: 4,
        link: 'Portfolio'
    },
    {
        id: 5,
        link: "Contact"
    }
]
  const [isShowNav, setIsShowNav] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleShowNav = () => {
    setIsShowNav(!isShowNav)
  }

  return (
    <header className={`flex justify-between py-2 px-4 text-2xl text-white bg-[url("/images/bgtopbottom.jpg")] items-center md:px-4 md:py-0 fixed top-0 w-full z-30`}>
        <h1 className='hover:text-cyan-900 hover:scale-125 duration-200 pl-2'>Itzel Arenas</h1>

       {/* <i onClick={handleShowNav} className='bx bx-menu-alt-right text-gray-300 text-3xl cursor-pointer md:hidden'></i> */}

       <div onClick={handleShowNav} className='bx bx-menu-alt-right text-gray-300 text-3xl cursor-pointer md:hidden'>
       {isShowNav ? <FaTimes size={30} /> : <FaBars size={30} /> }
       </div>

        {<nav className={`text-white absolute top-full ${isShowNav ? "left-0" : "-left-full"} w-full grid text-lg gap-2 md:static md:flex md:w-auto`}>
            <a className='hover:bg-cyan-700 p-4 duration-200 pl-2' href="#">Home</a>
            <a className='hover:bg-cyan-700 p-4 duration-200 pl-2' href="#">About</a>
            <a className='hover:bg-cyan-700 p-4 duration-200 pl-2' href="#">Skills</a>
            <a className='hover:bg-cyan-700 p-4 duration-200 pl-2' href="#">Portfolio</a>
            <a className='hover:bg-cyan-700 p-4 duration-200 pl-2' href="#">Contact</a>
        </nav>} 
    </header>
  )
}


export default Navbar