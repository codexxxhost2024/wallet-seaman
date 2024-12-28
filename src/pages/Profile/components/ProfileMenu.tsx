import React from 'react';

const ProfileMenu: React.FC = () => {
  return (
    <div className="mt-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
        <ul className="divide-y divide-gray-200">
          <li className="py-2">Update PIN or Password</li>
          <li className="py-2">Manage Payment Methods</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Privacy Settings</h3>
        <ul className="divide-y divide-gray-200">
          <li className="py-2">Enable/disable two-factor authentication</li>
          <li className="py-2">Toggle visibility of certain profile details</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Notification Preferences</h3>
        <ul className="divide-y divide-gray-200">
          <li className="py-2">App notifications</li>
          <li className="py-2">SMS alerts</li>
          <li className="py-2">Email updates</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;
