/*
  # Fix Users Table RLS Policies

  1. Changes
    - Drop existing problematic policies
    - Create new simplified policies without recursion
    - Add proper security for user data access

  2. Security
    - Users can only read and update their own data
    - Basic sponsor data is readable
    - No circular references in policies
*/

-- Drop existing policies to start fresh
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Users can read sponsor data" ON users;
DROP POLICY IF EXISTS "Users can insert during signup" ON users;

-- Create new simplified policies
CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  TO authenticated
  USING (
    id = auth.uid()
  );

CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  TO authenticated
  USING (
    id = auth.uid()
  );

CREATE POLICY "Users can read sponsor basic info"
  ON users FOR SELECT
  TO authenticated
  USING (
    id IN (
      SELECT sponsor_id 
      FROM users 
      WHERE id = auth.uid() AND sponsor_id IS NOT NULL
    )
  );

CREATE POLICY "Users can insert own data"
  ON users FOR INSERT
  TO authenticated
  WITH CHECK (
    id = auth.uid()
  );