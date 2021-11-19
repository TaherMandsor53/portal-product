import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';
import Home from './components/dashboard/Home';
import Store from './store/Store';

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
