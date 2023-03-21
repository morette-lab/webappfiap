import { UserApi } from './user/index'
import {
  LoginPayload,
  SignUpPayload,
} from './user/types'
import { IApi } from './types'

export const Api: IApi = {
  login: async (data: LoginPayload) => {
    const api_result = await UserApi.login(data)

    if (api_result.success) {
      return {
	success: true,
	payload: data,
	response: {
	  token: api_result.response.token
	}
      }
    }

    return {
      success: false,
      payload: data
    }

  },
  signUp: async (data: SignUpPayload) => {
    const api_result = await UserApi.signUp(data)

    if (api_result.success) {
      return {
	success: true,
	payload: data
      }
    }

    return {
      success: false,
      payload: data
    }
  }
}
