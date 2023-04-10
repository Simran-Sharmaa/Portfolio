import React from 'react'
import { Routes,Route, BrowserRouter as Router,HashRouter } from 'react-router-dom';
import Home from './Routes/Home'
import About from './Routes/About'
import Project   from './Routes/Project'
import Contact from './Routes/Contact'
function App() {
  return (
   <>
   
<HashRouter basename='/'>
   {/* <Router> */}

   <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
   </Routes>
   
   
   {/* </Router> */}
</HashRouter>
   </>
  );
}

export default App;
// "homepage": "https://Simran-Sharmaa.github.io/Portfolio",
