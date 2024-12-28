import React from 'react';

const ProfileHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-b-lg shadow-md">
      <div className="relative">
        <img
          src="/path/to/default-profile.png" // Placeholder image
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-white"
        />
        <span className="absolute bottom-0 right-0 bg-gray-200 rounded-full p-1">
          {/* Edit Icon */}
          <span className="material-icons text-sm">edit</span>
        </span>
      </div>
      <div className="mt-2">
        <h2 className="text-xl font-bold text-white">John Doe</h2>
        <p className="text-gray-100 text-sm">Gold Member</p>
      </div>
      <button className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Edit
      </button>
    </div>
  );
};

export default ProfileHeader;
