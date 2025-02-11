import { useAuth } from '../hooks/useAuth';
import JournalEntry from '../components/JournalEntry';
import Navbar from '../components/Navbar'; // Add Navbar
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';

export default function Home() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  return (
    <>
      <Navbar /> {/* Add Navbar here */}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mt-5"
      >
        {user ? (
          <>
            <h1 className="text-primary fw-bold">Welcome, {user.email}</h1>
            <JournalEntry user={user} />
            <button className="btn btn-danger mt-3" onClick={signOut}>Logout</button>
          </>
        ) : (
          <>
            <h1 className="text-primary fw-bold">Welcome to the Journal App</h1>
            <p className="text-muted">Please log in to view your journal.</p>
            <button className="btn btn-primary mt-3" onClick={() => router.push('/login')}>
              Log In
            </button>
          </>
        )}
      </motion.div>
    </>
  );
}
