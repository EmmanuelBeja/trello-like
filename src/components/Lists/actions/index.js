import * as types from './actionTypes'
import { listsService } from './service'

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

const handleAddList = (value) => {
  return (dispatch) => {
    dispatch(request(null, types.ADD_LIST_REQUEST))
    listsService.handleAddList(value).then(
      (res) => {
        setTimeout(() => {
          dispatch(success(res.data, types.ADD_LIST_SUCCESS))
        }, 1200)
      },
      (error) => {
        dispatch(failure(error, types.ADD_LIST_FAILED))
      }
    )
  }
}

const handleEditList = (itemId, listId, value) => {
  return (dispatch) => {
    dispatch(request(null, types.EDIT_LIST_REQUEST))
    listsService.handleEditList(itemId, listId, value).then(
      (res) => {
        setTimeout(() => {
          dispatch(success(res.data, types.EDIT_LIST_SUCCESS))
        }, 1200)
      },
      (error) => {
        dispatch(failure(error, types.EDIT_LIST_FAILED))
      }
    )
  }
}

const handleDeleteList = (itemId, listId) => {
  return (dispatch) => {
    dispatch(request(null, types.DELETE_LIST_REQUEST))
    listsService.handleDeleteList(itemId, listId).then(
      (res) => {
        setTimeout(() => {
          dispatch(success(res.data, types.DELETE_LIST_SUCCESS))
        }, 1200)
      },
      (error) => {
        dispatch(failure(error, types.DELETE_LIST_FAILED))
      }
    )
  }
}

const handleAddItem = (listId, value) => {
  return (dispatch) => {
    dispatch(request(null, types.ADD_LIST_ITEM_REQUEST))
    listsService.handleAddItem(listId, value).then(
      (res) => {
        setTimeout(() => {
          dispatch(success(res.data, types.ADD_LIST_ITEM_SUCCESS))
        }, 1200)
      },
      (error) => {
        dispatch(failure(error, types.ADD_LIST_ITEM_FAILED))
      }
    )
  }
}

const handleEditItem = (itemId, listId, value) => {
  return (dispatch) => {
    dispatch(request(null, types.EDIT_LIST_ITEM_REQUEST))
    listsService.handleEditItem(itemId, listId, value).then(
      (res) => {
        setTimeout(() => {
          dispatch(success(res.data, types.EDIT_LIST_ITEM_SUCCESS))
        }, 1200)
      },
      (error) => {
        dispatch(failure(error, types.EDIT_LIST_ITEM_FAILED))
      }
    )
  }
}

const handleDeleteItem = (itemId, listId) => {
  return (dispatch) => {
    dispatch(request(null, types.DELETE_LIST_ITEM_REQUEST))
    listsService.handleDeleteItem(itemId, listId).then(
      (res) => {
        setTimeout(() => {
          dispatch(success(res.data, types.DELETE_LIST_ITEM_SUCCESS))
        }, 1200)
      },
      (error) => {
        dispatch(failure(error, types.DELETE_LIST_ITEM_FAILED))
      }
    )
  }
}

const handleDragandDrop = (itemParentId, itemId, newHostId) => {
  return (dispatch) => {
    dispatch(request(null, types.DRAG_DROP_ITEM_REQUEST))
    listsService.handleDragandDrop(itemParentId, itemId, newHostId).then(
      (res) => {
        setTimeout(() => {
          dispatch(success(res.data, types.DRAG_DROP_ITEM_SUCCESS))
        }, 1200)
      },
      (error) => {
        dispatch(failure(error, types.DRAG_DROP_ITEM_FAILED))
      }
    )
  }
}

export const listsActions = {
  getLists,
  handleAddList,
  handleEditList,
  handleDeleteList,
  handleAddItem,
  handleEditItem,
  handleDeleteItem,
  handleDragandDrop,
}
