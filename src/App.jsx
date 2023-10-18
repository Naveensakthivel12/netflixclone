import './app.scss';
import Home from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	BrowserRouter,
} from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from './authContext/AuthContext';

const App = () => {
const user=false;
	return (
	<BrowserRouter>
	<Switch>
		<Route exact path="/" >
			<Register />
		</Route>
		<Route exact path="/home" >
			<Home/>
		</Route>
		<Route exact path="/login" >
			<Login/>
		</Route>
	</Switch>
	</BrowserRouter>
	);
};

export default App;