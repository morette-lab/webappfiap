import { ApiResponse } from './../api'

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse extends ApiResponse {
  token?: string;
}

export interface SignUpPayload {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
}

export interface SignUpResponse extends ApiResponse {}
