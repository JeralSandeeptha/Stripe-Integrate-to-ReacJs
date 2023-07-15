import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Payment Methods</h1>
        <Link to='/onetimepayment'>One Time Payment</Link>
    </div>
  )
}

export default Home