import { supabase } from '../../../lib/supabaseClient';

export default function SignOutButton() {
  return (
    <button 
      className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
      onClick={() => supabase.auth.signOut()}
    >
      Sign Out
    </button>
  );
}