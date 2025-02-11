import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Button } from './ui/button'; // shadcn/ui button
import { Input } from './ui/input'; // shadcn/ui input
import { motion } from 'framer-motion';

export default function JournalEntry({ user }) {
  const [event, setEvent] = useState('');

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from('journal_entries')
      .insert([{ user_id: user.id, event }]);

    if (error) alert(error.message);
    else setEvent('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4">Today's Journal Entry</h2>
      <Input
        type="text"
        placeholder="What happened today?"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
        className="mb-4"
      />
      <Button onClick={handleSubmit}>Save</Button>
    </motion.div>
  );
}