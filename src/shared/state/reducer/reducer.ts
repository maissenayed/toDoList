import { authenticationReducer } from '../slices/authentication.slice'
import { toDoListReducer } from '../slices/toDoList.slice'

const rootReducer = {
  authenticationReducer,
  toDoListReducer,
  // another reducers (if we have)
}
export default rootReducer
