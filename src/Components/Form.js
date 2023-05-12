import React from 'react'
import './Style/FormStyle.css'
function Form() {
  return (
    <div className='form'>
        <form action='https://formspree.io/f/xdovwwjo' method='post'>
            <label> Your Name</label>
            <input type="text" name='name'required ></input >
            <label >Email</label>
            <input type='email' name='email' required></input>
            {/* <label>Subject</label>
            <input type='text' name='subject'></input> */}
            <label >Message</label>
            <textarea rows='6'name='message' placeholder='Type your message here'required/>
            <button className='btn'>Submit</button> 
        </form>
    </div>
  )
}

export default Form