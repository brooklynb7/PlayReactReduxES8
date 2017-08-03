import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import {
	NavLink
} from 'react-router-dom'
import PropTypes from 'prop-types'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import logo from '../images/logo.svg';
import './App.css';
import Hello from './Hello';
import UsingPromises from './UsingPromises';
import sampleApp from '../reducers';

let history = createBrowserHistory()
let store = createStore(sampleApp)

const Root = () => (
	<Provider store={store}>
		<Router history={history}>
			<MuiThemeProvider>
				<div className="App" >
					<div className="App-header" >
						<img src={logo} className="App-logo" alt="logo" />
						<h2> Welcome to React </h2>
					</div>
					<ul>
						<li><NavLink exact activeClassName="active" className="navLink" to="/">Home</NavLink></li>
						<li><NavLink activeClassName="active" className="navLink" to="/es2017">ES2017</NavLink></li>
					</ul>

					<Route exact path="/" component={Hello} />
					<Route exact path="/es2017" component={UsingPromises} />
				</div>
			</MuiThemeProvider>
		</Router>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

class App extends Component {
	render(props) {
		return (Root());
	}
}

export default App;