import { useNavigate } from 'react-router-dom';
import { useDashboard } from '../../context/DashboardContext';

const Login = () => {
  const { dispatch } = useDashboard();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    dispatch({ type: 'SET_USER', payload: { role } });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded mr-2"
          onClick={() => handleLogin('admin')}
        >
          Login as Admin
        </button>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded"
          onClick={() => handleLogin('employee')}
        >
          Login as Employee
        </button>
      </div>
    </div>
  );
};

export default Login;