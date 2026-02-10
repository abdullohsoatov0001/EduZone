import React from 'react'
import { Link } from 'react-router'
import Logo from "../../assets/logo.webp";

const Nav = () => {
  return (
    <div>
      <nav className='bg-blue-700 h-17.5 flex justify-center items-center'>
        <ul className='flex justify-center items-center gap-25'>
          <li>

            <li className='flex justify-center items-center gap-5'>
              <Link to="/"><img className='size-16' src={Logo} alt="" /></Link>
              <Link to="/" className='text-white text-[29px] font-bold'>Edu Zone</Link>
            </li>

          </li>
          <li className='flex justify-center items-center gap-11 text-[20px] font-semibold text-white'>
            <li>
              <Link to="/">Uy</Link>
            </li>
            <li>
              <Link to="/">Biz haqimizda</Link>
            </li>
            <li>
              <Link to="/">Kontakt</Link>
            </li>
            <li>
              <Link to="/">Nega biz ?</Link>
            </li>

          </li>



          <li className='flex justify-center items-center gap-8'>
            <select
              className="
    cursor-pointer
    bg-white
    text-blue-700
    border-2 border-blue-700
    rounded-xl
    px-4
    py-2
    w-40
    h-12
    text-lg
    font-semibold
    shadow-md
    hover:bg-blue-50
    hover:border-blue-900
    transition-all
    duration-300
    focus:outline-none
    focus:ring-2
    focus:ring-blue-400
  "
            >
              <option>O‘zbek</option>
              <option>English</option>
              <option>Русский</option>
            </select>

            <li>
              <Link to="/"><button className='bg-white w-40 h-13 rounded-2xl text-blue-600 text-[20px] font-bold' >Sign in</button>  </Link>
            </li>
            <li>
              <Link to="/signUp"><button className='bg-blue-800 w-40 h-13 rounded-2xl text-white text-[20px] font-bold' >Sign Up</button>  </Link>
            </li>
          </li>
        </ul>
      </nav>
      <div className='h-1'></div>
    </div>
  )
}

export default Nav