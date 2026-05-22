import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kvvilmbgllycsphzyavq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2dmlsbWJnbGx5Y3NwaHp5YXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NDcwMjgsImV4cCI6MjA2MjMyMzAyOH0._x-yGUQeTqw5QDrMnulS8yD8onYkqHyWMjACC2Qzbu4';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
