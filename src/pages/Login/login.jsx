import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

function Login({ setAuthorized }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((username === '123123') && (password === '123123')) setAuthorized(true);
  };
  return (
    <div id="wrapper">
      <form id="signin" method="" action="" autoComplete="off">
        <input type="text" value={username} required onChange={(e) => setUsername(e.target.value)} id="user" placeholder="username" />
        <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} id="pass" placeholder="password" />
        <button type="submit" onClick={handleSubmit}>&#xf0da;</button>
        <p>
          forgot your password?
          <a href="../Home/home">click here</a>
        </p>
      </form>
    </div>
  );
}
Login.propTypes = {
  setAuthorized: PropTypes.func.isRequired,
};

export default Login;
