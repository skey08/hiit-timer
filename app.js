const Header = () => {
	return (
		<header className="timer__header">
			<h1 className="timer__main-heading sr-only">HIIT Timer</h1>
			<img className="timer__logo-img" src="./assets/logo.png"/>
		</header>
	)
}

const TimerPrompt = () => {
	return (
		<div className="timer__body">
			<button className="timer__btn">
				<picture className="timer__btn-picture">
					<img src="./assets/icon-ring-simple.png" className="timer__btn-icon" />
				</picture>
				<span className="timer__btn-text">Simple</span>
			</button>
			<button className="timer__btn">
				<picture className="timer__btn-picture">
					<img src="./assets/icon-ring-custom.png" className="timer__btn-icon" />
				</picture>
				<span className="timer__btn-text">Custom</span>
			</button>
		</div>
	)
}

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screen: 0,
			
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
