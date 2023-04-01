import React from 'react'
import Herosection from './components/Herosection'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from './components/Landingpage';
import Tryout from './components/Tryout'



const App = () => {
  return (
    <Router>
      <Routes>
         <Route exact path="/" element={<Landingpage/>}/>
      </Routes>
    </Router>
  )
}

export default App
