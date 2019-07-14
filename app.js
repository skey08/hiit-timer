const Header = () => {
	return (
		<header class="timer__header">
			<h1 className="timer__main-heading sr-only">HIIT Timer</h1>
			<img class="timer__logo-img" src="./assets/logo.png"/>
		</header>
	)
}

const TimerPrompt = () => {
	return (
		<div className="timer__body">
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
				<Header />
				<TimerPrompt />
			</div>
		)
	}
}

ReactDOM.render(
	<Timer/>,
	document.getElementById("timer")
);
