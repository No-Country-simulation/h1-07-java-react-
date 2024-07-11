import { useAuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Logout: React.FC = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/'); 
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Logout
      </button>
    </header>
  );
};


