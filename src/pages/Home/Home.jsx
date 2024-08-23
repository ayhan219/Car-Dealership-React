import React from 'react'
import NavbarTop from '../../components/NavbarTop'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Brands from '../../components/Brands'
import SaleArea from '../../components/SaleArea'
import { useState } from 'react'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import LastFooter from '../../components/LastFooter'

const Home = () => {

  const [activeBrand, setActiveBrand] = useState("citroen");
  return (
    <div>
        <NavbarTop />
        <Navbar />
        <Header />
        <Brands activeBrand={activeBrand} setActiveBrand={setActiveBrand} />
        <SaleArea activeBrand={activeBrand} setActiveBrand={setActiveBrand} />
        <Contact />
        <Footer />
        <LastFooter />
    </div>
  )
}

export default Home