import React from 'react';

export const Button = (props) => {
	const btnText = props.btnInfo.text
	// const currentScreen = props.stateProps.currentScreen
	// console.log("state props: ", props.stateProps);
	console.log("Button props: ", props);
	// console.log("current screen: ", currentScreen);

	let btnClass = props.btnInfo.icon ? "timer__btn-text" : "timer__btn-text timer__btn-text_no-icon"

	return (
		// <button className="timer__btn" onClick={() => props.stateProps.nextScreen(currentScreen)} >
		<button className="timer__btn" onClick={() => props.handleClick()} >
			{props.btnInfo.icon &&
				<picture className="timer__btn-picture">
					<img src={`${props.btnInfo.icon}`} className="timer__btn-icon" alt="" />
				</picture>}

			<span className={btnClass}>{btnText}</span>
		</button>
	)
}