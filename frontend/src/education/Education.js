import React from 'react'
import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <div>
      <li>
        <Link to ='monitoring'>
          <span>Monitoring</span>
        </Link>
      </li>
      <li>
        <Link to ='proceedure'>
          <span>Proceedure</span>
        </Link>
      </li>
      <li>
        <Link to ='recovery'>
          <span>Recovery</span>
        </Link>
      </li>
    </div>
  )
}

export default Education