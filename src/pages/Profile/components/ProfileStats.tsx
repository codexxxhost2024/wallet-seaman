interface ProfileStatsProps {
  transactionCount: number;
  referralCount: number;
}

export default function ProfileStats({ transactionCount, referralCount }: ProfileStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">Transactions</p>
        <p className="text-2xl font-semibold">{transactionCount}</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">Referrals</p>
        <p className="text-2xl font-semibold">{referralCount}</p>
      </div>
    </div>
  );
}