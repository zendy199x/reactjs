import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import PropsTypes from "prop-types";
import loadingIcon from "./../../assets/images/loading.gif";
import styles from "./styles.js";

class GlobalLoading extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.globalLoading}>
                <img src={loadingIcon} alt="loading" className={classes.icon} />
            </div>
        );
    }
}

GlobalLoading.propsTypes = {
    classes: PropsTypes.object
};

export default withStyles(styles)(GlobalLoading);
