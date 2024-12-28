import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { UserProvider } from './store/UserContext';
import HomePage from './pages/Home';
import FinancePage from './pages/Finance';
import ScanPage from './pages/Scan';
import ServicesPage from './pages/Services';
import ProfilePage from './pages/Profile';

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
        </Routes>
      </Router>
    </UserProvider>
  );
}