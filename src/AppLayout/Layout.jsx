import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box } from '@mui/material'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <Box>
      {children}
    </Box>
    
    <Footer/>
    </>
  )
}

export default Layout
