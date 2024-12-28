/*
  # Final Fix for Users Table RLS Policies

  1. Changes
    - Drop all existing policies
    - Create single, simple read policy
    - Separate sponsor data into a view
    - Ensure no recursive queries

  2. Security
    - Users can only read and update their own data
    - Sponsor data accessed through separate view
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "allow_read_own" ON users;
DROP POLICY IF EXISTS "allow_update_own" ON users;
DROP POLICY IF EXISTS "allow_insert_own" ON users;

-- Create view for sponsor data
CREATE OR REPLACE VIEW public.sponsor_info AS
SELECT 
  id,
  first_name,
  last_name,
  email
FROM users;

-- Create simple policies without recursion
CREATE POLICY "users_select_policy"
ON users FOR SELECT
TO authenticated
USING (id = auth.uid());

CREATE POLICY "users_update_policy"
ON users FOR UPDATE
TO authenticated
USING (id = auth.uid());

CREATE POLICY "users_insert_policy"
ON users FOR INSERT
TO authenticated
WITH CHECK (id = auth.uid());

-- Grant access to sponsor_info view
GRANT SELECT ON sponsor_info TO authenticated;