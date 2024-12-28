import { useUser } from '../../../store/UserContext';

export default function FinanceHeader() {
  const { userData } = useUser();
  
  return (
    <div className="bg-white rounded-lg p-6 mb-4 shadow">
      <h2 className="text-2xl font-bold mb-2">Finance Overview</h2>
      <p className="text-gray-600">Welcome back, {userData?.first_name}</p>
    </div>
  );
}