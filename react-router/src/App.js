import React, {Component} from "react"
import "./App.css"
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					{/* Menu */}
					<nav className="navbar navbar-inverse">
						<ul className="nav navbar-nav">
							<li>
								<NavLink
									// activeStyle={{
									// 	backgroundColor: "yellow",
									// 	color: "red",
									// 	borderRadius: 4
									// }}
									activeClassName="active"
									to="/"
									exact
									className="my-link"
								>
									Trang chủ
								</NavLink>
							</li>
							<li>
								<NavLink
									// activeStyle={{
									// 	backgroundColor: "yellow",
									// 	color: "red",
									// 	borderRadius: 4
									// }}
									activeClassName="active"
									to="/about"
									className="my-link"
								>
									Giới thiệu
								</NavLink>
							</li>
							<li>
								<NavLink
									// activeStyle={{
									// 	backgroundColor: "yellow",
									// 	color: "red",
									// 	borderRadius: 4
									// }}
									activeClassName="active"
									to="/contact"
									className="my-link"
								>
									Liên hệ
								</NavLink>
							</li>
						</ul>
					</nav>
					{/* Nội dung */}
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</div>
			</Router>
		)
	}
}

export default App
