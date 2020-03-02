import React, {Component} from "react"
import {withStyles} from "@material-ui/core"
import styles from "./styles"

class Taskboard extends Component {
	render() {
        const {classes} = this.props
		return (
            <div className={classes.taskboard}>
            <div className={classes.shape}>ReactJS</div>
            <div className={classes.shape}>VueJS</div>
            </div>
            )
	}
}

export default withStyles(styles)(Taskboard)
