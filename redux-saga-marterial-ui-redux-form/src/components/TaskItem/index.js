import { withStyles } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Fab from "@material-ui/core/Fab"
import Grid from "@material-ui/core/Grid"
import Icon from "@material-ui/core/Icon"
import Typography from "@material-ui/core/Typography"
import React, { Component } from "react"
import styles from "./styles"

class TaskItem extends Component {
    render() {
        const { classes, task, status } = this.props
        const { id, title } = task
        return (
            <div>
                <Card key={id} className={classes.card}>
                    <CardContent>
                        <Grid container justify="space-between">
                            <Grid item md={8}>
                                <Typography component="h2">{title}</Typography>
                            </Grid>
                            <Grid item md={4}>
                                {status.label}
                            </Grid>
                        </Grid>
                        <p>{task.description}</p>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Fab color="primary" aria-label="edit" size="small">
                            <Icon fontSize="small">edit_icon</Icon>
                        </Fab>
                        <Fab color="secondary" aria-label="edit" size="small">
                            <Icon fontSize="small">delete_icon</Icon>
                        </Fab>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(TaskItem)
