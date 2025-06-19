
import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://eirgfbaiflggoefilbwh.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpcmdmYmFpZmxnZ29lZmlsYndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMTk1MzQsImV4cCI6MjA2NTc5NTUzNH0.FgnIXqcBKSfGqPt4Cg8NM_xMVxzypmm0w4OKtRcgalw';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
