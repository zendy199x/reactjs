import React, {Component} from "react"
import Button from "@material-ui/core/Button"
import styles from "./styles"
import {withStyles} from "@material-ui/core"

class App extends Component {
	render() {
		const {classes} = this.props
		return (
			<div>
				<div className="App">
					<div>Hello Redux Saga</div>
					<Button variant="contained" color="primary">
						Marterial UI Button
					</Button>
					<div className={classes.box}>
						<div className={classes.shape}>ReaactJS</div>
						<div className={classes.shape}>VueJS</div>
						<div className={classes.shape}>AngularJS</div>
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(App)
