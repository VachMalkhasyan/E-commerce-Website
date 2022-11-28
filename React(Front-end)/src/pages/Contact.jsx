import React from "react";
import "./Contact.css"
import '../App.css'
const Contact = () => {
  return (
    <>
 <body>
    <div class="contactme" id="contact">
      <div class="contactOverlay">
        <div class="container">
          <div class="form">
            <form action="" onSubmit="">
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

                <div class="row">All Done</div>
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