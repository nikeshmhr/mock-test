import React from "react";

class Confirmation extends React.Component {
	render() {
		return (
			<div>
				<h3>
					You are about the take PLACEHOLDER test. You cannot stop
					timer once you press Continue. Are you sure you want to
					continue?
				</h3>
				<button className="btn btn-primary">Continue</button>
				<a href="#">Back</a>
			</div>
		);
	}
}

export default Confirmation;
