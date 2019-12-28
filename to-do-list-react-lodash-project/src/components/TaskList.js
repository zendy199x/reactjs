import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            filterName: '',
            filterStatus: -1
        })
    }

    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
        this.setState({
            [name]: value
        });

    }

    render() {
        const { tasks } = this.props;
        const { filterName, filterStatus} = this.state;
        const elmTasks = tasks.map((task, index) => {
            return <TaskItem
                        key={index}
                        index={index}
                        task={task}
                        onUpdateStatus={ this.props.onUpdateStatus }
                        onDelete={ this.props.onDelete }
                        onUpdate={ this.props.onUpdate }
                    />
        })
        return (
            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                value={ filterName }
                                onChange={ this.onChange }
                            />
                        </td>
                        <td>
                            <select
                                className="form-control"
                                name="filterStatus"
                                value={ filterStatus }
                                onChange={ this.onChange }
                            >
                                <option value={-1}>Tất cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmTasks}
                </tbody>
            </table>
        );
    }
}


export default TaskList;
