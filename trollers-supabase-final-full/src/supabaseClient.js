import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zixhdbdfujzguovzxpfy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppeGhkYmRmdWp6Z3Vvdnp4cGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1MjI0NzMsImV4cCI6MjA2NjA5ODQ3M30.8PYZA3FsXufaFxBHS51ikGcfIZXTJa1bpiwYw6Sa8DQ'

export const supabase = createClient(supabaseUrl, supabaseKey)
