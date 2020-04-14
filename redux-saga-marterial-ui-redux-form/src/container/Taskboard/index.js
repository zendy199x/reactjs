import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TaskForm from "../../components/TaskForm";
import * as taskActions from "./../../actions/task";
import TaskList from "./../../components/TaskList";
import { STATUSES } from "../../constants";
import styles from "./styles";

class Taskboard extends Component {
    state = {
        open: false
    };

    // componentDidMount() {
    //     const { taskActionsCreators } = this.props;
    //     const { fetchListTask } = taskActionsCreators;
    //     fetchListTask();
    // }

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    openForm = () => {
        this.setState({
            open: true
        });
    };

    renderBoard() {
        const { listTask } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {STATUSES.map(status => {
                    const taskFiltered = listTask.filter(
                        task => task.status === status.value
                    );
                    return (
                        <TaskList
                            key={status.value}
                            tasks={taskFiltered}
                            status={status}
                        />
                    );
                })}
            </Grid>
        );
        return xhtml;
    }

    renderForm() {
        const { open } = this.state;

        let xhtml = null;
        xhtml = <TaskForm open={open} onClose={this.handleClose} />;
        return xhtml;
    }

    loadData = () => {
        const { taskActionsCreators } = this.props;
        const { fetchListTask } = taskActionsCreators;
        fetchListTask();
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.loadData}
                    style={{ marginRight: 20 }}
                >
                    Load Data
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.openForm}
                >
                    <AddIcon /> Thêm mới công việc
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

Taskboard.propsTypes = {
    classes: PropTypes.object,
    taskActionsCreators: PropTypes.shape({
        fetchListTask: PropTypes.func
    }),
    listTask: PropTypes.array
};

const mapStateToProps = state => {
    return {
        listTask: state.task.listTask
    };
};

const mapDispatchToProps = dispatch => {
    return {
        taskActionsCreators: bindActionCreators(taskActions, dispatch)
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
