import React, {Component} from "react"
import "./App.css"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import TaskControl from "./components/TaskControl"
import {connect} from "react-redux"
import * as actions from "./actions/index"
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sortBy: "name",
			sortValue: "asc"
		}
	}

	onToggleForm = () => {
		const {itemEditing} = this.props
		if (itemEditing && itemEditing.id !== "") {
			this.props.onOpenForm()
		} else {
			this.props.onToggleForm()
		}
		this.props.onClearTask({
			id: "",
			name: "",
			status: false
		})
	}

	onSearch = keyword => {
		this.setState({
			keyword: keyword
		})
	}

	onSort = (sortBy, sortValue) => {
		this.setState({
			sortBy: sortBy,
			sortValue: sortValue
		})
	}

	render() {
		const {sortBy, sortValue} = this.state
		const {isDisplayForm} = this.props
		// tasks = orderBy(tasks, [sortBy], [sortValue]);

		return (
			<div className="container">
				<div className="text-center">
					<h1>Quản Lý Công Việc</h1>
					<hr />
				</div>
				<div className="row">
					<div
						className={
							isDisplayForm === true
								? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
								: ""
						}
					>
						<TaskForm />
					</div>
					<div
						className={
							isDisplayForm === true
								? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
								: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
						}
					>
						<button
							type="button"
							className="btn btn-primary"
							onClick={this.onToggleForm}
						>
							<span className="fa fa-plus mr-5"></span>
							Thêm Công Việc
						</button>
						<TaskControl
							onSearch={this.onSearch}
							onSort={this.onSort}
							sortBy={sortBy}
							sortValue={sortValue}
						/>
						<TaskList />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		isDisplayForm: state.isDisplayForm,
		itemEditing: state.itemEditing
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onToggleForm: () => {
			dispatch(actions.toggleForm())
		},
		onClearTask: task => {
			dispatch(actions.editTask(task))
		},
		onOpenForm: () => {
			dispatch(actions.openForm())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
