import React, { Component } from 'react';
import TaskSearchControl from './TaskSearchControl';
import TaskSortControl from './TaskSortControl';

class TaskControl extends Component {
    render() {
        return (
        	<div className="row mt-15">
            {/*TaskSearchControl*/}
                <TaskSearchControl onSearch={ this.props.onSeach }/>
            {/*Sort*/}
                <TaskSortControl />
            </div>
        );
    }
}

export default TaskControl;