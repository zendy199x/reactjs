import React, {Component} from "react"

class TaskForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: '',
			name: '',
			status: false
		}
	}

	UNSAFE_componentWillMount() {
		if(this.props.task) {
			this.setState({
				id: this.props.task.id,
				name: this.props.task.name,
				status: this.props.task.status
			});
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if(nextProps && nextProps.task) {
			this.setState({
				id: nextProps.task.id,
				name: nextProps.task.name,
				status: nextProps.task.status
			});
		} else if(!nextProps.task) {
			this.setState({
				id: '',
				name: '',
				status: false
			})
		}
	}

	onCloseForm = () => {
		this.props.onCloseForm()
	}

	onChange = event => {
		const target = event.target
		const name = target.name
		let value = target.value
		if (name === "status") {
			value = target.value === "true" ? true : false
		}
		this.setState({
			[name]: value
		})
	}

	onSubmit = event => {
		event.preventDefault()
		this.props.onSubmit(this.state)
		this.onClear()
		this.onCloseForm()
	}

	onClear = () => {
		this.setState({
			name: '',
			status: false
		})
	}

	render() {
		const { id } = this.state;
		return (
			<React.Fragment>
				<div className="panel panel-warning">
					<div className="panel-heading">
						<h3 className="panel-title">
							{id !== '' ? 'Cập nhập công việc' : 'Thêm công việc'}
							<span
								className="fa fa-times-circle text-right"
								onClick={this.onCloseForm}
							/>
						</h3>
					</div>
					<div className="panel-body">
						<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<label>Tên :</label>
								<input
									type="text"
									className="form-control"
									name="name"
									value={this.state.name}
									onChange={this.onChange}
								/>
							</div>
							<label>Trạng Thái :</label>
							<select
								className="form-control"
								required="required"
								name="status"
								value={this.state.status}
								onChange={this.onChange}
							>
								<option value={true}>Kích Hoạt</option>
								<option value={false}>Ẩn</option>
							</select>
							<br />
							<div className="text-center">
								<button type="submit" className="btn btn-warning">
									<span className="fa fa-plus mr-5"></span>
									Lưu lại
								</button>
								&nbsp;
								<button
									type="button"
									className="btn btn-danger"
									onClick={this.onClear}
								>
									<span className="fa fa-plus mr-5"></span>
									Hủy bỏ
								</button>
							</div>
						</form>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default TaskForm
