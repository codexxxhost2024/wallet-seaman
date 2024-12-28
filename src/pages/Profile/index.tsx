import React from 'react';
import BottomNav from '../../components/BottomNav';
import ProfileHeader from './components/ProfileHeader';
import UserInfo from './components/UserInfo';
import ProfileStats from './components/ProfileStats';
import ProfileMenu from './components/ProfileMenu';
import ProfileActions from './components/ProfileActions';
import ProfileSupport from './components/ProfileSupport';

const ProfilePage: React.FC = () => {
  return (
    <div>
      <ProfileHeader />
      <UserInfo />
      <ProfileStats />
      <ProfileMenu />
      <ProfileActions />
      <ProfileSupport />
      {/* Profile Page Content will go here */}
      <BottomNav />
    </div>
  );
};

export default ProfilePage;
