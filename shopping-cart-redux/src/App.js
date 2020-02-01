import React, {Component} from "react"
import Header from "./components/Header"
import ProductsContainer from "./containers/ProductsContainer"
import Message from "./components/Message"
import CartContainer from "./containers/CartContainer"
import Footer from "./components/Footer"

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main id="mainContainer">
					<div className="container">
						<ProductsContainer />
						<Message />
						<CartContainer />
					</div>
				</main>
				<Footer />
			</div>
		)
	}
}

export default App
