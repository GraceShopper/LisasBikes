import React from 'react'
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'
import store from 'App/app/store'

export default (props) => {
  return (
    <div className="well">
    <form className="form-horizontal" onSubmit={ props.methods.handleSubmit }>
      <fieldset>
        <legend>Payment Information</legend>
        <div className="form-group">
          <label className="col-xs-3 control-label">Card Number</label>
          <div className="col-xs-3">
            <input name="cardNum" onChange={ props.methods.handleChange } className="form-control"
            type="text"/>
          </div>
          <label className="col-xs-3 control-label ">Name on Card</label>
          <div className="col-xs-3">
            <input name="nameOnCard" onChange={ props.methods.handleChange } className="form-control"
            type="text"/>
          </div>
          <label className="col-xs-3 control-label">Expiration</label>
          <div className="col-xs-3">
            <input name="expiration" onChange={ props.methods.handleChange } className="form-control"
            type="text"/>
          </div>
          <label className="col-xs-3 control-label">Security Code</label>
          <div className="col-xs-3">
            <input name="securityCode" onChange={ props.methods.handleChange } className="form-control"
            type="text"/>
          </div>
          <label className="col-xs-3 control-label">Billing Zip Code</label>
          <div className="col-xs-3">
            <input name="billingZip" onChange={ props.methods.handleChange } className="form-control"
            type="text"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-4">
            <button disabled={ props.methods.shouldBeDisabled } type="submit"
            className="btn btn-success">Place Order</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  )
}
