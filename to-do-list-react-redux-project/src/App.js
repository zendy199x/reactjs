import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import { findIndex, remove, filter, includes, orderBy } from 'lodash';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            isShowingForm : false,
            keyword : '',
            sortBy : 'name',
            sortValue : 'asc',
            filterName : '',
            filterStatus : '-1',
            itemEditing : null
        };
    }

    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            });
        }
    }

    s4() {
        return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    guid() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    onUpdateStatus = (id) => {
        var tasks = this.state.tasks;
        var index = findIndex(tasks, { id : id });
        tasks[index].status = !tasks[index].status;
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onSave = (data) => {
        var tasks = this.state.tasks;
        data.status = data.status === 'true' ? true : false;
        if(data.id === ''){
            data.id = this.guid();
            tasks.push(data);
        }else{
            var index = findIndex(tasks, { id : data.id })
            tasks[index] = data;
        }
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onToggleForm = () => {
        if(this.state.itemEditing !== null){
            console.log('th1')
            this.setState({
                itemEditing : null
            });
        }else{
            this.setState({
                isShowingForm : !this.state.isShowingForm
            });
        }
    }

    onExitForm = () =>{
        this.setState({
            isShowingForm : false,
            itemEditing : null
        });
    }

    onDeleteTask = (id) => {
        var tasks = this.state.tasks;
        remove(tasks, { id : id });
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
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
            isShowingForm : true
        })
    }

    render() {
        var { tasks, isShowingForm, keyword, sortBy, sortValue, filterName, filterStatus, itemEditing } = this.state;
        tasks = filter(tasks, (task) => {
            return includes(task.name.toLowerCase(), keyword.toLowerCase());
        });
        if(filterName){
            tasks = filter(tasks, (task) => {
                return includes(task.name.toLowerCase(), filterName.toLowerCase());
            });
        }
        if(filterStatus){
            tasks = filter(tasks, (task) => {
                if(filterStatus === '-1' || filterStatus === -1){
                    return task;
                }else{
                    return task.status === (parseInt(filterStatus, 10) === 1 ? true : false);
                }
            });
        }
        tasks = orderBy(tasks, [sortBy], [sortValue]);
        var elmForm = isShowingForm === true ? <TaskForm
                                                    onSave={this.onSave}
                                                    onExitForm={this.onExitForm}
                                                    itemEditing={ itemEditing }
                                                    /> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>
                <div className="row">
                    <div className={ isShowingForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                        { elmForm }
                    </div>
                    <div className={ isShowingForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
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
                            tasks={tasks}
                            onUpdateStatus={this.onUpdateStatus}
                            onDeleteTask={this.onDeleteTask}
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

export default App;