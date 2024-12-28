import { useUser } from '../../../store/UserContext';

export default function FinanceStats() {
  const { userData } = useUser();

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="text-sm text-gray-500">Balance</p>
        <p className="text-xl font-bold">₱{userData?.wallet_balance || 0}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="text-sm text-gray-500">Pending</p>
        <p className="text-xl font-bold">₱0</p>
      </div>
    </div>
  );
}