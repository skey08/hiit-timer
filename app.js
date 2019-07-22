

const Header = (props) => {

	console.log(props);
	console.log("props.currentScreen: ", props.currentScreen);
	let screenToReturn = "hey there";

	const screen1 = {
		icon: "",
		title: "Screen1 Title"
	}

	const screen2 = {
		icon: "",
		title: "Screen2 Title"
	}

	switch(props.currentScreen) {
		case 0:
			screenToReturn = <img className="timer__logo-img" src="./assets/logo.png"/>;
			break;
		case 1:
			screenToReturn = screen2.title;
			break;
		default:
			screenToReturn = "";
	}

	// let headerToShow = 

	// console.log("screen1: ", screen1);

	// let headerInfo = props.screenInfo(props.currentScreen);
	// console.log("headerInfo from Header");
	// console.log(headerInfo); 
	// console.log(headerInfo.title);

	return (
		<header className={`timer__header ${props}`}>
			<h1 className="timer__main-heading sr-only">HIIT Timer</h1>
			{/* <img className="timer__logo-img" src="./assets/logo.png"/> */}
			{ screenToReturn }
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

	// getScreenInfo = (currentScreen) => {
	// 	console.log("currentScreen from getScreenInfo: ", currentScreen);
	// 	let screenToReturn = "";

	// 	const screen1 = {
	// 		icon: "",
	// 		title: "Screen1 Title"
	// 	}

	// 	const screen2 = {
	// 		icon: "",
	// 		title: "Screen2 Title"
	// 	}

	// 	switch (currentScreen) {
	// 		case 1: 
	// 			screenToReturn = screen2;
	// 			break;
	// 	}

	// 	return screenToReturn;

	// }

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
