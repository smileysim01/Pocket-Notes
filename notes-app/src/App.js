import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './components/routes/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Basic-Note-Taking-React-App/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
