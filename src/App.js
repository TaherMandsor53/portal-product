import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/Store';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
