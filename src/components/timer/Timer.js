import React from "react";

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formattedTimeDisplay: "00:00:00"
		};
		this.totalSeconds = this.props.totalTime;
		this.calculations = this.calculations.bind(this);
	}

	calculations() {
		let mDisplay, sDisplay, hDisplay;
		let remainder = 0;

		// Conversion of total seconds into hour, minutes and seconds
		const hour = Math.floor(this.totalSeconds / 3600);
		remainder = this.totalSeconds - hour * 3600;
		const minute = Math.floor(remainder / 60);
		remainder = remainder - minute * 60;
		const second = remainder;

		// Formatting display for hh:mm:ss format
		hDisplay = hour < 10 ? `0${hour}` : hour;
		sDisplay = second < 10 ? `0${second}` : second;
		mDisplay = minute < 10 ? `0${minute}` : minute;
		this.setState({
			formattedTimeDisplay: `${hDisplay}:${mDisplay}:${sDisplay}`
		});

		this.totalSeconds--;

		if (minute === 0 && second === 0 && hour === 0) {
			clearInterval(this.timer);
			this.props.timeUp();
		}
	}

	componentDidMount() {
		this.timer = setInterval(this.calculations, 1000);
	}

	render() {
		const { formattedTimeDisplay: timeDisplay } = this.state;
		return (
			<div>
				<span>{timeDisplay}</span>
			</div>
		);
	}
}

export default Timer;
