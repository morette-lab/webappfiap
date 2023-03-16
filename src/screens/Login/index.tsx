import { useState } from 'react'

import LoginLayout from './../../layouts/Login'
import { Api } from './../../services/api'

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

  const requestLogin = (email: string, password: string) => {
    Api.loginAPI({ email, password })
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
