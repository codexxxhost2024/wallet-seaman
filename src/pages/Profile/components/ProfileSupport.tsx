import React from 'react';

const ProfileSupport: React.FC = () => {
  return (
    <div className="mt-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2">App Support</h3>
        <ul className="divide-y divide-gray-200">
          <li className="py-2">
            <a href="#" className="text-blue-500">Help & Support</a>
          </li>
          <li className="py-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Feedback
            </button>
          </li>
          <li className="py-2">
            <a href="#" className="text-blue-500">Terms of Service</a>
          </li>
          <li className="py-2">
            <a href="#" className="text-blue-500">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSupport;
