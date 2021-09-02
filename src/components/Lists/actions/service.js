const db = () => {
  if (localStorage.getItem('trello-db') === null || !localStorage.getItem('trello-db')) {
    // create mock db
    localStorage.setItem('trello-db', JSON.stringify({ data: [] }))
    return { data: [] }
  }

  return JSON.parse(localStorage.getItem('trello-db'))
}

const getLists = () => Promise.resolve(db())

const handleAddList = (value) => {
  const lists = db()
  const listsUpdated = lists.data
  listsUpdated.push({
    id: listsUpdated.length + 1,
    name: value,
    items: [],
  })

  localStorage.setItem('trello-db', JSON.stringify({ data: listsUpdated }))

  return Promise.resolve({ data: listsUpdated })
}

const handleEditList = (listId, value) => {
  const lists = db()
  const listsUpdated = []

  lists.data.map((list, index) => {
    if (Number(list.id) === Number(listId)) {
      listsUpdated.push({
        id: list.id,
        name: value,
        items: list.items,
      })
    } else {
      listsUpdated.push(list)
    }
  })

  localStorage.setItem('trello-db', JSON.stringify({ data: listsUpdated }))

  return Promise.resolve({ data: listsUpdated })
}

const handleDeleteList = (listId) => {
  const lists = db()
  const listsUpdated = lists.data.filter((item) => item.id !== listId)

  localStorage.setItem('trello-db', JSON.stringify({ data: listsUpdated }))

  return Promise.resolve({ data: listsUpdated })
}

const handleAddItem = (listId, name) => {
  const lists = db()
  const listsUpdated = []

  lists.data.map((list, index) => {
    if (Number(list.id) === Number(listId)) {
      const items = list.items
      items.push({
        id: list.items.length + 1,
        name: name,
      })

      listsUpdated.push({
        id: list.id,
        name: list.name,
        items: items,
      })
    } else {
      listsUpdated.push(list)
    }
  })

  localStorage.setItem('trello-db', JSON.stringify({ data: listsUpdated }))

  return Promise.resolve({ data: listsUpdated })
}

const handleEditItem = (itemId, listId, value) => {
  const lists = db()
  const listsUpdated = []

  lists.data.map((list, index) => {
    if (Number(list.id) === Number(listId)) {
      const items = []
      list.items.map((item) => {
        if (Number(item.id) === Number(itemId)) {
          items.push({
            id: item.id,
            name: value,
          })
        } else {
          items.push(item)
        }
      })

      listsUpdated.push({
        id: list.id,
        name: list.name,
        items: items,
      })
    } else {
      listsUpdated.push(list)
    }
  })

  localStorage.setItem('trello-db', JSON.stringify({ data: listsUpdated }))

  return Promise.resolve({ data: listsUpdated })
}

const handleDeleteItem = (itemId, listId) => {
  const lists = db()
  const listsUpdated = []

  lists.data.map((list, index) => {
    if (Number(list.id) === Number(listId)) {
      const items = list.items.filter((item) => item.id !== itemId)

      listsUpdated.push({
        id: list.id,
        name: list.name,
        items: items,
      })
    } else {
      listsUpdated.push(list)
    }
  })

  localStorage.setItem('trello-db', JSON.stringify({ data: listsUpdated }))

  return Promise.resolve({ data: listsUpdated })
}

const handleDragandDrop = (itemParentId, itemId, newHostId) => {
  const lists = db()
  const listsUpdated = []

  const targetListItems = lists.data.filter((item) => Number(item.id) === Number(itemParentId))[0]
  const targetItem = targetListItems.items.filter((item) => Number(item.id) === Number(itemId))[0]

  lists.data.map((list, index) => {
    if (Number(list.id) === Number(newHostId)) {
      // add item to new host
      const items = list.items
      items.push({
        id: items.length + 1,
        name: targetItem.name,
      })

      listsUpdated.push({
        id: list.id,
        name: list.name,
        items: items,
      })
    } else if (Number(list.id) === Number(itemParentId)) {
      // remove item from parent/old host
      const items = list.items
      const updatedItems = items.filter((item) => Number(item.id) !== Number(itemId))

      listsUpdated.push({
        id: list.id,
        name: list.name,
        items: updatedItems,
      })
    } else {
      listsUpdated.push(list)
    }
  })

  localStorage.setItem('trello-db', JSON.stringify({ data: listsUpdated }))

  return Promise.resolve({ data: listsUpdated })
}

export const listsService = {
  getLists,
  handleAddList,
  handleEditList,
  handleDeleteList,
  handleAddItem,
  handleEditItem,
  handleDeleteItem,
  handleDragandDrop,
}
