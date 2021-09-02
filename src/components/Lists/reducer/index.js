import * as types from '../actions/actionTypes'

const initialState = {
  lists: [],
  loading: false,
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LISTS_REQUEST:
      return {
        ...state,
        lists: [],
        loading: true,
      }

    case types.GET_LISTS_SUCCESS:
      return {
        ...state,
        lists: action.data,
        loading: false,
      }

    case types.GET_LISTS_FAILED:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}

export default searchReducer
