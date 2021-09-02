import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import CardItem from './CardItem'
import { Dialog, Button, Card } from 'ui-neumorphism'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'

import { listsActions } from './actions'

const List = ({ list }) => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [showAddItemModal, setShowAddItemModal] = useState(false)
  const [value, setValue] = useState(list.name)
  const [newItem, setNewItem] = useState('')

  const handleEdit = () => {
    if (value === list.name) {
      toast.info('Nothing changed')
      return true
    }
    dispatch(listsActions.handleEditList(list.id, value))
  }

  const handleDelete = () => dispatch(listsActions.handleDeleteList(list.id))

  const handleAddItem = () => {
    if (!newItem) {
      toast.error('Ensure field is filled')
      return true
    }
    dispatch(listsActions.handleAddItem(list.id, newItem))
  }

  return (
    <Col lg="3" md="3" sm="12" xs="12" className="lists">
      <Card className="card px-2 pt-2 pb-5" elevation={4}>
        <Row className="lists-header">
          <Col lg="8" md="8" sm="12" xs="12">
            <h5>{list.name}</h5>
          </Col>
          <Col lg="4" md="4" sm="12" xs="12" className="lists-header__actions">
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
        </Row>
        {list.items.map((item, index) => (
          <React.Fragment key={index}>
            <CardItem item={item} listId={list.id} />
          </React.Fragment>
        ))}
        <br />
        <Button onClick={() => setShowAddItemModal(true)}>Add Activity</Button>
      </Card>

      <Dialog visible={showModal} onClose={() => setShowModal(false)} className="dialog">
        <Card className="dialog-card p-3">
          <>
            <FormGroup>
              <Label for="list">List Name</Label>
              <Input
                type="text"
                name="list"
                id="list"
                placeholder={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </FormGroup>
            <br />
            <Button onClick={() => handleEdit()}>Submit</Button>
          </>
        </Card>
      </Dialog>

      <Dialog
        visible={showAddItemModal}
        onClose={() => setShowAddItemModal(false)}
        className="dialog"
      >
        <Card className="dialog-card p-3">
          <>
            <FormGroup>
              <Label for="item">New Item</Label>
              <Input
                type="text"
                name="item"
                id="item"
                placeholder={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
            </FormGroup>
            <br />
            <Button onClick={() => handleAddItem()}>Submit</Button>
          </>
        </Card>
      </Dialog>
    </Col>
  )
}

export default List
