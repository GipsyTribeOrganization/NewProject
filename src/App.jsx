import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Home/Navbar/navbar';
import Home from './pages/Home/home';
import Menu from './pages/Menu/menu';
import Login from './pages/Login/login';
import Groups from './pages/Menu/Pages/groups';
import Channels from './pages/Menu/Pages/channels';
import Message from './pages/Menu/Pages/message';
import Accounts from './pages/Menu/Pages/accounts';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />}>
          <Route path="/menu/groups" element={<Groups />} />
          <Route path="/menu/channels" element={<Channels />} />
          <Route path="/menu/message" element={<Message />} />
          <Route path="/menu/accounts" element={<Accounts />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
