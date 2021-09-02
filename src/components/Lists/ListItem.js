import React from 'react'

const ListItem = ({ item }) => {
  console.log({ item })
  return <div>- {item.name}</div>
}

export default ListItem
