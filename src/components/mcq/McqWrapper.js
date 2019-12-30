import React from "react";
import Timer from "../timer/Timer";
import Mcq from "./Mcq";

class McqWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.name = "nikesh";
	}

	timeUp() {
		console.log(this.name);
	}

	render() {
		return (
			<div>
				<Timer totalTime={5} timeUp={() => this.timeUp()} />
				<Mcq />
			</div>
		);
	}
}

export default McqWrapper;
