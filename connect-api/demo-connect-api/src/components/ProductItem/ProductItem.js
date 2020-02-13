import React, {Component} from "react"
import {Link} from "react-router-dom"

class ProductItem extends Component {
	onDelete = id => {
		// eslint-disable-next-line no-restricted-globals
		if (confirm("Chắc chắn xoá ?")) {
			//eslint-disable-line
			this.props.onDelete(id)
		}
	}
	render() {
		const {product, index} = this.props
		const statusName = product.status ? "Còn hàng" : "Hết hàng"
		const statusClass = product.status ? "warning" : "default"
		return (
			<tr>
				<td>{index + 1}</td>
				<td>{product.id}</td>
				<td>{product.name}</td>
				<td>{product.price}</td>
				<td>
					<span className={`label label-${statusClass}`}>{statusName}</span>
				</td>
				<td>
					<Link
						to={`/product/${product.id}/edit`}
						className="btn btn-success mr-10"
					>
						Sửa
					</Link>
					<button
						type="button"
						className="btn btn-danger"
						onClick={() => this.onDelete(product.id)}
					>
						Xóa
					</button>
				</td>
			</tr>
		)
	}
}

export default ProductItem
