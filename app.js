const mainHeading = (props) => {
	return (
		<div>Hey</div>
	)
}

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<div>
				<h1 className="timer__main-heading">HIIT Tabata Interval Workout Timer</h1>
				<mainHeading />
			</div>
		)
	}
}

ReactDOM.render(
	<Timer/>,
	document.getElementById("timer")
);
