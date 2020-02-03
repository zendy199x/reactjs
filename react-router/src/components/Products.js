import React, {Component} from "react"
import {NavLink, Route} from "react-router-dom"
import Product from "./Product"

class Products extends Component {
	render() {
		const products = [
			{
				id: 1,
				slug: "iphone7plus",
				name: "iPhone 7 Plus",
				price: 3500000
			},
			{
				id: 1,
				slug: "iphone8plus",
				name: "iPhone X8 Plus",
				price: 40000000
			},
			{
				id: 1,
				slug: "iphone11promax",
				name: "iPhone 11 Pro Max",
				price: 45000000
			}
		]

		const {match} = this.props //this.props.match
		const url = match.url

		const result = products.map((product, index) => {
			return (
				<NavLink to={`${url}/${product.slug}`} key={index}>
					<li className="list-group-item">
						{product.id} - {product.name} - {product.price}
					</li>
				</NavLink>
			)
		})

		const {location} = this.props
		console.log(location)

		return (
			<div className="container">
				<h1>Danh sách sản phẩm</h1>
				<div className="row">
					<ul className="list-group">{result}</ul>
				</div>
				<div className="row">
					<Route path="/products/:name" component={Product} />
				</div>
			</div>
		)
	}
}

export default Products
