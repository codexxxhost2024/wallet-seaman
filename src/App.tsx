import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import { useAuth } from './hooks/useAuth';
import { UserProvider } from './store/UserContext';
import HomePage from './pages/Home';
import FinancePage from './pages/Finance';
import ScanPage from './pages/Scan';
import ServicesPage from './pages/Services';
import ProfilePage from './pages/Profile';
import PagesPage from './pages/Pages/Pages';
import CashInPage from './pages/CashIn/CashIn';
import SendPage from './pages/Send/Send';

export default function App() {
  const { session, loading: authLoading } = useAuth();

  if (authLoading) {
    return <div>Loading...</div>;
  }

  return (
    <UserProvider session={session}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wallet" element={<FinancePage />} />
          <Route path="/scanqr" element={<ScanPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/pages" element={<PagesPage />} />
          <Route path="/cashin" element={<CashInPage />} />
          <Route path="/send" element={<SendPage />} />
        </Routes>
        <BottomNav />
      </Router>
    </UserProvider>
  );
}
