import React from 'react';

const CashInPage: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cash In to Panyero Wallet</h2>
      <p className="mb-4">Admin User: Cyrie Letada</p>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Payment Gateway</h3>
        <p>Panyero Wallet Account</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
        <div className="flex space-x-4">
          <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded">Maya</button>
          <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded">GCash</button>
          <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded">Bank Transfer</button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Select Cash In Mode</h3>
        <div className="flex space-x-4">
          <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded">Merchant</button>
          <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded">Agents</button>
        </div>
      </div>
    </div>
  );
};

export default CashInPage;
