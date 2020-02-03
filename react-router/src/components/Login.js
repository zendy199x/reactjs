import React, {Component} from "react"
import {Redirect} from "react-router-dom"

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			txtUsername: "",
			txtPassword: ""
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

	onLogin = e => {
		e.preventDefault()
		const {txtUsername, txtPassword} = this.state
		if (txtUsername === "admin" && txtPassword === "admin") {
			localStorage.setItem(
				"user",
				JSON.stringify({
					username: txtUsername,
					password: txtPassword
				})
			)
		}
	}

	render() {
		const {txtUsername, txtPassword} = this.state
		const loggedInUser = localStorage.getItem("user")
		if (loggedInUser !== null) {
            const {location} = this.props
			return <Redirect to={{
                pathname: "/products",
                state: {
                    from: location
                }
            }} />
        }
		return (
			<div className="row">
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<form onSubmit={this.onLogin}>
						<legend>Đăng nhập</legend>

						<div className="form-group">
							<label>Username:</label>
							<input
								type="text"
								className="form-control"
								name="txtUsername"
								value={txtUsername}
								onChange={this.onChange}
							/>
						</div>

						<div className="form-group">
							<label>Password:</label>
							<input
								type="password"
								className="form-control"
								name="txtPassword"
								value={txtPassword}
								onChange={this.onChange}
							/>
						</div>

						<button type="submit" className="btn btn-primary">
							Đăng nhập
						</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Login
