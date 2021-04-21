import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
  },
})
export const authenticationReducer = authenticationSlice.reducer
export const { login } = authenticationSlice.actions
