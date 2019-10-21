

const Header = (props) => {

	// console.log(props);
	// console.log("props.currentScreen: ", props.currentScreen);
	let screenToReturn = "hey there";
	let iconToShow, titleToShow;

	switch(props.currentScreen) {
		case 0:
			iconToShow = <img className="timer__logo-img" src="./assets/logo.png"/>;
			titleToShow = <h2 class="timer__screen-title sr-only">Home Screen</h2>;
			break;
		case 1:
			iconToShow = <img className="timer__prompt-icon" src="./assets/icon-red-heart-green-bg.png"/>;
			titleToShow = <h2 class="timer__screen-title">Exercise Time</h2>;
			break;
		case 2:
			iconToShow = <img className="timer__prompt-icon" src="./assets/icon-red-heart-green-bg.png"/>;
			titleToShow = <h2 class="timer__screen-title">Rest Time</h2>;
			break; 
		default:
			iconToShow = null;
			titleToShow = "";
	}

	return (
		<header className={`timer__header`}>
			<h1 className="timer__main-heading sr-only">HIIT Timer</h1>
			<picture className="">
				{ iconToShow }
			</picture>
			{ titleToShow }
		</header>
	)
}

const Button = (props) => {
	const btnText = props.btnInfo.text
	const currentScreen = props.stateProps.currentScreen
	// console.log("state props: ", props.stateProps);
	console.log("Button props: ", props);
	// console.log("current screen: ", currentScreen);

	let btnClass = props.btnInfo.icon ? "timer__btn-text" : "timer__btn-text timer__btn-text_no-icon"

	return (
		<button className="timer__btn" onClick={ () => props.stateProps.nextScreen(currentScreen) }>
			{ props.btnInfo.icon && 
				<picture className="timer__btn-picture">
					<img src={`${props.btnInfo.icon}`} className="timer__btn-icon" />
				</picture> }
			
			<span className={btnClass}>{btnText}</span>
		</button>
	)
}

const TimerPrompt = (props) => {
	// console.log(props.currentScreen);
	let iconToShow, titleToShow;
	// console.log(props);
	// console.log("current screen: ", props.currentScreen);

	const bodyContentInfo = [
			{
				screenNum: 0,
				hasIcons: true,
				buttonInfo: [
					{
						icon: "./assets/icon-ring-simple.png",
						text: "Simple",
						statePropToChange: "timerType",
						changeTo: "simple"
					},
					{
						icon: "./assets/icon-ring-custom.png",
						text: "Complex",
						statePropToChange: "timerType",
						changeTo: "complex"
					}
				]
			},
			{
				screenNum: 1,
				statePropToChange: "timeOn",
				hasIcons: false,
				buttonInfo: [
					{
						text: "0:20",
						changeTo: 20
					},
					{
						text: "0:30",
						changeTo: 30
					},
					{
						text: "0:45",
						changeTo: 45
					},
					{
						text: "1:00",
						changeTo: 60
					}
				]
			},
			{
				screenNum: 2,
				statePropToChange: "timeOff",
				hasIcons: false,
				buttonInfo: [
					{
						text: "0:10",
						changeTo: 10
					},
					{
						text: "0:30",
						changeTo: 30
					},
					{
						text: "1:00",
						changeTo: 60
					},
					{
						text: "2:00",
						changeTo: 120
					}
				]
			}
	]

	// switch(props.currentScreen) {
	// 	case 0:
	// 		iconToShow = <img className="timer__logo-img" src="./assets/logo.png"/>;
	// 		titleToShow = <h2 class="timer__screen-title sr-only">Home Screen</h2>;
	// 		break;
	// 	case 1:
	// 		iconToShow = <img className="timer__prompt-icon" src="./assets/icon-red-heart-green-bg.png"/>;
	// 		titleToShow = <h2 class="timer__screen-title">Exercise Time</h2>;
	// 		break;
	// 	case 2:
	// 		iconToShow = null;
	// 		titleToShow = <h2 class="timer__screen-title">Rest Time</h2>;
	// 		break;
	// 	default:
	// 		iconToShow = null;
	// 		titleToShow = "";
	// }

	let screenToDisplay = bodyContentInfo.filter( (item) => item.screenNum === props.currentScreen)

	// console.log("screenToDisplay: ", screenToDisplay);

	let buttonsToDisplay = screenToDisplay.map( (button) => {
		return button.buttonInfo.map( (btn) => {
			return(
				<Button btnInfo={btn} stateProps={props}/>
			)
		})
	})

	// console.log("buttonsToDisplay: ", buttonsToDisplay);

	return (
		<div className={`timer__body timer__body_screen_${props.currentScreen}`}>
			{/* <button className="timer__btn" onClick={ () => props.nextScreen(props.currentScreen) }>
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
			</button> */}
			{/* <Button /> */}
			{ buttonsToDisplay }
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

	getBodyContentInfo = (screenNum) => {
		// console.log(screenNum);
	}

	nextScreen = (screenNum) => {
		// console.log("screenNum from nextScreen() before ++: ", screenNum);
		// console.log("go to the next screen");
		screenNum++;
		console.log("screenNum from nextScreen() after ++: ", screenNum);
		this.setState({
			screen: screenNum
		})
	}

	render() {
		return(
			<div className={`timer__container timer__container_screen_${this.state.screen}`}>
				<Header currentScreen={this.state.screen} />
				<TimerPrompt nextScreen={this.nextScreen} currentScreen={this.state.screen} getBodyContentInfo={this.getBodyContentInfo} />
			</div>
		)
	}
}

ReactDOM.render(
	<Timer/>,
	document.getElementById("timer")
);
