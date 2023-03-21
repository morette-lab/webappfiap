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

  const requestLogin = async () => {
    const api_result = await Api.login({ email, password })

    if (api_result.success) {
      storeToken(api_result.response?.token!)
      return
    }

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
