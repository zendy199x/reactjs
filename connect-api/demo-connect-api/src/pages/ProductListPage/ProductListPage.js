import React, {Component} from "react"
import ProductList from "./../../components/ProductList/ProductList"
import ProductItem from "./../../components/ProductItem/ProductItem"
import {connect} from "react-redux"
import callApi from "./../../utils/apiCaller"
import {Link} from "react-router-dom"
import {actFetchProductsRequest} from "./../../actions/index"

class ProductListPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: []
		}
	}

	componentDidMount() {
		//chạy sau khi hàm render được chạy lần đầu tiên
		this.props.fetchAllProducts()
		// callApi('products', 'GET', null).then(res => {
		//     this.props.fetchAllProducts(res.data);
		// this.setState({
		//     products: res.data
		// })
		// });
	}

	onDelete = id => {
		const {products} = this.state
		callApi(`products/${id}`, "DELETE", null).then(res => {
			if (res.status === 200) {
				//OK
				const index = this.findIndex(products, id)
				if (index !== -1) {
					products.splice(index, 1)
					this.setState({
						products: products
					})
				}
			}
		})
	}

	findIndex = (products, id) => {
		let result = -1
		products.forEach((product, index) => {
			if (product.id === id) {
				result = index
			}
		})
		return result
	}

	render() {
		const {products} = this.props
		// const { products } = this.state;

		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<Link to="/product/add" className="btn btn-info mb-10">
					Thêm sản phẩm
				</Link>
				<ProductList>{this.showProducts(products)}</ProductList>
			</div>
		)
	}

	showProducts = products => {
		let result = null
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<ProductItem
						key={index}
						product={product}
						index={index}
						onDelete={this.onDelete}
					/>
				)
			})
		}
		return result
	}
}

const mapStateToProps = state => {
	return {
		products: state.products
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchAllProducts: () => {
			dispatch(actFetchProductsRequest())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
