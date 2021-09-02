import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import List from './List'
import { Row } from 'reactstrap'
import { ProgressCircular } from 'ui-neumorphism'

import { listsActions } from './actions'
import './Lists.scss'

const Lists = () => {
  const dispatch = useDispatch()
  const { loading, lists: listsData } = useSelector((state) => state.lists)

  const [lists, setLists] = useState([])

  useEffect(() => {
    dispatch(listsActions.getLists())
  }, [])

  useEffect(() => {
    listsData && setLists((prevState) => listsData)
  }, [listsData])

  return (
    <Row className="lists-container">
      {loading && <ProgressCircular indeterminate color="var(--primary)" />}
      {lists.map((list, index) => (
        <React.Fragment key={index}>
          <List list={list} />
        </React.Fragment>
      ))}
    </Row>
  )
}

export default Lists
