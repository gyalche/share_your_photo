import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'

import { BrowserRouter as Router } from 'react-router-dom'
import Home from './container/Home';
const App = () => {
 
       return (
         <Router>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/*" element={<Home />} />
            </Routes>
         </Router>
    
  )
 
 
}

export default App