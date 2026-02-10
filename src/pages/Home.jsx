import React from 'react'
import Rasm from "../assets/rasm.webp"
import Navbar from "../components/nav/Nav"

const Home = () => {
  return (
    <div>
      {/* Faqat shu fayl uchun CSS */}
      <style>
        {`
          @keyframes infinite-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            display: flex;
            width: max-content;
            animation: infinite-marquee 18s linear infinite;
          }
        `}
      </style>

      {/* Nav */}
      <Navbar />

      {/* hero section */}
      <div className='flex justify-center items-center bg-blue-400 h-[500px] gap-16'>
        <div>
          <h1 className='text-[50px] text-white'>
            <span className='font-extrabold'>Edu Zone</span> <br />
            Biz bilan o'qish maskanlarini toping.
          </h1>

          <p className='text-gray-600 text-[18px] mt-5'>
            Bizning saytda siz online tarzda va uydan chiqmagan holda bog'cha , <br />
            maktab va universitetlar topishingiz mumkun.
          </p>

          <button className='bg-blue-500 w-[300px] rounded-2xl h-16 border-2 border-white mt-7 text-white font-semibold text-2xl'>
            Tanishib chiqish.
          </button>
        </div>

        <img src={Rasm} alt="" />
      </div>

      {/* Trusted start */}
      <h1 className='text-center text-[50px] font-extrabold mt-9 text-blue-600'>
        Trusted By ...
      </h1>

      {/* trust section */}
      <div className="overflow-hidden w-full h-32 mt-6">
        <div className="marquee-track">
          {[ 
            "SLAY", "404", "Edu Zone", "NPX", "Abdulloh",
            "SLAY", "404", "Edu Zone", "NPX", "Abdulloh"
          ].map((text, i) => (
            <h1
              key={i}
              className="mx-10 text-7xl text-gray-500 font-extrabold italic rotate-[-12deg] whitespace-nowrap"
            >
              {text}
            </h1>
          ))}
        </div>
      </div>
     {/* Trusted end */}

     
      
    </div>
  )
}

export default Home
