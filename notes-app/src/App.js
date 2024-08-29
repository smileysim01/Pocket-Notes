import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './components/routes/MainPage'
import NotFoundPage from './components/routes/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Pocket-Notes' element={<MainPage />} sensitive={false}/>
        <Route path='/Pocket-Notes/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
