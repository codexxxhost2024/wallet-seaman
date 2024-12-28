import { useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabaseClient';

// Development mode: Always return a mock session
export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock session for development
    const mockSession: Session = {
      access_token: 'mock_token',
      token_type: 'bearer',
      expires_in: 3600,
      refresh_token: 'mock_refresh',
      user: {
        id: 'cad720e4-8d62-43a6-8e49-0e64694d7219',
        email: 'codexxxhost@gmail.com',
        aud: 'authenticated',
        role: 'authenticated',
        email_confirmed_at: new Date().toISOString(),
      },
      expires_at: Math.floor(Date.now() / 1000) + 3600
    };

    setSession(mockSession);
    setLoading(false);
  }, []);

  return { session, loading };
}