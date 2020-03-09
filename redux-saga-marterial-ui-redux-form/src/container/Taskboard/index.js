import React, {Component} from "react"
import {withStyles} from "@material-ui/core"
import styles from "./styles"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"
import Grid from "@material-ui/core/Grid"
import {STATUSES} from "./../../constains"
import TaskList from "./../../components/TaskList"

const listTask = [
	{
		id: 1,
		title: "Read book",
		description: "Read Marterial UI book",
		status: 0
	},
	{
		id: 2,
		title: "Play football",
		description: "With my friend",
		status: 2
	},
	{
		id: 3,
		title: "Play game",
		description: "AOV",
		status: 1
	}
]

class Taskboard extends Component {
	renderBoard() {
		let xhtml = null
		xhtml = (
			<Grid container spacing={2}>
				{STATUSES.map(status => {
					const taskFiltered = listTask.filter(
						task => task.status === status.value
					)
					return <TaskList key={status.value} tasks={taskFiltered} status={status} />
				})}
			</Grid>
		)
		return xhtml
	}

	render() {
		const {classes} = this.props
		return (
			<div className={classes.taskboard}>
				<Button variant="contained" color="primary" className={classes.button}>
					<AddIcon /> Thêm mới công việc
				</Button>
				{this.renderBoard()}
			</div>
		)
	}
}

export default withStyles(styles)(Taskboard)
