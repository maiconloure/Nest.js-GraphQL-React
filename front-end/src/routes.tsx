import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={Home} />
      <Route path="/" element={Messages} />
      <Route path="/" element={() => <h1>404 - Page not found</h1>} />
    </Router>
  )
}