import React from 'react'

import { ListItem } from 'ui-neumorphism'
import { Row, Col } from 'reactstrap'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardItem = ({ item }) => {
  return <ListItem link dense raised subtitle={<Content item={item} />} className="list-item" />
}

const Content = ({ item }) => {
  const handleEdit = () => {}

  const handleDelete = () => {}

  return (
    <Row>
      <Col lg="8" md="8" sm="12" xs="12">
        {item.name}
      </Col>
      <Col lg="4" md="4" sm="12" xs="12" className="actions">
        <FontAwesomeIcon className="icon-edit" onMouseDown={() => handleEdit()} icon={faEdit} />{' '}
        <FontAwesomeIcon
          className="icon-delete"
          onMouseDown={() => handleDelete()}
          icon={faTrash}
        />
      </Col>
    </Row>
  )
}

export default CardItem
