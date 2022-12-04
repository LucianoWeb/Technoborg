import React from 'react'
import Contact from './components/contact/Contact'
import Future from './components/future/Future'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Technologies from './components/technologies/Technologies'
import WhatIs from './components/whatis/WhatIs'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <WhatIs/>
      <Future/>
      <Technologies/>
      <Contact/>
    </>
  )
}

export default App