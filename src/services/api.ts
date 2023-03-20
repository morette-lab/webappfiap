import { UserApi } from './user/index'
import {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse
} from './user/types'

export interface ApiResponse {
  success: boolean;
  respBody?: object;
}

interface Return<Payload, SuccessResponse> {
  success: boolean;
  payload: Payload;
  response?: SuccessResponse;
}

interface IApi {
  login: (data: LoginPayload) => Return<LoginPayload, {token: string}>,
  signUp: (data: SignUpPayload) => Return<SignUpPayload, {}>
}

export const Api: IApi = {
  login: (data: LoginPayload) => {
    const result: LoginResponse = UserApi.login(data)
    
    if (result.success) {
      return {
	success: true,
	payload: data,
	token: result.token
      }
    }
    return {
      success: false,
      payload: data
    }
  },
  signUp: (data: SignUpPayload) => {
    const result: SignUpResponse = UserApi.signUp(data)

    if (result.success) {
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
