export interface UserResponse {
  meta: Object,
  passes: Array<any>
}

export interface ParamsRequest {
  limit: number
  offset: number
  search: string
}

export interface ActiveField{
  id: string,
  value: string,
  placeholder: string
}

export interface Field{
  id: string,
  placeholder: string,
  checked: boolean
}

export interface PushNotification {
  user_id: string
  date_start: string
  push_message: string
}
