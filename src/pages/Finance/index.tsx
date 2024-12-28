import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';
import FinanceHeader from './components/FinanceHeader';
import FinanceStats from './components/FinanceStats';
import FinanceActions from './components/FinanceActions';
import RecentTransactions from '../../components/RecentTransactions';

export default function FinancePage() {
  return (
    <div className="max-w-lg mx-auto bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <FinanceHeader />
        <FinanceStats />
        <FinanceActions />
        <RecentTransactions />
      </main>
      <BottomNav />
    </div>
  );
}