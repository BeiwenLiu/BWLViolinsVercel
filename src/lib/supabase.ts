import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables');
}

// Untyped client used by lib/products, lib/storage, lib/auth
// (the integration client at @/integrations/supabase/client has a typed schema
//  that will be updated after the DB is provisioned)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
