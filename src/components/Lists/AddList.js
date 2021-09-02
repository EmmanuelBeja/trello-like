import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Dialog, Button, Card } from 'ui-neumorphism'
import { Col, FormGroup, Label, Input } from 'reactstrap'
import { toast } from 'react-toastify'

import { listsActions } from './actions'

const AddList = () => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [newList, setNewList] = useState('')

  const handleAddList = () => {
    if (!newList) {
      toast.error('Ensure field is filled')
      return true
    }
    dispatch(listsActions.handleAddList(newList))
  }

  return (
    <Col lg="3" md="3" sm="12" xs="12" className="lists">
      <Card className="card px-2 py-2" elevation={4}>
        <Button type="button" onClick={() => setShowModal(true)}>
          Add New List
        </Button>
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
                placeholder="New List..."
                onChange={(e) => setNewList(e.target.value)}
              />
            </FormGroup>
            <br />
            <Button type="button" onClick={() => handleAddList()}>
              Submit
            </Button>
          </>
        </Card>
      </Dialog>
    </Col>
  )
}

export default AddList
