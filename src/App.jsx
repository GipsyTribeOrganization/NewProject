import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './pages/Home/Navbar/navbar';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Groups from './pages/Menu/Pages/groups';
import Channels from './pages/Menu/Pages/channels';
import Message from './pages/Menu/Pages/message';
import Accounts from './pages/Menu/Pages/accounts';

function App() {
  const [authorized, setAuthorized] = useState(false);
  return (
    <div className="app">
      {authorized ? (
        <BrowserRouter>
          <Navbar />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/channels" element={<Channels />} />
              <Route path="/message" element={<Message />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
      ) : (
        <div className="container">
          <Login setAuthorized={setAuthorized} />
        </div>
      )}
    </div>
  );
}

export default App;
