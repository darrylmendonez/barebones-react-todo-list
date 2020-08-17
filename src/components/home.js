import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <ul>
      <li>
        <NavLink className='nav-link' exact to={'/class-component'}>
          To-Do List app via a Class Component
        </NavLink>
      </li>
      <li>
        <NavLink className='nav-link' exact to={'/function-component'}>
          To-Do List app via a Function Component
        </NavLink>
      </li>
    </ul>
  );
}
 
export default Home;