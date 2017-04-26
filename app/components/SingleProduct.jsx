import React from 'react'
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'
import store from 'App/app/store'
// *------------------- COMPONENT -----------------*//
class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      size: '',
      quantity: 0
    }
    this.inputColorChange = this.inputColorChange.bind(this)
    this.inputSizeChange = this.inputSizeChange.bind(this)
    this.inputQuantityChange = this.inputQuantityChange.bind(this)
  }

  inputColorChange(e) {
    this.setState({
      color: e.target.color
    })
  }
  inputSizeChange(e) {
    this.setState({
      size: e.target.size
    })
  }
  inputQuantityChange(e) {
    this.setState({
      quantity: e.target.quantity
    })
  }
  render() {
    const product = this.props.singleProduct
    const reviews = this.props.reviews


    return (
      <div>
        <div className = "col-sm-3">
          <a className="carousel-item">
          {
          product.images && product.images.map(image => (
          <img src={ image }  />
          ))
          }
          </a>
        </div>
        <div className="col-lg-6">
          <h2>{ product.name }</h2>
          <p>Price: $ { product.price/100 }</p>
          <p className = "tb">{ product.description }</p>
          <form>
            <div className = "form-group">
              <label>
                Color
                <select className = "form-control" name = 'color' onChange = { this.inputColorChange } >
                  {
                    product.color && product.color.map(color => (
                      <option  >{ color }</option>
                    ))
                  }
                </select>
              </label>
            </div>
            <div className = "form-group">
              <label>
                Size
                <select className = "form-control" name = 'size ' onChange = { this.inputSizeChange }>
                  {
                    product.size && product.size.map(size => (
                      <option>{ size }</option>
                    ))
                  }
                </select>
              </label>
            </div>
            <div class="form-group">
              <label for="quantity">Quantity
                <input class="form-control" name = 'quantity' onChange = { this.inputQuantityChange } />
              </label>
            </div>
            <hr/>
            <button className = "btn btn-success"
                    disabled={ this.state.color === '' || this.state.size === '' || this.state.quantity === 0 } >
              ADD TO CART </button>
          </form>
        </div>
        <br/>
          <div className="col-md-6">
            <ul className= "list-group">
              {
                reviews && reviews.map(review => (
                  <div key={ review.id }>
                    <h3>{ review.title }</h3>
                    <p>{ review.num_stars }</p>
                    <p>{ review.content }</p>
                  </div>
                ))
              }
            </ul>
          </div>
      </div>
  )
  }
  }
    /* ------------------- CONTAINER ----------------- */
export default connect(
state => ({singleProduct: state.product.selectedProduct}),
  /**
   *   function onSubmitHandle is passed from main.jsx
   *  which is dispatching 'createOrder' reducer .
   *
   *   When user hits 'add to cart' button, onSubmitHandle will
   *  be triggered.
   *
   */
// dispatch => ({ onSubmitHandle: this.props.onSubmitHandle })
)(SingleProduct)
