import { useState } from 'react'

import LoginLayout from './../../layouts/Login'
import { Api } from './../../services/api'
import { storeToken } from './../../utils/login'

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

  const requestLogin = () => {
    const result = Api.login({ email, password })

    if (result.success) {
      storeToken(result.response?.token!)
    }

    // TODO: error alert
  }

  return (
    <LoginLayout
      email={email}
      password={password}
      onChange={onChange}
      requestLogin={requestLogin}
    />
  )
}

export default Login;
