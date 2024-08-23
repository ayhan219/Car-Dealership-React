import React from 'react'
import img1 from "../assets/berlingo2024.jpg"
import img2 from "../assets/citreonair.avif"
import img3 from "../assets/citroenspacetourer.avif"
import img4 from "../assets/xd.jpg"
import img5 from "../assets/citroenberlingo.avif"
import img6 from "../assets/citroenc3.png"
import img7 from "../assets/citroenc4.png"
import img8 from "../assets/citroentc5suv.jpg"
import img9 from "../assets/jumbercitroen.png"
import img10 from "../assets/jumpy.jpg"

const SaleArea = ({ activeBrand }) => {
  return (
    <div className='w-full h-[70vh] bg-[#F6F6F6] flex justify-center'>
      <div className='w-[75%] h-[60vh] bg-white shadow-xl mt-4 flex flex-wrap'>
        {/* İlk Satır */}
        {activeBrand === "citroen" && (
          <React.Fragment>
            <div className='w-[18%] h-36 m-[1%] cursor-pointer flex flex-col gap-3'>
              <div>
                <img src={img1} alt="Citroen Berlingo 2024" />
              </div>
              <div className='text-center text-xl font-semibold'>
                <h2>Citroen Berlingo 2024</h2>
              </div>
            </div>
            <div className='w-[18%] h-36 m-[1%] cursor-pointer flex flex-col gap-3'>
              <div>
                <img src={img2} alt="Citroen Air" />
              </div>
              <div className='text-center text-xl font-semibold'>
                <h2>Citroen Air</h2>
              </div>
            </div>
            <div className='w-[18%] h-36 m-[1%] cursor-pointer flex flex-col gap-3'>
              <div>
                <img src={img3} alt="Citroen" />
              </div>
              <div className='text-center text-xl font-semibold'>
                <h2>Citroen</h2>
              </div>
            </div>
            <div className='w-[18%] h-10 m-[1%] cursor-pointer flex flex-col gap-3'>
              <div>
                <img className='h-[120px]' src={img4} alt="Citroen Ami" />
              </div>
              <div className='text-center text-xl font-semibold'>
                <h2>Citroen Ami</h2>
              </div>
            </div>
            <div className='w-[18%] h-36 m-[1%] cursor-pointer flex flex-col gap-3'>
              <div>
                <img src={img5} alt="Citroen Berlingo" />
              </div>
              <div className='text-center text-xl font-semibold'>
                <h2>Citroen Berlingo</h2>
              </div>
            </div>
            
            {/* İkinci Satır */}
            <div className='w-[18%] h-36 m-[1%] cursor-pointer flex flex-col gap-3'>
              <div>
                <img src={img6} alt="Citroen C3" />
              </div>
              <div className='text-center text-xl font-semibold'>
                <h2>Citroen C3</h2>
              </div>
            </div>
            <div className='w-[18%] h-36 m-[1%] cursor-pointer flex flex-col gap-3'>
              <div>
                <img src={img7} alt="Citroen C4" />
              </div>
              <div className='text-center text-xl font-semibold'>
                <h2>Citroen C4</h2>
              </div>
            </div>
            <div className='w-[18%] h-36 m-[1%] cursor-pointer flex flex-col gap-3'>
              <div>
                <img src={img8} alt="Citroen TC5 SUV" />
              </div>
              <div className='text-center text-xl font-semibold'>
                <h2>Citroen TC5 SUV</h2>
              </div>
            </div>
            <div className='w-[18%] h-36 m-[1%] cursor-pointer flex flex-col gap-3'>
              <div>
                <img src={img9} alt="Citroen" />
              </div>
              <div className='text-center text-xl font-semibold'>
                <h2>Citroen</h2>
              </div>
            </div>
            <div className='w-[18%] h-36 m-[1%] cursor-pointer flex flex-col gap-3'>
              <div>
                <img src={img10} alt="Citroen Jumpy" />
              </div>
              <div className='text-center text-xl font-semibold'>
                <h2>Citroen Jumpy</h2>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default SaleArea
