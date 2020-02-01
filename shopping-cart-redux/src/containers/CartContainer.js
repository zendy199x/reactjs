import React, {Component} from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import Cart from '../components/Cart'

class CartContainer extends Component {
	render() {
		const {cart} = this.props
		console.log(cart)
		return <Cart/>
	}
}

CartContainer.propTypes = {
	cart: PropTypes.arrayOf(
		PropTypes.shape({
			product: PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				inventory: PropTypes.number.isRequired,
				rating: PropTypes.number.isRequired
			}).isRequired,
			quantity: PropTypes.number.isRequired
		})
	).isRequired
}

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps, null)(CartContainer)
