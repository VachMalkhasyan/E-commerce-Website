import React, { useState }  from "react";
import "./Contact.css"
import '../App.css'
import { useRef } from "react";
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

    emailjs.sendForm('service_pkt6omk', 'template_b70pe2i', form.current, '3b_KoBAyTtb7jqJZ9')
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
    <div class="contactme" id="contact">
      <div class="contactOverlay">
        <div class="container">
          <div class="form">
            <form ref={form} onSubmit={sendEmail}>
              <div class="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input class="input100" type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input class="input100" type="text" name="phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input class="input100" type="text" name="email" required />
                <br />
              </div>
              <div class="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                <div class="row">
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