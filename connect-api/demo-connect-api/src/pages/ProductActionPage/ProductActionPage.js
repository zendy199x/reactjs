import React, {Component} from "react"
import {Link} from "react-router-dom"
import {
	actAddProductRequest,
	actGetProductRequest,
	actUpdateProductRequest
} from "./../../actions/index"
import {connect} from "react-redux"
class ProductActionPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: "",
			txtName: "",
			txtPrice: "",
			chkbStatus: ""
		}
	}

	componentDidMount() {
		const {match} = this.props
		if (match) {
			const id = match.params.id
			this.props.onEditProduct(id)
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps && nextProps.itemEditing) {
			const {itemEditing} = nextProps
			this.setState({
				id: itemEditing.id,
				txtName: itemEditing.name,
				txtPrice: itemEditing.price,
				chkbStatus: itemEditing.status
			})
		}
	}

	onChange = e => {
		const target = e.target
		const name = target.name
		const value = target.type === "checkbox" ? target.checked : target.value
		this.setState({
			[name]: value
		})
	}
	onSave = e => {
		e.preventDefault()
		const {id, txtName, txtPrice, chkbStatus} = this.state
		const {history} = this.props
		const product = {
			id: id,
			name: txtName,
			price: txtPrice,
			status: chkbStatus
		}
		if (id) {
			this.props.onUpdateProduct(product)
		} else {
			this.props.onAddProduct(product)
        }
        history.goBack()
	}

	render() {
		const {txtName, txtPrice, chkbStatus} = this.state
		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<form onSubmit={this.onSave}>
					<div className="form-group">
						<label htmlFor="">Tên sản phẩm</label>
						<input
							type="text"
							className="form-control"
							name="txtName"
							value={txtName}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="">Giá sản phẩm</label>
						<input
							type="number"
							className="form-control"
							name="txtPrice"
							value={txtPrice}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="">Trạng thái</label>
					</div>
					<div className="checkbox">
						<label>
							<input
								type="checkbox"
								name="chkbStatus"
								value={chkbStatus}
								onChange={this.onChange}
								checked={chkbStatus}
							/>
							Còn hàng
						</label>
					</div>
					<button type="submit" className="btn btn-primary mr-10">
						Lưu lại
					</button>
					<Link to="/product-list" className="btn btn-danger">
						Trở lại
					</Link>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		itemEditing: state.itemEditing
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddProduct: product => {
			dispatch(actAddProductRequest(product))
		},
		onEditProduct: id => {
			dispatch(actGetProductRequest(id))
		},
		onUpdateProduct: product => {
			dispatch(actUpdateProductRequest(product))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)
