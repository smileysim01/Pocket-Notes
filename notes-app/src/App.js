import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './components/routes/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Pocket-Notes/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
