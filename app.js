class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {

		return(
			<header>
				<h1>HIIT Tabata Interval Workout Timer</h1>
			</header>
		)
	}
}

ReactDOM.render(
	<Timer/>,
	document.getElementById("timer")
);