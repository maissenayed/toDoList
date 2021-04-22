import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum ToDoStatus {
  complete = 'Complete',
  inComplete = 'in complete',
}

export type ToDoType = {
  id?: string
  title: string
  description: string
  status: ToDoStatus
}

const initialState: ToDoType[] = []
const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    create(state, action) {
      // push a new to do to the to do list
      state.push(action.payload)
    },
    loader(_, { payload }) {
      //  returns a new value to replace the old one
      return payload
    },
    remove(state, { payload }: PayloadAction<ToDoType>) {
      // Construct a new result array immutably and return it
      return state.filter((todo) => todo.id !== payload?.id)
    },
    updateTodo(state, action) {
      const todo = state.find((t) => t.id === action.payload?.id)

      if (todo) {
        todo.status = action.payload.status
        todo.title = action.payload.title
        todo.description = action.payload.description
        // This object is still wrapped in a Proxy, so we can "mutate" it
      }
    },
    changeStatus(state, action) {
      const todo: ToDoType = state.find((t) => t.id === action.payload.id)
      if (todo) {
        // This object is still wrapped in a Proxy, so we can "mutate" it
        todo.status = action.payload.status
      }
    },
  },
})

export const toDoListReducer = toDoListSlice.reducer
export const {
  updateTodo,
  create,
  loader,
  remove,
  changeStatus,
} = toDoListSlice.actions
