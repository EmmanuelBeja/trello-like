import React from 'react'

import CardItem from './CardItem'
import { Col } from 'reactstrap'
import { Card } from 'ui-neumorphism'

const List = ({ list }) => {
  return (
    <Col lg="3" md="3" sm="12" xs="12" className="lists">
      <Card className="card px-2 pt-2 pb-5" elevation={4}>
        <h5>{list.name}</h5>
        {list.items.map((item, index) => (
          <React.Fragment key={index}>
            <CardItem item={item} />
          </React.Fragment>
        ))}
      </Card>
    </Col>
  )
}

export default List
