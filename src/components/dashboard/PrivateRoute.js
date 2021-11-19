import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../authentication/Login';
import Home from './Home';

const PrivateRoute = () => {
  return <Home />;
};

export default PrivateRoute;
