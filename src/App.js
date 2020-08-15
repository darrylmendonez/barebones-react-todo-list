import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          task: 'Buy milk',
          completed: false,
        },
        {
          id: 2,
          task: 'Clean room',
          completed: false,
        },
        {
          id: 3,
          task: 'Make dinner',
          completed: false,
        },
      ],
      currentItem: '',
    }
  }

  handleChange = e => {
    this.setState({currentItem: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()

    // generate an unused id
    let newId = 1;
    let sortedListByIds = this.state.list.slice().sort((a, b) => (a.id - b.id))
    for (let i = 0; i < sortedListByIds.length; i++) {
      if (newId === sortedListByIds[i].id) {
        newId++
      }
    }
    
    this.setState(prevState => {
      const newItem = {
        id: newId,
        task: prevState.currentItem,
        completed: false,
      }
      return {
        list: [...prevState.list, newItem],
        currentItem: '',
      }
    }, () => {
      console.log('state: ', this.state)
    })
  }

  toggleCompleteStatus = id => {
    this.setState(() => {
      return {
        list: this.state.list.map( item => item.id === id ? {...item, completed: !item.completed} : item)
      }
    })
  }

  deleteTask = id => {
    let filteredList = this.state.list.filter( item => item.id !== id)
    this.setState({
      list: [...filteredList]
    })
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            <h3>Things to do:</h3>
            <ul style={{listStyleType: 'none'}}>
              {this.state.list.length ? (
                this.state.list.map( item => (
                  <React.Fragment key={item.id}>
                    <li onClick={() => this.toggleCompleteStatus(item.id)} style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
                      {item.task}
                    </li> <button onClick={() => this.deleteTask(item.id)}>x</button>
                  </React.Fragment>
                ))
              ) : (
                null
              )}
            </ul>
          </Col>
          <Col xs={6} md={6}>
            <h4>Add item:</h4>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.currentItem} onChange={this.handleChange} />
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
