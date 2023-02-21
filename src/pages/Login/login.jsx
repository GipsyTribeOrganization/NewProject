import React from 'react';
import '../../App.css'
const Login = () => {
	return (
			<div id="wrapper">
				<form id="signin" method="" action="" autoComplete="off">
					<input type="text" id="user" name="user" placeholder="username"/>
					<input type="password" id="pass" name="pass" placeholder="password"/>
					<button type="submit">&#xf0da;</button>
					<p>forgot your password? <a href="../Home/home">click here</a></p>
				</form>
			</div>
	);
};

export default Login;