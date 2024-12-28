export default function ServiceSearch() {
  return (
    <div className="mb-6">
      <div className="bg-white rounded-lg shadow flex items-center p-3">
        <span className="material-icons text-gray-400 mr-2">search</span>
        <input
          type="text"
          placeholder="Search services..."
          className="flex-1 outline-none"
        />
      </div>
    </div>
  );
}