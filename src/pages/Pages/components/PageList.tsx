import React from 'react';
import { Link } from 'react-router-dom';

const pageRoutes = [
  { path: '/', name: 'Home' },
  { path: '/wallet', name: 'Finance' },
  { path: '/scanqr', name: 'Scan' },
  { path: '/cashin', name: 'Cash In' },
  { path: '/send', name: 'Send' },
  { path: '/services', name: 'Services' },
  { path: '/profile', name: 'Profile' },
];

const PageList = () => {
  return (
    <div>
      <h2>Available Pages</h2>
      <ul>
        {pageRoutes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageList;
