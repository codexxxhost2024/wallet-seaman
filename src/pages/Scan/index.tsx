import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';
import ScannerView from './components/ScannerView';
import ScanInstructions from './components/ScanInstructions';

export default function ScanPage() {
  return (
    <div className="max-w-lg mx-auto bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <ScannerView />
        <ScanInstructions />
      </main>
      <BottomNav />
    </div>
  );
}