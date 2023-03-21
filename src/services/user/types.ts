import { ApiResponse } from './../types'

export interface LoginPayload {
  email: string;
  password: string;
}

export type LoginResponse = ApiResponse<{token?: string}>

export interface SignUpPayload {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
}

export type SignUpResponse = ApiResponse<{}>
