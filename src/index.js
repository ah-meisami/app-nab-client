import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
	return (
		<div>
			<h1>Login</h1>
		</div>
	);
};

const Portal = (props) => {
	console.log(props);
	return (
    <div>
      <button onClick={() => props.history.push('/visViewer/1')}>visViewer: 1</button>
			<h1>Portal</h1>
		</div>
	);
};

const VisBuilder = () => (
	<div>
		<h1>VisBuilder</h1>
	</div>
);

const VisViewer = (props) => {
	console.log(props);
  return (
    <div>
      <Link to="/portal">Portal</Link>
			<h1>VisViewer: {props.match.params.visName}</h1>
		</div>
	);
};

ReactDOM.render(
	<BrowserRouter>
		{/* <Route path='/' component={App}/> */}
		<Route path="/login" component={Login} />
		<Route path="/portal" component={Portal} />
		<Route path="/visBuilder" component={VisBuilder} />
		<Route path="/visViewer/:visName" component={VisViewer} />
		{/* {<Route path='/WebCatalog' component={WebCatalog}/>} */}
		{/* {<Route path='/UserManagement' component={UserManagement}/>} */}
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
