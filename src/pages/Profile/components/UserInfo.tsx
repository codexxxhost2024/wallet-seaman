import React from 'react';

const UserInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-4">
      <h3 className="text-lg font-semibold mb-2">User Information</h3>
      <div className="flex items-center justify-between border-b py-2">
        <span>Full Name</span>
        <div>
          <span>John Doe</span>
          <span className="material-icons text-sm ml-1">edit</span>
        </div>
      </div>
      <div className="flex items-center justify-between border-b py-2">
        <span>Mobile Number</span>
        <span>123-456-7890</span>
      </div>
      <div className="flex items-center justify-between border-b py-2">
        <span>Email Address</span>
        <div>
          <span>john.doe@example.com</span>
          {/* Verification status indicator */}
          <span className="material-icons text-sm ml-1 text-green-500">verified</span>
          <span className="material-icons text-sm ml-1">edit</span>
        </div>
      </div>
      <div className="flex items-center justify-between border-b py-2">
        <span>Sponsor ID</span>
        <span>SP12345</span>
      </div>
      <div className="flex items-center justify-between py-2">
        <span>Address</span>
        <div>
          <span>123 Main St</span>
          <span className="material-icons text-sm ml-1">edit</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
