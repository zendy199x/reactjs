import React, {Component} from "react"
import CartItem from "./CartItem"
import CartResult from "./CartResult"

class Cart extends Component {
	render() {
		const {children} = this.props
		return (
			<section className="section">
				<div className="table-responsive">
					<table className="table product-table">
						<thead>
							<tr>
								<th></th>
								<th>Sản Phẩm</th>
								<th>Giá</th>
								<th>Số Lượng</th>
								<th>Tổng Cộng</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{children}
							<CartResult />
						</tbody>
					</table>
				</div>
			</section>
		)
	}
}

export default Cart
