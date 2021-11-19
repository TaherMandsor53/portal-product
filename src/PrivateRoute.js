import React from 'react';

export default function PrivateRoute({ isAuthenticated }) {
  window.location.pathname = '/home';
  return <> {isAuthenticated && window.location.pathname}</>;
}
