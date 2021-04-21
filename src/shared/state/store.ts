import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducer/reducer'

// Mocking Up a small backend

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: TStore) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err)
  }
}
const persistedStore = loadState()

export const store = configureStore({ reducer, preloadedState: persistedStore })
export type TStore = ReturnType<typeof store.getState>
store.subscribe(() => {
  // persist your state
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
