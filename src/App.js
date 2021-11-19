import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';
import Home from './components/dashboard/Home';
import PrivateRoute from './components/dashboard/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
