import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export function useProfileStats(userId: string | undefined) {
  const [stats, setStats] = useState({
    transactionCount: 0,
    referralCount: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        // Get referral count
        const { count: referralCount } = await supabase
          .from('users')
          .select('id', { count: 'exact', head: true })
          .eq('sponsor_id', userId);

        // Get completed transaction count
        const { count: transactionCount } = await supabase
          .from('transactions')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', userId)
          .eq('status', 'completed');

        setStats({
          referralCount: referralCount || 0,
          transactionCount: transactionCount || 0
        });
      } catch (error) {
        console.error('Error loading stats:', error);
        // Set default values on error
        setStats({
          referralCount: 0,
          transactionCount: 0
        });
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, [userId]);

  return { stats, loading };
}