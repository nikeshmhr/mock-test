import React from "react";

class Mcq extends React.Component {
	changed(e, q) {
		let answer = {
			value: e.target.value,
			question: q,
			isChecked: q.ansType === "multi" ? e.target.checked : false
		};

		this.props.onAnswered(answer);
	}

	render() {
		const { question: q } = this.props;
		return (
			<>
				<div>
					<h4>{`${q.qNo}. ${q.question}`}</h4>
					<ol type="A">
						{q.ans_options.map((opt, index) => (
							<li key={opt}>
								<input
									type="radio"
									name={`options${q.qNo}`}
									id={`option${q.qNo}${index}`}
									value={opt}
									onChange={e => this.changed(e, q)}
								/>
								&nbsp;
								<label htmlFor={`option${q.qNo}${index}`}>
									{opt}
								</label>
							</li>
						))}
					</ol>
				</div>
				{/* <div>
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
				</div> */}
			</>
		);
	}
}

export default Mcq;
