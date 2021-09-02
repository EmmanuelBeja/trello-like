import * as types from './actionTypes'
import { listsService } from './service'
// import { toast } from 'react-toastify'

const request = (data, type) => ({ type, data })
const success = (data, type) => ({ type, data })
const failure = (error, type) => ({ type, error })

const getLists = () => {
  return (dispatch) => {
    dispatch(request(null, types.GET_LISTS_REQUEST))
    listsService.getLists().then(
      (res) => {
        setTimeout(() => {
          dispatch(success(res.data, types.GET_LISTS_SUCCESS))
        }, 1200)
      },
      (error) => {
        dispatch(failure(error, types.GET_LISTS_FAILED))
      }
    )
  }
}

export const listsActions = {
  getLists,
}
