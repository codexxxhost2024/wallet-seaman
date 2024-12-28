import { createContext, useContext, useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabaseClient';

export interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  wallet_balance: number;
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

const UserContext = createContext<UserContextType>({
  userData: null,
  loading: true,
  refreshUserData: async () => {},
});

export function UserProvider({ children, session }: { children: React.ReactNode; session: Session | null }) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const loadUserData = async () => {
    if (!session?.user) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('users')
        .select(`
          id,
          first_name,
          last_name,
          email,
          phone,
          wallet_balance,
          sponsor:sponsor_info(
            first_name,
            last_name,
            email
          )
        `)
        .eq('id', session.user.id)
        .single();

      if (error) throw error;
      setUserData(data);
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
}

export const useUser = () => useContext(UserContext);