import React, {Component} from "react"

class ProductItem extends Component {
	onDelete = id => {
		if (confirm("Chắc chắn xoá ?")) { //eslint-disable-line
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
					<button type="button" className="btn btn-success mr-10">
						Sửa
					</button>
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
