import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[50vh] flex justify-center items-center'>
        <div className='w-[70%] h-[30vh] bg-black flex shadow-lg rounded-lg overflow-hidden'>
            <div className='w-1/3 h-full bg-gradient-to-r from-slate-800 to-slate-600 flex flex-col items-center justify-center gap-6 p-4'>
                <h1 className='text-white font-semibold text-3xl text-center'>Test Sürüş</h1>
                <button className='w-36 h-12 text-white font-bold text-xl rounded-xl bg-blue-800 hover:bg-blue-600 transition duration-300'>Test et</button>
            </div>
            <div className='w-1/3 h-full bg-gradient-to-r from-slate-800 to-slate-600 flex flex-col items-center justify-center gap-6 p-4'>
                <h1 className='text-white font-semibold text-3xl text-center'>Satış Randevusu</h1>
                <button className='w-36 h-12 text-white font-bold text-xl rounded-xl bg-blue-800 hover:bg-blue-600 transition duration-300'>Test et</button>
            </div>
            <div className='w-1/3 h-full bg-gradient-to-r from-slate-800 to-slate-600 flex flex-col items-center justify-center gap-6 p-4'>
                <h1 className='text-white font-semibold text-3xl text-center'>Servis Randevusu</h1>
                <button className='w-36 h-12 text-white font-bold text-xl rounded-xl bg-blue-800 hover:bg-blue-600 transition duration-300'>Test et</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
