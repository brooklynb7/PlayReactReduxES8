import React, { Component } from 'react';

const usingPromisesLink = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises';

const asyncText = `
	var doSomething = () => {
		return 'A';
	};

	var doSomethingElse = () => {
		return 'B';
	};

	var doThirdThing = () => {
		return 'C';
	};

	var failureCallback = () => {
		return 'Error';
	};

	async function foo() {
		try {
			let result = await doSomething();
			let newResult = await doSomethingElse(result);
			let finalResult = await doThirdThing(newResult);
			console.log(\`Got the final result: \${finalResult} \`);
		} catch (error) {
			failureCallback(error);
		}
	}

	foo();

	export default Hello;
`;

const element =
	<div>
		<h2>Using Promise</h2>
		<a target='_blank' href={usingPromisesLink}>${usingPromisesLink}</a>
		<p>This symmetry with synchronous code culminates in the async/await syntactic sugar in ECMAScript 2017:</p>
		<code>${asyncText}</code>
	</div>;


let doSomething = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('A');
		}, 1000);
	});
};

var doSomethingElse = () => {
	return 'B';
};

var doThirdThing = () => {
	return 'C';
};

var failureCallback = (error) => {
	console.log(`Error: ${error}`);
	return error;
};

async function foo() {
	try {
		let result = await doSomething();
		let newResult = await doSomethingElse(result);
		let finalResult = await doThirdThing(newResult);
		console.log(`Got the final result: ${finalResult}`);
	} catch (error) {
		failureCallback(error);
	}
}

foo();

class UsingPromises extends Component {
	render() {
		return (element);
	}
}

export default UsingPromises;