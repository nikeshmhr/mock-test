import React from "react";
import { Link } from "react-router-dom";

class TestSets extends React.Component {
	constructor(props) {
		super(props);
		this.state = { testSets: [] };
	}

	componentDidMount() {
		this.setState({
			testSets: [
				{
					testId: "IOECS3DS0001",
					testSet: "Set 1",
					testName: "Engineering Drawing Sem 1",
					duration_secs: 10800,
					linking_fk: "...",
					other_details: "..."
				},
				{
					testId: "IOECS3DS0002",
					testSet: "Set 2",
					testName: "Engineering Drawing Sem 2",
					duration_secs: 10800,
					linking_fk: "...",
					other_details: "..."
				}
			]
		});
	}

	render() {
		return (
			<div>
				<h3>Test Sets</h3>

				<ul className="list-group">
					{this.state.testSets.map(t => (
						<li className="list-group-item" key={t.testId}>
							<span>
								{t.testSet}: {t.testName}
							</span>
							<Link
								to={{
									pathname: `/test/${t.testId}`,
									state: {
										totalTimeInSeconds: t.duration_secs
									}
								}}
								className=" btn btn-success float-right"
							>
								Start
							</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default TestSets;
