import React, { useState, useRef  }  from "react";
import "./Contact.css"
import '../App.css'
import emailjs from '@emailjs/browser';

const Result = () =>{
    return(
        <p> Your message has been successfuly send</p>
    )
}

const Contact = () => {
     const [result,showResult]= useState(false);
    
    
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_FIRST, process.env.REACT_APP_SECOND, form.current, process.env.REACT_APP_THIRD)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
    e.target.reset();
    showResult(true)
    } ;
    setTimeout(()=>{
        showResult(!true)
    },5000)
  return (
    <>
 <body>
    <div className="contactme" id="contact">
      <div className="contactOverlay">
        <div className="container">
          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="formWord">
                <h2>Ask your question to VaLa</h2>
                <span>Full Name</span>
                <br />
                <input className="input100" type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input className="input100" type="text" name="phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input className="input100" type="text" name="email" required />
                <br />
              </div>
              <div className="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                <div className="row">
                    {
                    result ? <Result /> : null
                    }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
    </>
  )
}

export default Contact