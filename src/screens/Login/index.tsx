import { useState } from 'react'


import LoginLayout from './../../layouts/Login'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const setInputValue = (event: any, callback: Function) => {
    callback(event.target.value)
  }

  const onChange = (event: any, type: "email" | "password") => {
    switch (type) {
      case "email":
        setInputValue(event, setEmail)
        break;
      case "password":
        setInputValue(event, setPassword)
        break;
    }

  }

  return (
    <LoginLayout
      email={email}
      password={password}
      onChange={onChange}
    />
  )
}

export default Login;
