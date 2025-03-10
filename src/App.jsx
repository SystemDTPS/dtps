import { useState } from 'react'
import PWABadge from './PWABadge.jsx'
import { LanguageProvider } from './Context/LanguageContext.jsx'
import { Toaster } from 'react-hot-toast'
import Home from './base/Home.jsx'
import AboutUs from './base/AboutUs.jsx'
import Products from './base/Products.jsx'
import Gallery from './base/Gallery.jsx'

function App() {
  return (
    <>
      <LanguageProvider>
        <Home />
        <AboutUs />
        <Products />
        <Gallery />
        <Toaster />
      </LanguageProvider>
    </>
  )
}

export default App
