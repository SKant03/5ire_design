import React from 'react'
import Herosection from './components/Herosection'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from './components/Landingpage';
import Tryout from './components/Tryout'
import Buildtoearn from './components/Buildtoearn';



const App = () => {
  return (
    <Router>
      <Routes>
         <Route exact path="/" element={<Herosection/>}/>
         <Route exact path="/" element={<Buildtoearn/>}/>
      </Routes>
    </Router>
  )
}

export default App
