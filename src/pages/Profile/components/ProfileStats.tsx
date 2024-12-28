import React from 'react';
import { Link } from 'react-router-dom';

const ProfileStats: React.FC = () => {
  return (
    <div className="mt-4">
      <Link to="/wallet" className="bg-white rounded-lg shadow-md p-4 block">
        <h3 className="text-lg font-semibold mb-2">Current Wallet Balance</h3>
        <p className="text-2xl font-bold">$100.00</p>
      </Link>

      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Recent Transactions</h3>
        <ul>
          <li>Transaction 1 - $10.00</li>
          <li>Transaction 2 - $20.00</li>
          <li>Transaction 3 - $30.00</li>
        </ul>
        <Link to="/wallet" className="text-blue-500 mt-2 block">View All</Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Level-Based Rewards</h3>
        <p>Current Level: <strong>Bronze</strong></p>
        <p>Reward Points: <strong>50</strong></p>
      </div>
    </div>
  );
};

export default ProfileStats;
