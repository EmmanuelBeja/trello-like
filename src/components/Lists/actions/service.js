const getLists = () => {
  if (localStorage.getItem('trello-db') === null) {
    // create mock db
    localStorage.setItem(
      'trello-db',
      JSON.stringify({
        data: [
          {
            id: 1,
            name: 'To Do',
            items: [
              {
                id: 1,
                name: 'Source seafood',
              },
              {
                id: 2,
                name: 'Staffing schedule',
              },
            ],
          },
          {
            id: 2,
            name: 'In Progress',
            items: [],
          },
          {
            id: 3,
            name: 'Done',
            items: [],
          },
        ],
      })
    )
  }

  const lists = JSON.parse(localStorage.getItem('trello-db'))
  return Promise.resolve(lists)
}

const handleAddList = (value) => {
  const lists = JSON.parse(localStorage.getItem('trello-db'))
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
  const lists = JSON.parse(localStorage.getItem('trello-db'))
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
  const lists = JSON.parse(localStorage.getItem('trello-db'))
  const listsUpdated = lists.data.filter((item) => item.id !== listId)

  localStorage.setItem('trello-db', JSON.stringify({ data: listsUpdated }))

  return Promise.resolve({ data: listsUpdated })
}

const handleAddItem = (listId, name) => {
  const lists = JSON.parse(localStorage.getItem('trello-db'))
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
  const lists = JSON.parse(localStorage.getItem('trello-db'))
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
  const lists = JSON.parse(localStorage.getItem('trello-db'))
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

export const listsService = {
  getLists,
  handleAddList,
  handleEditList,
  handleDeleteList,
  handleAddItem,
  handleEditItem,
  handleDeleteItem,
}
