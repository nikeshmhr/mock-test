import React from "react";

class Mcq extends React.Component {
	render() {
		return (
			<>
				<div>
					<h4>{"1"}. A for ____?</h4>
					<ol type="A">
						<li>
							<input type="radio" name="options" id="1" />
							<label htmlFor="1">Apple</label>
						</li>
						<li>
							<input type="radio" name="options" id="2" />
							<label htmlFor="2">Ball</label>
						</li>
						<li>
							<input type="radio" name="options" id="3" />
							<label htmlFor="3">Cat</label>
						</li>
						<li>
							<input type="radio" name="options" id="4" />
							<label htmlFor="4">Dog</label>
						</li>
					</ol>
				</div>
				<div>
					<h4>{"2"}. B for ____?</h4>
					<ol type="B">
						<li>
							<input type="checkbox" name="options1" id="o1" />
							<label htmlFor="o1">Apple</label>
						</li>
						<li>
							<input type="checkbox" name="options2" id="o2" />
							<label htmlFor="o2">Ball</label>
						</li>
						<li>
							<input type="checkbox" name="options3" id="o3" />
							<label htmlFor="o3">Cat</label>
						</li>
						<li>
							<input type="checkbox" name="options4" id="o4" />
							<label htmlFor="o4">Dog</label>
						</li>
					</ol>
				</div>
			</>
		);
	}
}

export default Mcq;
