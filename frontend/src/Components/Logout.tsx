import { useAuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Logout: React.FC = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white mb-10 shadow p-4 flex justify-between items-center">
      <button
        onClick={handleLogout}
        className="px-14 py-2 bg-[#959596] font-inter rounded-xl text-white hover:bg-gray-700"
      >
        Cerrar Sesión
      </button>
    </header>
  );
};


