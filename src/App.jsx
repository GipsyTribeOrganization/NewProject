import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './pages/Home/Navbar/navbar';
import Home from './pages/Home/home';
import Menu from './pages/Menu/menu';
import Login from './pages/Login/login';
import Groups from './pages/Menu/Pages/groups';
import Channels from './pages/Menu/Pages/channels';
import Message from './pages/Menu/Pages/message';
import Accounts from './pages/Menu/Pages/accounts';

function App() {
  const [authorized, setAuthorized] = useState(false);
  return (
    <div>
      {authorized ? (
        <BrowserRouter>
          <Navbar />
          <div className="container mt-4">
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="menu" element={<Menu />}>
                <Route path="menu/groups" element={<Groups />} />
                <Route path="menu/channels" element={<Channels />} />
                <Route path="menu/message" element={<Message />} />
                <Route path="menu/accounts" element={<Accounts />} />
              </Route>
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
