export default function FinanceActions() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <button className="bg-[#6CBF41] text-white p-4 rounded-lg">
        <span className="material-icons mb-2">add_circle</span>
        <span className="block">Cash In</span>
      </button>
      <button className="bg-[#6CBF41] text-white p-4 rounded-lg">
        <span className="material-icons mb-2">send</span>
        <span className="block">Transfer</span>
      </button>
    </div>
  );
}