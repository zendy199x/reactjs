import React, {Component} from "react"

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			keyword: ''
		})
	}

	onChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState({
			[name]: value
		})
	}

	onSearch = () => {
		this.props.onSearch(this.state.keyword)
	}

	render() {
		const { keyword } = this.state.keyword;
		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="input-group">
					<input
						name="keyword"
						type="text"
						className="form-control"
						placeholder="Nhập từ khóa..."
						value={ keyword }
						onChange={ this.onChange }
					/>
					<span className="input-group-btn">
						<button
							className="btn btn-primary"
							type="button"
							onClick={ this.onSearch }
						>
							<span className="fa fa-search mr-5"></span>
							Tìm
						</button>
					</span>
				</div>
			</div>
		)
	}
}

export default Search
