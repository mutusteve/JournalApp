import { useAuth } from '../hooks/useAuth';
import JournalEntry from '../components/JournalEntry';
import { motion } from 'framer-motion';

export default function Home() {
  const { user } = useAuth();

  if (!user) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4"
      >
        <h1 className="text-2xl font-bold">Welcome to the Journal App</h1>
        <p className="mt-2">Please log in to view your journal.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      <h1 className="text-2xl font-bold">Welcome, {user.email}</h1>
      <JournalEntry user={user} />
    </motion.div>
  );
}