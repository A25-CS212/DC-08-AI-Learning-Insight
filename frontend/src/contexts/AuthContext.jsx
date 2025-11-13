import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserLogged, putAccessToken, loginUser } from '../utils/network-data';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const { error, data } = await getUserLogged();

        if (!error) {
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (e) {
        setUser(null);
      } finally {
        setInitializing(false);
      }
    }

    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const { error, data } = await loginUser({ email, password });

      if (!error) {
        putAccessToken(data.token);
        setUser(data.user);
        navigate('/');
      } else {
        console.error(data);
        alert('Login gagal. Periksa kembali email dan password.');
      }
    } catch (e) {
      alert('Terjadi kesalahan pada server.');
    }
  };

  const logout = () => {
    setUser(null);
    putAccessToken('');
    navigate('/login');
  };

  const isAuthenticated = !!user;

  if (initializing) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, initializing }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;