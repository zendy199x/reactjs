import React, {Component} from "react"

class Product extends Component {
	render() {
		const {match} = this.props
		const name =  match.params.name
		return <div>Đây là trang giới thiệu sản phẩm {name}</div>
	}
}

export default Product
