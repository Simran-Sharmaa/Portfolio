import React from 'react'
import { Routes,Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Routes/Home'
import About from './Routes/About'
import Project   from './Routes/Project'
import Contact from './Routes/Contact'
function App() {
  return (
   <>
   
   <Router>

   <Routes>
    <Route exact path='/Portfolio' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
   </Routes>
   
   
   </Router>
   </>
  );
}

export default App;
