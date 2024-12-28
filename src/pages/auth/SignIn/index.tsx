import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabaseClient';
import AuthLayout from '../../../components/auth/AuthLayout';
import PhoneSignInForm from './PhoneSignInForm';
import AuthFooter from '../../../components/auth/AuthFooter';

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePhoneSubmit = async (phone: string) => {
    setLoading(true);
    setError('');

    try {
      const { data: user, error: userError } = await supabase
        .from('users')
        .select('email')
        .eq('phone', phone)
        .single();

      if (userError) throw new Error('User not found');

      sessionStorage.setItem('signin_phone', phone);
      navigate('/pin');
    } catch (err) {
      setError('Invalid phone number');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Sign in to your account">
      <div className="space-y-6">
        <PhoneSignInForm
          onSubmit={handlePhoneSubmit}
          loading={loading}
          error={error}
        />
        <AuthFooter mode="signin" />
      </div>
    </AuthLayout>
  );
}