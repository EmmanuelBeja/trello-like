const getLists = () => {
  return Promise.resolve({
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
}

export const listsService = {
  getLists,
}
