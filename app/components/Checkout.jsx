import React from 'react'
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import store from 'App/app/store'

import ShippingForm from './ShippingForm'
import PaymentForm from './PaymentForm'

class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shipName: '',
      address: '',
      city: '',
      state: '',
      shippingZip: '',
      cardNum: '',
      nameOnCard: '',
      billingZip: '',
      expiration: '',
      securityCode: '',
      shouldBeDisabled: true,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()

    this.setState({
      shipName: '',
      address: '',
      city: '',
      state: '',
      shippingZip: '',
      cardNum: '',
      nameOnCard: '',
      billingZip: '',
      expiration: '',
      securityCode: '',
      shouldBeDisabled: true,
    })

    browserHistory.push('/confirmation')
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      shouldBeDisabled: this.shouldBeDisabled()
    })
  }

  shouldBeDisabled() {
    let stateKeys = Object.keys(this.state)
    for (let i = 0; i < stateKeys.length; i++) {
      if (this.state[stateKeys[i]] === '') return true
    }
    return false
  }

  render() {
    const props = {
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      shouldBeDisabled: this.state.shouldBeDisabled
    }

    return (
      <div>
        <ShippingForm methods={ props } />
        <PaymentForm methods={ props } />
      </div>
    )
  }
}

export default connect(
  null,
  {}
)(Checkout)
