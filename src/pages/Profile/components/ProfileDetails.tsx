import { UserData } from '../../../store/UserContext';

interface ProfileDetailsProps {
  profile: UserData;
}

export default function ProfileDetails({ profile }: ProfileDetailsProps) {
  return (
    <div className="space-y-3 mt-6">
      <div className="border-b pb-2">
        <p className="text-sm text-gray-500">Phone Number</p>
        <p className="font-medium">{profile.phone}</p>
      </div>
      
      <div className="border-b pb-2">
        <p className="text-sm text-gray-500">Wallet Balance</p>
        <p className="font-medium">₱{profile.wallet_balance || 0}</p>
      </div>

      {profile.sponsor && (
        <div className="border-b pb-2">
          <p className="text-sm text-gray-500">Sponsor</p>
          <p className="font-medium">
            {profile.sponsor.first_name} {profile.sponsor.last_name}
          </p>
          <p className="text-sm text-gray-600">{profile.sponsor.email}</p>
        </div>
      )}
    </div>
  );
}