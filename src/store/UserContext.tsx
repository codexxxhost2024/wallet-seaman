import { createContext, useContext, useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabaseClient';

export interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  mobile_number: string;
  wallet_balance: number;
  sponsor_id?: string;
  address?: string;
  sponsor?: {
    first_name: string;
    last_name: string;
    email: string;
  };
}

interface UserContextType {
  userData: UserData | null;
  loading: boolean;
  refreshUserData: () => Promise<void>;
}

export const UserContext = createContext<UserContextType>({
  userData: null,
  loading: true,
  refreshUserData: async () => {},
});

export const UserProvider = ({ children, session }: { children: React.ReactNode; session: Session | null }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const loadUserData = async () => {
    if (!session?.user) {
      setLoading(false);
      return;
    }

    try {
      const { data, error: queryError } = await supabase
        .from('users')
        .select(
          'id, first_name, last_name, email, phone, mobile_number, wallet_balance, sponsor_id, address'
        )
        .eq('id', session.user.id)
        .single();

      if (queryError) throw queryError;

      let sponsorData = undefined;
      if (data?.sponsor_id) {
        const { data: spData, error: sponsorError } = await supabase
          .from('sponsor_info')
          .select('first_name, last_name, email')
          .eq('id', data.sponsor_id)
          .single();

        if (sponsorError) {
          console.error('Error loading sponsor data:', sponsorError);
        } else {
          sponsorData = spData;
        }
      }

      setUserData(data ? { ...data, sponsor: sponsorData } : null);
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUserData();
  }, [session]);

  return (
    <UserContext.Provider value={{ userData, loading, refreshUserData: loadUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
