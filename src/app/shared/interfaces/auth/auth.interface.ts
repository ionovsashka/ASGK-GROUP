export interface LoginForm {
  login: string
  password: string
}

export interface Token {
  identifier: string
  status: boolean
  token:string
}
export interface TokenResponse {
  limit: number
  tokens: Token[]
}
