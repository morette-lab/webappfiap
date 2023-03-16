import { UserApi, LoginPayload, LoginResponse } from './user/index'

export const Api = {
  loginAPI: (loginData: LoginPayload): LoginResponse => UserApi.login(loginData)
}
