import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://begrltzirrmtpglrwexm.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZ3JsdHppcnJtdHBnbHJ3ZXhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ0NTE4MjcsImV4cCI6MTk4MDAyNzgyN30.qzfgRipIjVSsc1fTotoz28YIXJNa3M64UudB5sdeGXg')


export {
    supabase
}