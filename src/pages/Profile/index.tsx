import { useNavigate } from 'react-router-dom';
import { useUser } from '../../store/UserContext';
import { useProfileStats } from './hooks/useProfileStats';
import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';
import ProfileHeader from './components/ProfileHeader';
import ProfileDetails from './components/ProfileDetails';
import ProfileStats from './components/ProfileStats';
import ProfileMenu from './components/ProfileMenu';
import ProfileActions from './components/ProfileActions';
import SignOutButton from './components/SignOutButton';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { userData, loading } = useUser();
  const { stats, loading: statsLoading } = useProfileStats(userData?.id);

  if (loading || statsLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!userData) {
    return <div className="flex items-center justify-center min-h-screen">Profile not found</div>;
  }

  const menuItems = [
    {
      icon: 'account_balance',
      label: 'Bank Accounts',
      description: 'Manage your linked accounts',
      onClick: () => navigate('/banking')
    },
    {
      icon: 'history',
      label: 'Transaction History',
      description: 'View your past transactions',
      onClick: () => navigate('/transactions')
    },
    {
      icon: 'people',
      label: 'Referrals',
      description: 'View and manage referrals',
      onClick: () => navigate('/referrals')
    }
  ];

  return (
    <div className="max-w-lg mx-auto bg-gray-100 min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 p-4">
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <ProfileHeader profile={userData} />
          <ProfileDetails profile={userData} />
          <ProfileStats 
            transactionCount={stats.transactionCount}
            referralCount={stats.referralCount}
          />
          <ProfileActions />
          <ProfileMenu items={menuItems} />
          <SignOutButton />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}