import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import {
	Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import UsingPromises from './UsingPromises';
import sampleApp from './reducers';

const history = createBrowserHistory()

let store = createStore(sampleApp)

const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={history}>
			<div className="App" >
				<div className="App-header" >
					<img src={logo} className="App-logo" alt="logo" />
					<h2> Welcome to React </h2>
				</div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/es2017">ES2017</Link></li>
				</ul>

				<Route exact path="/" component={Hello} />
				<Route path="/es2017" component={UsingPromises} />
			</div>
		</Router>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

class App extends Component {
	render() {
		return (Root(store));
	}
}

export default App;