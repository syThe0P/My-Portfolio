import "./Forms.css"
import React from 'react'

const Forms = () => {
  return (
    <div className="form">
        <form action="">
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your name here...." ></textarea>
            <button className="btn">SUBMIT</button>
        </form>
    </div>
  )
}

export default Forms
