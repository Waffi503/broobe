import { useContext } from 'react';
import { AuthContext } from '@/contexts/authcontext';

export default function useAuth() {
  const {
    token,
    login,
    logout,
    isLogged
  } = useContext(AuthContext);
  
  return {
    token,
    login,
    logout,
    isLogged
  };
}