import { LoginPayload, LoginResponse, SignUpPayload, SignUpResponse } from './types'

const BASE_URL = "http://localhost:8080"

const UserApi = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    const response =
      await requestPOSTAPI("/api/v1/customers/login", {
	email: payload.email,
	password: payload.password
      })

    if (response.status === 200) {
      const body = await response.json()
      
      return {
	success: true,
	response: {
	  token: body.token	  
	}
      }
    }

    return {
      success: false,
      response: {}
    }
  },

  signUp: async (payload: SignUpPayload): Promise<SignUpResponse> => {
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

    const signup_response = await requestPOSTAPI("/api/v1/customers", body)

    if (signup_response.status === 200) {
      return {
	success: true,
	response: {}
      }
    }

    return {
      success: false,
      response: {}
    }
  }
}

export { UserApi }

const requestPOSTAPI = (path: string, body: object, token?: string): Promise<Response> => {
  const headers = makeAuthHeader({
    "Content-Type": "application/json"
  }, token)

  const params = {
    body: JSON.stringify(body),
    headers: headers,
    method: "POST"
  }

  return fetch(`${BASE_URL}/${path}`, params)
}

// Todo remover any
const requestGETAPI = (path: string, token?: string): any => {
  const headers = makeAuthHeader({}, token) 

  return fetch(`${BASE_URL}/${path}`, { headers: headers })
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
