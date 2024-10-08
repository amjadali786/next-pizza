import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}: any) {
  return (
   <>
   <Navbar />
   <main>{children}</main>
   <Footer />
   </>
  )
}

export default Layout
