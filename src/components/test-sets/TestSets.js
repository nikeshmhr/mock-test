import React from "react";

class TestSets extends React.Component {
	render() {
		return (
			<div>
				<h3>Test Sets</h3>
				<ul className="list-group">
					<li className="list-group-item">
						<span>Test 1</span>
						<button className=" btn btn-success float-right">
							Start
						</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default TestSets;
