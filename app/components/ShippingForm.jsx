import React from 'react'
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'
import store from 'App/app/store'

export default (props) => {
  return (
  <div className="well">
    <form className="form-horizontal">
      <fieldset>
        <legend>Your Information</legend>
        <div className="form-group">
          <label className="col-xs-3 control-label">Name</label>
          <div className="col-xs-3">
            <input name="shipName" onChange={ props.methods.handleChange } className="form-control"
            type="text"/>
          </div>
          <label className="col-xs-3 control-label ">Address</label>
          <div className="col-xs-3">
            <input name="address" onChange={ props.methods.handleChange } className="form-control"
            type="text"/>
          </div>
          <label className="col-xs-3 control-label">City</label>
          <div className="col-xs-3">
            <input name="city" onChange={ props.methods.handleChange } className="form-control"
            type="text"/>
          </div>
          <label className="col-xs-3 control-label">State</label>
          <div className="col-xs-3">
            <input name="state" onChange={ props.methods.handleChange } className="form-control"
            type="text"/>
          </div>
          <label className="col-xs-3 control-label">Zip Code</label>
          <div className="col-xs-3">
            <input name="shippingZip" onChange={ props.methods.handleChange } className="form-control"
            type="text"/>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  )
}
