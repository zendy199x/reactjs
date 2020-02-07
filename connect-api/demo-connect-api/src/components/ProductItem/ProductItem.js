import React, {Component} from "react"

class ProductItem extends Component {
	render() {
		return (
			<tr>
				<td>1</td>
				<td>1</td>
				<td>iPhone X</td>
				<td>500</td>
				<td>
					<span className="label label-warning">Còn hàng</span>
				</td>
				<td>
					<button type="button" className="btn btn-success mr-10">
						Sửa
					</button>
					<button type="button" className="btn btn-danger">
						Xóa
					</button>
				</td>
			</tr>
		)
	}
}

export default ProductItem
