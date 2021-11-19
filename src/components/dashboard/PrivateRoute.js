import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default PrivateRoute;
