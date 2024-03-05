import { atom } from 'recoil'
import { IUser } from 'screens/Auth/auth.types.ts'

export interface IAuth {
  accessToken: string
  expiresIn: number
}

export interface IAuthState {
  auth: IAuth
  items: IUser
}

export const initialAuthState: IAuthState = {
  auth: {
    accessToken: '',
    expiresIn: 0,
  },
  items: {
    name: '',
    email: '',
    patronymic: '',
    phone_number: '',
    surname: '',
    roles: [],
  },
}

const authAtom = atom<IAuthState>({
  key: 'auth',
  default: initialAuthState,
})

export default authAtom
