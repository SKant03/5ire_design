import React from 'react'
import Herosection from './components/Herosection'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Routes>
         <Route exact path="/" element={<Herosection/>}/>
      </Routes>
    </Router>
  )
}

export default App
