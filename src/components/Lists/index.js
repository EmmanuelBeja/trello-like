import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import List from './List'
import AddList from './AddList'
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

  // handle dragging and dropping
  useEffect(() => {
    if (lists) {
      const cards = document.querySelectorAll('#board .card-item')
      const columns = document.querySelectorAll('#board .lists')
      let movingCard = null
      let itemParentId = null
      let itemId = null
      ;[].forEach.call(cards, function (card) {
        card.addEventListener(
          'dragstart',
          (e) => {
            itemParentId = e.target.closest('.lists').id
            movingCard = e.target
            itemId = movingCard.id
            e.target.classList.add('dragging')
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.setData('text/html', e.target.innerHTML)
          },
          false
        )
        card.addEventListener(
          'dragend',
          (e) => {
            ;[].forEach.call(columns, function (column) {
              if (column.classList.contains('over')) {
                column.classList.remove('over')
              }
            })
            if (movingCard && movingCard.classList.contains('dragging')) {
              movingCard.classList.remove('dragging')
            }
            movingCard = null
          },
          false
        )
      })

      ;[].forEach.call(columns, function (column) {
        column.addEventListener(
          'dragenter',
          (e) => {
            if (movingCard && e.target && movingCard.parentNode.parentNode !== e.target) {
              if (e.target.classList) {
                e.target.classList.add('over')
              }
            }
          },
          false
        )

        column.addEventListener(
          'dragover',
          (e) => {
            if (e.preventDefault) {
              e.preventDefault()
            }
            e.dataTransfer.dropEffect = 'move'
            return false
          },
          false
        )

        column.addEventListener(
          'dragleave',
          (e) => {
            if (e.target && e.target.classList) {
              e.target.classList.remove('over')
            }
          },
          false
        )

        column.addEventListener(
          'drop',
          (e) => {
            e.preventDefault()
            if (e.stopPropagation) {
              e.stopPropagation()
            }
            const newHostElement = e.target.closest('.lists')
            if (movingCard && newHostElement) {
              dispatch(listsActions.handleDragandDrop(itemParentId, itemId, newHostElement.id))

              // remove over class if there
              const overFound = newHostElement.classList.value.includes('over')
              if (e.target && e.target.classList && overFound) {
                e.target.classList.remove('over')
              }
            }
            return false
          },
          false
        )
      })
    }
  })

  return (
    <Row className="lists-container" id="board">
      {loading && (
        <div className="d-flex justify-content-center">
          <ProgressCircular indeterminate color="var(--primary)" />
        </div>
      )}
      {lists.map((list, index) => (
        <React.Fragment key={index}>
          <List list={list} />
        </React.Fragment>
      ))}
      {lists.length < 4 && !loading && <AddList />}
    </Row>
  )
}

export default Lists
