

const Header = (props) => {

	console.log(props);
	console.log("props.currentScreen: ", props.currentScreen);
	let screenToReturn = "hey there";
	let iconToShow, titleToShow;

	switch(props.currentScreen) {
		case 0:
			iconToShow = <img className="timer__logo-img" src="./assets/logo.png"/>;
			titleToShow = <h2 class="timer__screen-title sr-only">Home Screen</h2>;
			break;
		case 1:
			iconToShow = null;
			titleToShow = <h2 class="timer__screen-title">Exercise Time</h2>;
			break;
		default:
			iconToShow = "";
			titleToShow = "";
	}

	return (
		<header className={`timer__header`}>
			<h1 className="timer__main-heading sr-only">HIIT Timer</h1>
			{/* <img className="timer__logo-img" src="./assets/logo.png"/> */}
			{ iconToShow }
			{ titleToShow }
		</header>
	)
}

const TimerPrompt = (props) => {
	// console.log(props.currentScreen);
	return (
		<div className="timer__body">
			<button className="timer__btn">
				<picture className="timer__btn-picture">
					<img src="./assets/icon-ring-simple.png" className="timer__btn-icon" />
				</picture>
				<span className="timer__btn-text" onClick={ () => props.nextScreen(props.currentScreen) }>Simple</span>
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

	nextScreen = (screenNum) => {
		console.log("screenNum from nextScreen() before ++: ", screenNum);
		// console.log("go to the next screen");
		screenNum++;
		console.log("screenNum from nextScreen() after ++: ", screenNum);
		this.setState({
			screen: screenNum
		})
	}

	render() {
		return(
			<div className="timer__container">
				<Header currentScreen={this.state.screen} />
				<TimerPrompt nextScreen={this.nextScreen} currentScreen={this.state.screen}/>
			</div>
		)
	}
}

ReactDOM.render(
	<Timer/>,
	document.getElementById("timer")
);
