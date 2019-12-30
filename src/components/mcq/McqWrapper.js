import React from "react";
import Timer from "../timer/Timer";
import Mcq from "./Mcq";

class McqWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = { question: [] };
		this.answers = {};
		this.onAnswered = this.onAnswered.bind(this);
		this.totalTimeInSeconds = this.props.location.state.totalTimeInSeconds;
	}

	timeUp() {
		console.log("Times up");
	}

	componentDidMount() {
		const {
			match: { params }
		} = this.props;
		console.log(params.testId);

		// Fetch questions for testId
		this.setState({
			question: [
				{
					testId: "IOECS3DS0001",
					qNo: 1,
					question: "A for ?",
					ans_options: ["Apple", "Orange", "Banana", "Carrot"],
					mark_val: "5.5",
					ansType: "single"
				},
				{
					testId: "IOECS3DS0001",
					qNo: 2,
					question: "B for ?",
					ans_options: ["Banana", "Pear", "Mango", "Water Melon"],
					mark_val: "5.5",
					ansType: "single"
				},
				{
					testId: "IOECS3DS0001",
					qNo: 3,
					question: "C for ?",
					ans_options: ["Carrot", "Dates", "Mango", "Melon"],
					mark_val: "5.5",
					ansType: "single"
				},
				{
					testId: "IOECS3DS0001",
					qNo: 4,
					question: "D for ?",
					ans_options: ["Dates", "Apple", "Kiwi", "Lemon"],
					mark_val: "5.5",
					ansType: "single"
				},
				{
					testId: "IOECS3DS0001",
					qNo: 5,
					question: "G for ?",
					ans_options: ["Guava", "Mango", "Dates", "Banana"],
					mark_val: "5.5",
					ansType: "single"
				},
				{
					testId: "IOECS3DS0001",
					qNo: 6,
					question: "K for ?",
					ans_options: ["Kiwi", "Carrot", "Water Melon", "Mango"],
					mark_val: "5.5",
					ansType: "single"
				},
				{
					testId: "IOECS3DS0001",
					qNo: 7,
					question: "L for ?",
					ans_options: ["Lemon", "Banana", "Pear", "Kiwi"],
					mark_val: "5.5",
					ansType: "single"
				},
				{
					testId: "IOECS3DS0001",
					qNo: 8,
					question: "M for ?",
					ans_options: ["Mango", "Apple", "Kiwi", "Melon"],
					mark_val: "5.5",
					ansType: "single"
				},
				{
					testId: "IOECS3DS0001",
					qNo: 9,
					question: "P for ?",
					ans_options: ["Pineapple", "Kiwi", "Guava", "Water Melon"],
					mark_val: "5.5",
					ansType: "single"
				},
				{
					testId: "IOECS3DS0001",
					qNo: 10,
					question: "R for ?",
					ans_options: ["Raspberry", "Strawberry", "Mango", "Kiwi"],
					mark_val: "5.5",
					ansType: "single"
				}
			]
		});
	}

	/**
	 * Triggered whenever user answers question by selecting checkbox or radio
	 */
	onAnswered({ value, question: { ansType, qNo }, isChecked }) {
		console.log(value + " " + ansType + " " + qNo);
		if (ansType === "single") {
			this.answers[qNo] = value;
		} else {
			console.log(isChecked);
		}
		console.log(this.answers);
	}

	render() {
		return (
			<div>
				<Timer
					totalTime={this.totalTimeInSeconds}
					timeUp={() => this.timeUp()}
				/>
				{this.state.question.map(q => (
					<Mcq
						question={q}
						key={q.qNo}
						onAnswered={this.onAnswered}
					/>
				))}
			</div>
		);
	}
}

export default McqWrapper;
