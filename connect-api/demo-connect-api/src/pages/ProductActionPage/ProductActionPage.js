import React, {Component} from "react"
import ProductList from "./../../components/ProductList/ProductList"
import ProductItem from "./../../components/ProductItem/ProductItem"

class ProductActionPage extends Component {
	render() {
		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<form>
					<div className="form-group">
						<label>Tên sản phẩm</label>
						<input type="text" className="form-control" />
					</div>

					<div className="form-group">
						<label>Giá</label>
						<input type="number" className="form-control" />
					</div>

					<div className="form-group">
						<label>Trạng thái</label>
					</div>

					<div className="checkbox">
						<label>
							<input type="checkbox" />
							Còn hàng
						</label>
					</div>

					<button type="submit" className="btn btn-primary">
						Lưu lại
					</button>
				</form>
			</div>
		)
	}
}

export default ProductActionPage
