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
];

class Taskboard extends Component {
    state = {
        open: false
    };

    componentDidMount() {
        const { taskActionsCreators } = this.props;
        const { fetchListTask } = taskActionsCreators;
        fetchListTask();
    }

    renderBoard() {
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

    renderForm() {
        const { open } = this.state;

        let xhtml = null;
        xhtml = <TaskForm open={open} onClose={this.handleClose} />;
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
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
    })
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
    return {
        taskActionsCreators: bindActionCreators(taskActions, dispatch)
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
