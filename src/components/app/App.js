import React from "react";
import "./App.css";
import Timer from "../timer/Timer";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.name = "nikesh";
	}
	timeUp() {
		console.log(this.name);
	}
	render() {
		return <Timer totalTime={5} timeUp={() => this.timeUp()} />;
	}
}

export default App;
