import React from 'react'
import Future from './components/future/Future'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import WhatIs from './components/whatis/WhatIs'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <WhatIs/>
      <Future/>
    </>
  )
}

export default App