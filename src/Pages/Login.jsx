import React from 'react'
import Add from "../Img/addAvatar.png"

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">logo name</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          
          <button>Sign in</button>
        </form>
        <p>You have an account? Register</p>
      </div>
    </div>
  )
}

export default Login