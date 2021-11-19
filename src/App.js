import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';
import Home from './components/dashboard/Home';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
