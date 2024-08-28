import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './components/routes/MainPage'
import NewGroup from './components/NewGroup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
