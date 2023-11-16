export interface User {
  id: string
  fullName: string
  avatarUrl: String
  phone: string
  claims: AnyObject
  token: string
}
export interface UserState {
  user: User
}
