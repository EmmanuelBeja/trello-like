import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ListItem, Dialog, Button, Card } from 'ui-neumorphism'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'

import { listsActions } from './actions'

const CardItem = ({ item, listId }) => {
  return (
    <ListItem
      link
      dense
      raised
      subtitle={<Content item={item} listId={listId} />}
      className="list-item"
    />
  )
}

const Content = ({ item, listId }) => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [value, setValue] = useState(item.name)

  const handleEdit = () => {
    if (value === item.name) {
      toast.info('Nothing changed')
      return true
    }
    dispatch(listsActions.handleEditItem(item.id, listId, value))
  }

  const handleDelete = () => dispatch(listsActions.handleDeleteItem(item.id, listId))

  return (
    <Row>
      <Col lg="8" md="8" sm="12" xs="12">
        {item.name}
      </Col>
      <Col lg="4" md="4" sm="12" xs="12" className="actions">
        <FontAwesomeIcon
          className="icon-edit"
          onMouseDown={() => setShowModal(true)}
          icon={faEdit}
        />{' '}
        <FontAwesomeIcon
          className="icon-delete"
          onMouseDown={() => handleDelete()}
          icon={faTrash}
        />
      </Col>

      <Dialog visible={showModal} onClose={() => setShowModal(false)} className="dialog">
        <Card className="dialog-card p-3">
          <>
            <FormGroup>
              <Label for="activity">Activity</Label>
              <Input
                type="text"
                name="activity"
                id="activity"
                placeholder={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </FormGroup>
            <br />
            <Button onClick={() => handleEdit()}>Submit</Button>
          </>
        </Card>
      </Dialog>
    </Row>
  )
}

export default CardItem
