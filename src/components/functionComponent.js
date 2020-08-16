import React, { useState, useEffect } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

const FunctionComponent = () => {
  const [list, setList] = useState(
    [
      {
        id: 1,
        task: 'Create tasks',
        completed: false,
      },
      {
        id: 2,
        task: 'Read tasks',
        completed: false,
      },
      {
        id: 3,
        task: 'Mark complete',
        completed: false,
      },
      {
        id: 4,
        task: 'Delete tasks',
        completed: false,
      },
    ],
  )
  const [currentItem, setCurrentItem] = useState('')

  useEffect(() => {
    let localList = JSON.parse(localStorage.getItem('list'));
    if (localList !== null) {
      setList(localList)
    }
  }, []) // empty array as second argument will behave exaclty like componentDidMount

  const handleChange = e => {
    setCurrentItem(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // generate an unused id
    let newId = 1;
    let sortedListByIds = list.slice().sort((a, b) => (a.id - b.id))
    for (let i = 0; i < sortedListByIds.length; i++) {
      if (newId === sortedListByIds[i].id) {
        newId++
      }
    }
    setList(prevList => {
      const newItem = {
        id: newId,
        task: currentItem,
        completed: false,
      }
      return [...prevList, newItem]
    })
    setCurrentItem('')
  }

  const toggleCompleteStatus = id => {
    setList(list.map( item => item.id === id ? {...item, completed: !item.completed} : item))
  }

  const deleteTask = id => {
    let filteredList = list.filter( item => item.id !== id)
    setList([...filteredList])
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <Grid fluid>
      <Row>
        <Col xs={6} md={3}>
          <h3>Things to do:</h3>
          <ul style={{listStyleType: 'none'}}>
            {list.length ? (
              list.map( item => (
                <React.Fragment key={item.id}>
                  <li onClick={() => toggleCompleteStatus(item.id)} style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
                    {item.task}
                  </li> <button onClick={() => deleteTask(item.id)}>x</button>
                </React.Fragment>
              ))
            ) : (
              null
            )}
          </ul>
        </Col>
        <Col xs={6} md={6}>
          <h4>Add task:</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" value={currentItem} onChange={handleChange} />
          </form>
        </Col>
      </Row>
    </Grid>
  );
}
 
export default FunctionComponent;