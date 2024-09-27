import React from 'react'
import Index from './page/index'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App