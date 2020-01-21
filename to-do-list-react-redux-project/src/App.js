import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import { connect } from 'react-redux';
import * as actions from './actions/index';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy : 'name',
            sortValue : 'asc',
            filterName : '',
            filterStatus : '-1',
            itemEditing : null
        };
    }

    onToggleForm = () => {
        this.props.onToggleForm();
    }

    onSearch = (keyword) => {
        this.setState({
            keyword : keyword
        });
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy : sortBy,
            sortValue : sortValue
        });
    }

    onFilter = (filterName, filterStatus) => {
        this.setState({
            filterName : filterName,
            filterStatus : filterStatus
        });
    }

    onSelectedItem = (item) => {
        this.setState({
            itemEditing : item,
            isDisplayForm : true
        })
    }

    render() {
        const { sortBy, sortValue, filterName, filterStatus, itemEditing } = this.state;
        const { isDisplayForm } = this.props;
        // tasks = filter(tasks, (task) => {
        //     return includes(task.name.toLowerCase(), keyword.toLowerCase());
        // });
        // if(filterName){
        //     tasks = filter(tasks, (task) => {
        //         return includes(task.name.toLowerCase(), filterName.toLowerCase());
        //     });
        // }
        // if(filterStatus){
        //     tasks = filter(tasks, (task) => {
        //         if(filterStatus === '-1' || filterStatus === -1){
        //             return task;
        //         }else{
        //             return task.status === (parseInt(filterStatus, 10) === 1 ? true : false);
        //         }
        //     });
        // }
        // tasks = orderBy(tasks, [sortBy], [sortValue]);
        var elmForm = isDisplayForm === true ? <TaskForm
                                                    itemEditing={ itemEditing }
                                                    /> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                        { elmForm }
                    </div>
                    <div className={ isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm} >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <TaskControl
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                            sortBy={sortBy}
                            sortValue={sortValue}
                        />
                        <TaskList
                            filterName={filterName}
                            filterStatus={filterStatus}
                            onFilter={this.onFilter}
                            onSelectedItem={this.onSelectedItem}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);