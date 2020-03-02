const styles = theme => ({
	taskboard: {
		display: "flex",
		alignItems: "center"
	},
	shape: {
		// backgroundColor: "red",
		// color: "white",
        // borderColor: "#cccccc",
        padding: 20,
        margin: 10,
        // borderRadius: 4
        backgroundColor: theme.color.primary,
        color: theme.shape.textColor
	}
})

export default styles
