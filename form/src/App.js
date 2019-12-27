import React, {Component} from "react"
import "./App.css"

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			txtUsername: '',
			txtPassword: '',
			txtDesc: '',
			txtGender: 0,
			rdLang: "en",
			cbStatus: false
		}
	}

	onHandleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked :  target.value;
		this.setState({
			[name]: value
		})
	}

	onHandleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		return (

			<div className="container mt-30">
				<div className="row">
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h3 className="panel-title">Form</h3>
							</div>
							<div className="panel-body">
								<form onSubmit={this.onHandleSubmit}>

									<div className="form-group">
										<label>Username: </label>
										<input
											type="text"
											className="form-control"
											name="txtUsername"
											value={this.state.txtUsername}
											onChange={this.onHandleChange}
										/>
									</div>

									<div className="form-group">
										<label>Password: </label>
										<input
											type="password"
											className="form-control"
											name="txtPassword"
											value={this.txtPassword}
											onChange={this.onHandleChange}
										/>
									</div>

									<div className="form-group">
										<label>Mô tả: </label>
										<textarea
											className="form-control"
											row="3"
											name="txtDesc"
											onChange={this.onHandleChange}
											value={this.state.txtDesc}
										/>
									</div>

									<div className="form-group">
										<label>Giới tính: </label>
										<select
											className="form-control"
											name="sltGender"
											value={this.state.sltGender}
											onChange={this.onHandleChange}
										>
											<option value={0}>Nam</option>
											<option value={1}>Nữ</option>
										</select>
									</div>

									<label>Ngôn ngữ: </label>
									<div className="radio">
										<label>
											<input
											type="radio"
											name="rdLang"
											value="en"
											onChange={this.onHandleChange}
											checked={this.state.rdLang === "en"}
											/>
											Tiếng anh
										</label><br/>
										<label>
											<input
												type="radio"
												name="rdLang"
												value="vi"
												onChange={this.onHandleChange}
												checked={this.state.rdLang === "vi"}
											/>
											Tiếng việt
										</label>
									</div>

									<div className="checkbox">
										<label>
											<input
												type="checkbox"
												name="cbStatus"
												value={true}
												onChange={this.onHandleChange}
												checked={this.state.cbStatus === true}
											/>
											Trạng thái
										</label>
									</div>

									<button type="submit" className="btn btn-primary">Lưu</button>&nbsp;
									<button type="submit" className="btn btn-default">Xóa</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
