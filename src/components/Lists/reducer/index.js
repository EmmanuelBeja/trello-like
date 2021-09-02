import * as types from '../actions/actionTypes'

const initialState = {
  lists: [],
  loading: false,
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DRAG_DROP_ITEM_REQUEST:
      return {
        ...state,
        lists: [],
        loading: true,
      }
    case types.DRAG_DROP_ITEM_SUCCESS:
      return {
        ...state,
        lists: action.data,
        loading: false,
      }
    case types.DRAG_DROP_ITEM_FAILED:
      return {
        ...state,
        loading: false,
      }

    case types.ADD_LIST_REQUEST:
      return {
        ...state,
        lists: [],
        loading: true,
      }
    case types.ADD_LIST_SUCCESS:
      return {
        ...state,
        lists: action.data,
        loading: false,
      }
    case types.ADD_LIST_FAILED:
      return {
        ...state,
        loading: false,
      }

    case types.EDIT_LIST_REQUEST:
      return {
        ...state,
        lists: [],
        loading: true,
      }
    case types.EDIT_LIST_SUCCESS:
      return {
        ...state,
        lists: action.data,
        loading: false,
      }
    case types.EDIT_LIST_FAILED:
      return {
        ...state,
        loading: false,
      }

    case types.DELETE_LIST_REQUEST:
      return {
        ...state,
        lists: [],
        loading: true,
      }
    case types.DELETE_LIST_SUCCESS:
      return {
        ...state,
        lists: action.data,
        loading: false,
      }
    case types.DELETE_LIST_FAILED:
      return {
        ...state,
        loading: false,
      }

    case types.ADD_LIST_ITEM_REQUEST:
      return {
        ...state,
        lists: [],
        loading: true,
      }
    case types.ADD_LIST_ITEM_SUCCESS:
      return {
        ...state,
        lists: action.data,
        loading: false,
      }
    case types.ADD_LIST_ITEM_FAILED:
      return {
        ...state,
        loading: false,
      }

    case types.EDIT_LIST_ITEM_REQUEST:
      return {
        ...state,
        lists: [],
        loading: true,
      }
    case types.EDIT_LIST_ITEM_SUCCESS:
      return {
        ...state,
        lists: action.data,
        loading: false,
      }
    case types.EDIT_LIST_ITEM_FAILED:
      return {
        ...state,
        loading: false,
      }

    case types.DELETE_LIST_ITEM_REQUEST:
      return {
        ...state,
        lists: [],
        loading: true,
      }
    case types.DELETE_LIST_ITEM_SUCCESS:
      return {
        ...state,
        lists: action.data,
        loading: false,
      }
    case types.DELETE_LIST_ITEM_FAILED:
      return {
        ...state,
        loading: false,
      }

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
