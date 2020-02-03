import React, {Component} from "react"
import {Route, Link} from "react-router-dom"

const menus = [
	{
		name: "Trang chủ",
		to: "/",
		exact: true
	},
	{
		name: "Giới thiệu",
		to: "/about",
		exact: false
	},
	{
		name: "Liên hệ",
		to: "/contact",
		exact: false
	},
	{
		name: "Sản phẩm",
		to: "/products",
		exact: false
	},
	{
		name: "Đăng nhập",
		to: "/login",
		exact: false
	}
]

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
				<ul className="nav navbar-nav">{this.showMenu(menus)}</ul>
			</nav>
		)
	}

	showMenu = menus => {
		let result = null
		if (menus.length > 0) {
			result = menus.map((menu, index) => {
				return (
					<MenuLink
						key={index}
						label={menu.name}
						to={menu.to}
						activeOnlyWhenExact={menu.exact}
					/>
				)
			})
		}
		return result
	}
}

export default Menu
