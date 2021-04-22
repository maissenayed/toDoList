import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// hard coded User
export const hardCodedUser = { email: 'test@test.com', password: 'test' }

const initialState: TPayload = {
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
      // update user state
      state.email = payload.email
      state.password = payload.password
    },
    // return initial state on logout
    logout: () => {
      return initialState
    },
  },
})
export const authenticationReducer = authenticationSlice.reducer
export const { login, logout } = authenticationSlice.actions
