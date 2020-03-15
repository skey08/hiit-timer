import React from 'react';
import './App.css';

//components
import { Header } from './components/header/header';
import { TimerPrompt } from './components/timer-prompt/timer-prompt';


class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screenNum: 0,
			timerType: null
		}
	}

	nextScreen = () => {
		// console.log("state screen number", this.state.screenNum);
		this.setState({
			screenNum: this.state.screenNum + 1
		}, () => {
			console.log("state screen number", this.state.screenNum);
		}
		);
	}

	handleClick = () => {
		console.log("clicked");
		this.nextScreen();
	}

	render() {
		return (
			<div className={`timer__container timer__container_screen_${this.state.screenNum}`}>
				<Header currentScreen={this.state.screenNum} />
				<TimerPrompt nextScreen={this.nextScreen} currentScreen={this.state.screenNum} handleClick={this.handleClick} />
			</div>
		)
	}
}

export default Timer;
