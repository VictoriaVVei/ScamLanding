import React from 'react'; //import React Component
import { Route, Routes, Navigate } from "react-router-dom";
import {LandingPage} from './pages/LandingPage/LandingPage.jsx';
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
