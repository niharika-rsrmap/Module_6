import { getUserRole } from '../utils/auth';
import StudentDashboard from './roles/StudentDashboard';
import InstructorDashboard from './roles/InstructorDashboard';
import AdminDashboard from './roles/AdminDashboard';
import { useNavigate } from '@tanstack/react-router';

const Dashboard = () => {
  const navigate = useNavigate();
  const role = getUserRole();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate({ to: '/login' });
  };

  if (role === 'student') {
    return (
      <div className="p-6">
        <StudentDashboard />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  if (role === 'instructor') {
    return (
      <div className="p-6">
        <InstructorDashboard />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  if (role === 'admin') {
    return (
      <div className="p-6">
        <AdminDashboard />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return <div>Access Denied</div>;
};

export default Dashboard;
