/*
  # Add Transactions Table

  1. New Tables
    - `transactions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references users)
      - `type` (text, transaction type)
      - `amount` (decimal, transaction amount)
      - `status` (text, transaction status)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on transactions table
    - Add policies for users to read their own transactions
*/

-- Create transaction_type enum
CREATE TYPE transaction_type AS ENUM ('cash_in', 'cash_out', 'transfer');

-- Create transaction_status enum
CREATE TYPE transaction_status AS ENUM ('pending', 'completed', 'failed');

-- Create transactions table
CREATE TABLE IF NOT EXISTS transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) NOT NULL,
  type transaction_type NOT NULL,
  amount DECIMAL NOT NULL CHECK (amount > 0),
  status transaction_status NOT NULL DEFAULT 'pending',
  description TEXT,
  recipient_id UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  
  CONSTRAINT valid_recipient CHECK (
    (type = 'transfer' AND recipient_id IS NOT NULL) OR
    (type != 'transfer' AND recipient_id IS NULL)
  )
);

-- Enable RLS
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own transactions"
  ON transactions FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR 
    recipient_id = auth.uid()
  );

CREATE POLICY "Users can insert own transactions"
  ON transactions FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Create updated_at trigger
CREATE TRIGGER set_transactions_updated_at
  BEFORE UPDATE ON transactions
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();

-- Create indexes
CREATE INDEX transactions_user_id_idx ON transactions(user_id);
CREATE INDEX transactions_recipient_id_idx ON transactions(recipient_id);
CREATE INDEX transactions_created_at_idx ON transactions(created_at DESC);