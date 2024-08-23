import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[50vh] bg-[#F3F4F4] shadow-2xl flex justify-center '>
        <div className='w-[75%] h-[50vh]  flex'>
            <div className='w-[100%] h-[50vh] flex flex-col items-center justify-center gap-24'>
                <h4 className='text-white font-extrabold text-xl text-center text-black'>Çalışma Saatleri</h4>
               <div className='text-center flex flex-col gap-3'>
               <p className='text-lg font-bold text-[#646664] '>Hafta İçi: 09:00 – 18:00</p>
                <p className='text-lg font-bold text-[#646664] '>Cumartesi: 09:00 – 17:00</p>
                <p className='text-lg font-bold text-[#646664] '>Pazar: 11:00 – 17:00</p>
               </div>
            </div>
            <div className='w-[100%] h-[50vh] flex flex-col items-center justify-center gap-24'>
                <h4 className='text-white font-extrabold text-xl text-center text-black'>Kurumsal</h4>
               <div className='text-center flex gap-5 flex-col'>
               <p className='text-lg font-bold text-[#646664] '>Hakkımızda</p>
                <p className='text-lg font-bold text-[#646664] '>Şubelerimiz</p>
                <p className='text-lg font-bold text-[#646664] '>İnsan Kaynakları</p>
                <p className='text-lg font-bold text-[#646664] '>Bilgi Toplumu</p>
                <p className='text-lg font-bold text-[#646664] '>KVKK</p>
               </div>
            </div>
            <div className='w-[100%] h-[50vh] flex flex-col items-center justify-center gap-24'>
                <h4 className='text-white font-extrabold text-xl text-center text-black'>Markalarımız</h4>
               <div className='text-center flex gap-5 flex-col'>
               <p className='text-lg font-bold text-[#646664] '>Citroen</p>
                <p className='text-lg font-bold text-[#646664] '>Opel</p>
                <p className='text-lg font-bold text-[#646664] '>BMW</p>
                <p className='text-lg font-bold text-[#646664] '>Mercedes</p>
                <p className='text-lg font-bold text-[#646664] '>Toyota</p>
               </div>
            </div>
            <div className='w-[100%] h-[50vh] flex flex-col items-center justify-center gap-24'>
                <h4 className='text-white font-extrabold text-xl text-center text-black'>Hizmetlerimiz</h4>
               <div className='text-center flex gap-5 flex-col'>
               <p className='text-lg font-bold text-[#646664] '>Servis Randevusu</p>
                <p className='text-lg font-bold text-[#646664] '>Satış Randevusu</p>
                <p className='text-lg font-bold text-[#646664] '>Test Sürüşü Randevusu</p>
                <p className='text-lg font-bold text-[#646664] '>İkinci el Randevusu</p>
                <p className='text-lg font-bold text-[#646664] '>Arkas Sigorta</p>
               </div>
            </div>
            

        </div>
    </div>
  )
}

export default Footer