import React, { useState } from "react"
import './UserAccount.css'
import Login from "./Login"
import Register from "./Register"

export default function UserAccount (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  } 

  if (authMode === "signin") {
    return (
      <>
      <div className="text-right">
      <button onClick={changeAuthMode} className='btn-primary'> signUP</button>
      </div>
      <Login/>
      </>

    )

  }
  if (authMode === "signup") {
     return (
    <>
    <div className="text-right">
    <button onClick={changeAuthMode} className='btn-primary'>signIN </button>
    </div>
    <Register/>
    </>
  )
}
}