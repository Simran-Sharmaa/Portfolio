import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Style/NavbarSt.css'
function Navbar() {
    const [bars, setBars] = useState(true); 
    const [nvScroll, setNvScroll] = useState(false);
    const handleClick=()=>{
        setBars(!bars);
        // console.log(bars);
    }
    const handleScroll=()=>{
        if(window.scrollY>10)
        {setNvScroll(true);}
        else
       { setNvScroll(false);}
    }

    window.addEventListener("scroll",handleScroll)
    // console.log(nvScroll);
  return (
    <>

{/* <div className="container"> */}
        <div className={nvScroll?"header header-bg":"header"}>
            <h2><Link to="/">Portfolio</Link></h2>
            <nav>
                <ul className={bars?" nav-menu": " active nav-menu"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact </Link></li>
                </ul>
            </nav>
            {/* <i className="fa-solid fa-bars menu" onClick={handleClick}></i> */}
            {bars? <i className="fa-solid fa-bars menu" onClick={handleClick}></i>:<i className="fa-solid fa-xmark menu" onClick={handleClick}></i>}
        </div>
        {/* <div className="main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iusto eos numquam natus pariatur eligendi tempora necessitatibus voluptatibus quibusdam quia error voluptate libero labore magnam quis culpa officiis dolorum recusandae minima, nobis fugit facilis molestias porro! Eos rem veniam qui sequi harum eum commodi, tempore deserunt ex! Sit ea placeat porro commodi repellendus tempore rem quas libero perferendis possimus.
        </div> */}
    {/* </div> */}
    </>
  )
}

export default Navbar