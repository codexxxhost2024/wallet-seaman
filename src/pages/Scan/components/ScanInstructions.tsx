export default function ScanInstructions() {
  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">How to Scan</h2>
      <ol className="space-y-4">
        <li className="flex items-start">
          <span className="material-icons mr-2 text-[#6CBF41]">looks_one</span>
          <p>Position the QR code within the frame</p>
        </li>
        <li className="flex items-start">
          <span className="material-icons mr-2 text-[#6CBF41]">looks_two</span>
          <p>Hold steady until the code is recognized</p>
        </li>
        <li className="flex items-start">
          <span className="material-icons mr-2 text-[#6CBF41]">looks_3</span>
          <p>Follow the on-screen instructions to complete the transaction</p>
        </li>
      </ol>
    </div>
  );
}