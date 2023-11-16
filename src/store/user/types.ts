export interface User {
  id: string
  fullName: string
  avatarUrl: string
  phone: string
  claims: AnyObject
  token: string
}
export interface UserState {
  user: User
}
