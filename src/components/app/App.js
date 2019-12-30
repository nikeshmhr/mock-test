import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "../../router/history";
import TestSets from "../test-sets/TestSets";
import McqWrapper from "../mcq/McqWrapper";

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Router history={history}>
					<nav>
						<h3>Mock Test</h3>
					</nav>
					<Switch>
						<Route path="/" exact component={TestSets} />
						<Route
							path="/test/:testId"
							exact
							component={McqWrapper}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
