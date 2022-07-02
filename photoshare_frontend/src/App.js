import React, {useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './components/Login'

import { BrowserRouter as Router } from 'react-router-dom'
import Home from './container/Home';
// import { fetchUser } from './utils/fetchUser';
const App = () => {
  
  // const navigate=useNavigate();
  // useEffect(() => {
  //   const user=fetchUser();
  //   if(!user){
  //     navigate('/login');
  //   } else{
  //     navigate('/')
  //   }
  // }, [])
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