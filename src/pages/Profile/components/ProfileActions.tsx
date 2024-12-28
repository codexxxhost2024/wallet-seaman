import React from 'react';

const ProfileActions: React.FC = () => {
  return (
    <div className="mt-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2">Affiliate Program</h3>
        <div className="flex items-center justify-between border-b py-2">
          <span>Your Referral Code</span>
          <div>
            <span>ABC123XYZ</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2">
              Copy
            </button>
          </div>
        </div>
        <h4 className="text-md font-semibold mt-2">Referral History</h4>
        <ul>
          <li>Referral 1 - Reward: $5.00</li>
          <li>Referral 2 - Reward: $5.00</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileActions;
