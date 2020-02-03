import React, {Component} from "react"
import {Route, Link} from "react-router-dom"

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
	return (
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={({match}) => {
				const active = match ? "active" : ""
				return (
					<li className={`my-link ${active}`}>
						<Link to={to} className="my-link">
							{label}
						</Link>
					</li>
				)
			}}
		/>
	)
}

class Menu extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<ul className="nav navbar-nav">
					<MenuLink label="Trang chủ" to="/" activeOnlyWhenExact={true} />
					<MenuLink
						label="Giới thiệu"
						to="/about"
						activeOnlyWhenExact={false}
					/>
					<MenuLink label="Liên hệ" to="/contact" activeOnlyWhenExact={false} />
				</ul>
			</nav>
		)
	}
}

export default Menu
