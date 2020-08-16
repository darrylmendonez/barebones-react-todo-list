import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <ul>
      <li>
        <NavLink className='nav-link' exact to={'/class-component'}>
          Class Component
        </NavLink>
      </li>
      <li>
        <NavLink className='nav-link' exact to={'/function-component'}>
          Function Component
        </NavLink>
      </li>
    </ul>
  );
}
 
export default Home;