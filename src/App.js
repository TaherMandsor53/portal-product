import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/Store';
import Login from './components/authentication/Login';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Router>
          <Route path="/login" component={Login}></Route>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
