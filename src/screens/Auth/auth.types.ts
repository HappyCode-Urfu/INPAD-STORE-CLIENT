export interface IAuthValues {
  email: string
  password: string
}

export type Roles = 'ADMIN' | 'USER' | 'EMPLOYEE'

export interface IRoles {
  value: Roles
  description: string
}

export interface IUser {
  name: string
  surname: string
  patronymic: string
  email: string
  phone_number: string
  roles: IRoles[]
}
