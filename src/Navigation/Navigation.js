import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/todolist'>ToDoList</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default Navigation