import { useNavigate } from '@tanstack/react-router';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role: string) => {
    const fakeToken = btoa(JSON.stringify({ role }));
    localStorage.setItem('token', fakeToken);
    navigate({ to: '/dashboard' });
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Login</h2>
      <button onClick={() => handleLogin('student')}>Login as Student</button>
      <button onClick={() => handleLogin('instructor')}>Login as Instructor</button>
      <button onClick={() => handleLogin('admin')}>Login as Admin</button>
    </div>
  );
};

export default Login;
