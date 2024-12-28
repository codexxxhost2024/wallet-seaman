import { UserProfile } from '../types';

interface ProfileHeaderProps {
  profile: UserProfile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-[#6CBF41] rounded-full p-4">
        <span className="text-white text-2xl">
          {profile.first_name[0]}{profile.last_name[0]}
        </span>
      </div>
      <div>
        <h2 className="text-xl font-semibold">
          {profile.first_name} {profile.last_name}
        </h2>
        <p className="text-gray-600">{profile.email}</p>
      </div>
    </div>
  );
}