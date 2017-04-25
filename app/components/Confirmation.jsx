import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import store from 'App/app/store'

export default (props) => {
  return (
  <div className="well">
    <div className="well text-center">
      <div>Thank you for the money!</div>
      <div>We can't wait to use it to buy fine wines and cheeses.</div>
      <div><Link to='/'>Shop some more? </Link></div>
    </div>
  </div>
  )
}
