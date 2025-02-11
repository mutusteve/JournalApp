import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AuthForm({ type }) {
  const { signIn, signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      if (type === 'login') {
        await signIn(email, password);
      } else {
        const { error } = await signUp(email, password);
        if (error) throw error;
        router.push('/');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 w-50 mx-auto border rounded shadow-sm mt-5"
    >
      <h2 className="mb-4 text-center">{type === 'login' ? 'Login' : 'Sign Up'}</h2>
      {error && <p className="text-danger text-center">{error}</p>}
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary w-100" onClick={handleSubmit}>
        {type === 'login' ? 'Login' : 'Sign Up'}
      </button>
    </motion.div>
  );
}
