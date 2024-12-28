import { Link } from 'react-router-dom';

export default function ProfileActions() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <Link 
        to="/settings"
        className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
      >
        <span className="material-icons mr-3 text-gray-600">settings</span>
        <div>
          <h3 className="font-medium">Settings</h3>
          <p className="text-sm text-gray-500">Account preferences</p>
        </div>
      </Link>
      
      <Link 
        to="/security"
        className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
      >
        <span className="material-icons mr-3 text-gray-600">security</span>
        <div>
          <h3 className="font-medium">Security</h3>
          <p className="text-sm text-gray-500">PIN & face ID</p>
        </div>
      </Link>
    </div>
  );
}