import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/button'; // shadcn/ui button
import { Input } from '../components/ui/input'; // shadcn/ui input

export default function Login() {
  const { user, signIn, signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await signIn(email, password);
  };

  const handleSignUp = async () => {
    await signUp(email, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleSignUp}>Sign Up</Button>
    </div>
  );
}