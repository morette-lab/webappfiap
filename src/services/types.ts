import { LoginPayload, SignUpPayload } from './user/types'

export type ApiResponse<T> = {success: boolean, response: T}

type Return<Payload, SuccessResponse> =
  Promise<{
    success: boolean;
    payload: Payload;
    response?: SuccessResponse
  }>

export interface IApi {
  login: (data: LoginPayload) => Return<LoginPayload, {token?: string}>,
  signUp: (data: SignUpPayload) => Return<SignUpPayload, {}>
}
