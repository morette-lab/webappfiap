const BASE_URL = ""

interface ApiResponse {
  status: number;
  body?: object;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse extends ApiResponse {
  token?: string;
}


export const UserApi = {
  login: (payload: LoginPayload): LoginResponse => {
    const response = requestPOSTAPI(BASE_URL, {email: payload.email, password: payload.password})

    if (response.status === 200) {
      return {
	status: 200,
	token: response.body.token
      }
    }

    return {
      status: response.status,
      body: response.body
    }
  }
}

// Todo remover any
const requestPOSTAPI = (URL: string, body: object): any => {
  fetch(URL, {body: JSON.stringify(body)})
  // TODO
  return {}
}

// Todo remover any
const requestGETAPI = (URL: string): any => {
  fetch(URL, {})
  // TODO
}
