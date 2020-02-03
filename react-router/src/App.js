import React, {Component} from "react"
import "./App.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Menu from "./components/Menu"
import routes from './routes'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					{/* Menu */}
					<Menu />
					{/* Nội dung */}
					<Switch>
					{this.showContentMenu(routes)}>
					</Switch>
				</div>
			</Router>
		)
	}

	showContentMenu = routes => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route key={index} path={route.path} exact={route.exact} component={route.main} />
				)
			})
		}
		return result
	}

}

export default App
