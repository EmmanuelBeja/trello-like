import { combineReducers } from 'redux'
import listsReducer from '../components/Lists/reducer'

const allReducers = combineReducers({
  lists: listsReducer,
})

const rootReducer = (state, action) => allReducers(state, action)

export default rootReducer
