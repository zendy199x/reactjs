import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./../../commons/Theme";
import Taskboard from "./../Taskboard";
import styles from "./styles";
import { Provider } from "react-redux";
import configureStore from "./../../redux/configureStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <ToastContainer />
                    <Taskboard />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
