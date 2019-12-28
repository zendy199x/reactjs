import React, { Component } from 'react';
import "./App.css";
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Control from './components/Control';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false.status,
            taskEditing: null
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            const tasks =  JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            })
        }
    }

    s4() {
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
    }

    onToggleForm = () => {
        if(this.state.isDisplayForm && this.state.taskEditing !== null) {
            this.setState({
                isDisplayForm: true,
                taskEditing: null
            })
        } else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                taskEditing: null
            })
        }
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        })
    }

    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        })
    }

    onSubmit = (data) => {
        const { tasks } = this.state;
        if(data.id === '') {
            data.id = this.generateID();
            tasks.push(data);
        } else {
            const index = this.findIndex(data.id);
            tasks[index] = data;
        }
        this.setState({
            tasks: tasks,
            taskEditing: null
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (id) => {
        const { tasks } = this.state;
        const index = this.findIndex(id);
        if(index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    }

    findIndex = (id) => {
        const { tasks } = this.state;
        let result = -1;
        tasks.forEach((task, index) => {
            if(task.id === id) {
                result = index;
            }
        })
        return result;
    }

    onDelete = (id) => {
        const { tasks } = this.state;
        const index = this.findIndex(id);
        if(index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        this.onCloseForm();
    }

    onUpdate = (id) => {
        const { tasks } = this.state;
        const index = this.findIndex(id);
        const taskEditing = tasks[index];
        this.setState({
            taskEditing: taskEditing
        });
        this.onShowForm();
    }

    render() {
        const { tasks, isDisplayForm, taskEditing } = this.state;
        const elmTaskForm = isDisplayForm ? <TaskForm
            onSubmit={ this.onSubmit }
            onCloseForm={ this.onCloseForm }
            task={ taskEditing }
            /> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : '' }>
                        {/*Form*/}
                        { elmTaskForm }
                    </div>
                    <div className={ isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onToggleForm}
                        >
                            <span className="fa fa-plus mr-5" />
                            Thêm Công Việc
                        </button>

                        {/*Search-Sort*/}
                        <Control />
                        {/*List*/}
                        <TaskList
                            tasks={ tasks }
                            onUpdateStatus={ this.onUpdateStatus }
                            onDelete={ this.onDelete }
                            onUpdate={ this.onUpdate }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


