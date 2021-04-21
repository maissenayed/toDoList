import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const hardCodedUser = { email: 'test@test.com', password: 'test' }

const initialState = {
  email: '',
  password: '',
}
type TPayload = {
  email: string
  password: string
}
const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<TPayload>) => {
      state.email = payload.email
      state.password = payload.password
    },
    logout: () => {
      return initialState
    },
  },
})
export const authenticationReducer = authenticationSlice.reducer
export const { login, logout } = authenticationSlice.actions
