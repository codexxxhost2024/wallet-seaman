import { useUser } from '../store/UserContext';

export default function WalletBalance() {
  const { userData } = useUser();

  const handleCashIn = () => {
    // Implement cash in functionality
    console.log('Cash in clicked');
  };

  const handleTransfer = () => {
    // Implement transfer functionality
    console.log('Transfer clicked');
  };

  return (
    <div className="bg-white rounded-lg p-4 mb-4 shadow">
      <div className="text-3xl font-bold">₱{userData?.wallet_balance || 0}</div>
      <div className="text-gray-500 text-sm">Available balance</div>
      <div className="mt-4 flex gap-4">
        <button 
          className="flex-1 bg-[#6CBF41] text-white p-3 rounded-lg"
          onClick={handleCashIn}
        >
          Cash In
        </button>
        <button 
          className="flex-1 bg-[#6CBF41] text-white p-3 rounded-lg"
          onClick={handleTransfer}
        >
          Transfer
        </button>
      </div>
    </div>
  );
}