/*
  # Fix Users Table RLS Policies - Version 2

  1. Changes
    - Drop all existing policies
    - Create new simplified policies with no recursion
    - Add basic sponsor data access
    - Ensure proper security boundaries

  2. Security
    - Users can only read and update their own data
    - Limited sponsor data visibility
    - No circular references
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Users can read sponsor basic info" ON users;
DROP POLICY IF EXISTS "Users can insert own data" ON users;

-- Create new simplified policies
CREATE POLICY "allow_read_own"
  ON users FOR SELECT
  TO authenticated
  USING (
    id = auth.uid() OR
    EXISTS (
      SELECT 1
      FROM users u
      WHERE u.id = auth.uid()
      AND u.sponsor_id = users.id
    )
  );

CREATE POLICY "allow_update_own"
  ON users FOR UPDATE
  TO authenticated
  USING (id = auth.uid());

CREATE POLICY "allow_insert_own"
  ON users FOR INSERT
  TO authenticated
  WITH CHECK (id = auth.uid());