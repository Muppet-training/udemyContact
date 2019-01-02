import React, { Component } from 'react';

class Test extends Component {
	state = {
		title: '',
		body: ''
	};

	// This is where you initially call data into your component to put it into state
	componentDidMount() {
		console.log('Component Did Mount');
		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					title: data.title,
					body: data.body
				})
			);
	}

	// This runs prior to the component loading fully
	// componentWillMount() {
	// 	console.log('Component Will Mount');
	// }

	// Will only run if the state has changed or rerenders
	// it will not run on initial load
	// componentDidUpdate() {
	// 	console.log('Component Did Update');
	// }

	// Is trigger when a trigger has been made..
	// Prior to the component refreshing the function will run
	// componentWillUpdate() {
	// 	console.log('Component Will Update');
	// }

	// When component recieves new properties this will run
	// componentWillReceiveProps(nextProps, nextState) {}

	// This will replace componentWillReceiveProps
	// Must return new state or null
	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	return {
	// 		test: 'something'
	// 	};
	// }

	// Takes in previous state & props so you can manipulate them

	// getSnapshotBeforeUpdate(prevProps, prevState) {}

	// Read this
	// https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705

	render() {
		const { title, body } = this.state;
		return (
			<div>
				<h1>{title}</h1>
				<p>{body}</p>
			</div>
		);
	}
}

export default Test;
