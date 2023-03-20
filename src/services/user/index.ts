import { LoginPayload, LoginResponse, SignUpPayload, SignUpResponse } from './types'

const BASE_URL = "http://localhost:8080"

const UserApi = {
  login: (payload: LoginPayload): LoginResponse => {
    const response = requestPOSTAPI("/api/v1/customers/login", {email: payload.email, password: payload.password})

    if (response.status === 200) {
      return {
	success: true,
	token: response.body.token
      }
    }

    return {
      success: false,
      respBody: response.body
    }
  },

  signUp: (payload: SignUpPayload): SignUpResponse => {
    const {
      name,
      email,
      password,
      phone,
      cpf
    } = payload

    const body = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      cpf: cpf
    }

    return requestPOSTAPI("/api/v1/customers", body)
      .then((response: any) => {
	if (response.status === 200) {
	  return {
	    success: true
	  }
	}

	return response.json()
      })
      .then((body: object) => {
	return {
	  success: false,
	  respBody: body
	}
      })
  }
}

export { UserApi }

// Todo remover any
const requestPOSTAPI = (path: string, body: object, token?: string): any => {
  const headers = makeAuthHeader({
    "Content-Type": "application/json",
    method: "POST"
  }, token)

  const params = {
    body: JSON.stringify(body),
    headers: headers
  }

  return fetch(`${URL}/${path}`, params)
}

// Todo remover any
const requestGETAPI = (path: string, token?: string): any => {
  const headers = makeAuthHeader({}, token) 

  return fetch(`${URL}/${path}`, { headers: headers })
}

const makeAuthHeader = (headers: object, token?: string): HeadersInit => {
  if (token) {
    return {
      ...headers,
      "Authorization": `Bearer ${token}`
    }
  }

  return headers as HeadersInit
}
