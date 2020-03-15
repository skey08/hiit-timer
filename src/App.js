import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import redHeart from './assets/icon-red-heart-green-bg.png';

const Header = (props) => {
	let iconToShow, titleToShow;

	switch (props.currentScreen) {
		case 0:
			iconToShow = <img className="timer__logo-img" src={logo} alt="" />;
			titleToShow = <h2 className="timer__screen-title sr-only">Home Screen</h2>;
			break;
		case 1:
			iconToShow = <img className="timer__prompt-icon" src={redHeart} alt="" />;
			titleToShow = <h2 className="timer__screen-title">Exercise Time</h2>;
			break;
		case 2:
			iconToShow = <img className="timer__prompt-icon" src={redHeart} alt="" />;
			titleToShow = <h2 className="timer__screen-title">Rest Time</h2>;
			break;
		case 3:
			iconToShow = <img className="timer__prompt-icon" src={redHeart} alt="" />;
			titleToShow = <h2 className="timer__screen-title">Number of Sets</h2>;
			break;
		default:
			iconToShow = null;
			titleToShow = "";
	}

	return (
		<header className={`timer__header`}>
			<h1 className="timer__main-heading sr-only">HIIT Timer</h1>
			<picture className="">
				{iconToShow}
			</picture>
			{titleToShow}
		</header>
	)
}

const Button = (props) => {
	const btnText = props.btnInfo.text;
	const btnInfo = props.btnInfo;
	const screenInfo = props.screenInfo;
	const btnClass = props.btnInfo.icon ? "timer__btn-text" : "timer__btn-text timer__btn-text_no-icon";
	// console.log("props.screenInfo: ", props.screenInfo);
	// console.log("button props: ", props.btnInfo);

	return (
		<button className="timer__btn" onClick={(e) => props.handleClick(screenInfo, e)} >
			{props.btnInfo.icon &&
				<picture className="timer__btn-picture">
					<img src={require(`./assets/${btnInfo.icon}`)} className="timer__btn-icon" alt="" />
				</picture>}

			<span className={btnClass} data-value={`${btnInfo.value}`}>{btnText}</span>
		</button>
	)
}

const TimerPrompt = (props) => {

	if (props.loading) {
		return <div>Loading...</div>;
	}

	const screenToDisplay = props.bodyContentInfo.filter((item) => item.screenNum === props.currentScreen);

	const buttonsToDisplay = screenToDisplay.map((button) => {
		// console.log("button: ", button);
		return button.buttonInfo.map((btn, index) => {
			return (
				<Button
					key={index}
					btnInfo={btn}
					screenInfo={button}
					bodyContentInfo={props.bodyContentInfo}
					handleClick={props.handleClick} />
			)
		})
	})

	return (
		<div className={`timer__body timer__body_screen_${props.currentScreen}`}>
			{buttonsToDisplay}
		</div>
	)
}

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			bodyContentInfo: [],
			screenNum: 0,
			timerType: null
		}
	}

	nextScreen = () => {
		// console.log("state screen number", this.state.screenNum);
		this.setState({
			screenNum: this.state.screenNum + 1
		}, () => {
			// console.log("state screen number", this.state.screenNum);
		}
		);
	}

	handleClick = (btnInfo, e) => {
		console.log("btnInfo: ", btnInfo);
		console.log("e data-value: ", e.target.getAttribute("data-value"));
		const statePropToChange = btnInfo.statePropToChange;
		const val = e.target.getAttribute("data-value");
		this.setState(
			{
				[statePropToChange]: val
			}, () => {
				console.log("this.state: ", this.state);
				this.nextScreen();
			})

	}

	componentDidMount() {
		fetch("./body-content-info.json")
			.then(response => response.json())
			.then(data =>
				this.setState(
					{
						loading: false,
						bodyContentInfo: data
					}, () => {
						// console.log("bodyContentInfo: ", this.state.bodyContentInfo);
					})
			)
	}

	render() {
		return (
			<div className={`timer__container timer__container_screen_${this.state.screenNum}`}>
				<Header currentScreen={this.state.screenNum} />
				<TimerPrompt
					nextScreen={this.nextScreen}
					loading={this.state.loading}
					currentScreen={this.state.screenNum}
					bodyContentInfo={this.state.bodyContentInfo}
					handleClick={this.handleClick} />
			</div>
		)
	}
}

export default Timer;
