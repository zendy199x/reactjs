import React, {Component} from "react"
class TaskItem extends Component {
	render() {
		return (
			<tr>
				<td>1</td>
				<td>2</td>
				<td className="text-center">3</td>
				<td className="text-center">
					<button type="button" className="btn btn-warning">
						<span className="fa fa-pencil mr-5" />
						Sửa
					</button>
					&nbsp;
					<button type="button" className="btn btn-danger">
						<span className="fa fa-trash mr-5" />
						Xóa
					</button>
				</td>
			</tr>
		)
	}
}

export default TaskItem
