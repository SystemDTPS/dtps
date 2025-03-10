import React, { useState } from 'react'
import { useLanguageContext } from '../Context/LanguageContext'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import logo from '../assets/logo.png'
import { MdMenu } from 'react-icons/md'
const Navbar = () => {
      const {language} = useLanguageContext()
      const [isMenuOpen, setIsMenuOpen] = useState(false)
     
      useEffect(()=>{

      },[language])
  return (
    <div className='w-full h-[60px] flex justify-between items-center px-4 border-b border-b-emerald-500 
    bg-white/5 backdrop-filter backdrop-blur-sm fixed top-0 z-[9999999]'>
        <div className='flex items-center font-primary font-bold tracking-wider'>
            <img src={logo} alt="DTPS Logo" className='w-[40px] h-[40px] rounded-full' />
            <h1 className='pl-2 text-[18px] text-sky-800'>DTPS</h1>
        </div>

        <div>
          <MdMenu onClick={e => setIsMenuOpen(!isMenuOpen)} className='text-2xl text-sky-800' />
        </div>

      {/* Sliding Glassmorphic Menu */}
      <div
        className={`fixed top-[65px] w-[250px] min-h-[300px] h-max p-4 border border-emerald-500 
        bg-gray-300/30 backdrop-filter backdrop-blur-sm shadow-lg rounded-md transition-all duration-500 ease-in-out
        ${isMenuOpen ? 'right-4' : 'right-[-300px]'}`}
      >
        <p className="text-white">Glassmorphic Menu Content</p>
      </div>

    </div>
  )
}

export default Navbar