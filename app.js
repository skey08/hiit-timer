const MainHeading = (props) => {
	return (
		<h1 className="timer__main-heading">HIIT Tabata Interval Workout Timer</h1>
	)
}

const TimerPrompt = (props) => {
	return (
		<div className="timer__prompt">
			<button className="timer__btn">Simple HIIT Timer</button>
			<button className="timer__btn">Custom Timer with Exercises</button>
		</div>
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
			<div className="timer__container">
				<MainHeading />
				<TimerPrompt />
			</div>
		)
	}
}

ReactDOM.render(
	<Timer/>,
	document.getElementById("timer")
);
