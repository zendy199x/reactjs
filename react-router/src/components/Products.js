import React, {Component} from "react"
import  {NavLink} from "react-router-dom"

class Products extends Component {
	render() {
		const products = [
			{
				id: 1,
				name: "iPhone 7 Plus",
				price: 3500000
			},
			{
				id: 1,
				name: "iPhone X8 Plus",
				price: 40000000
			},
			{
				id: 1,
				name: "iPhone 11 Pro Max",
				price: 45000000
			}
		]

		const {match} = this.props
		console.log(match)

		let result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<NavLink key={index} to="">
						<li className="list-group-item">{product.id} - {product.name} - {product.price}</li>
					</NavLink>
				)
			})
		}

		return (
			<div className="container">
				<h1>Danh sách sản phẩm</h1>
				<div>
					<div className="row">
						<ul className="list-group">
							{result}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Products
