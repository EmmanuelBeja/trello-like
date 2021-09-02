import React from 'react'
import ListItem from './ListItem'
import { Col } from 'reactstrap'

const List = ({ list }) => {
  return (
    <Col lg="3" md="3" sm="12" xs="12">
      {list.name}
      {list.items.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem item={item} />
        </React.Fragment>
      ))}
    </Col>
  )
}

export default List
