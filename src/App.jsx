import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Layout from './layout/layout';
import Dashboard from './pages/dashboard';
import Issue from './pages/issue';
import EditIssue from './pages/editIssue';
import  {AuthContextProvider} from '@/contexts/authContext';
import useAuth from '@/hooks/useAuth';
function App() {

  return (
    <AuthContextProvider>
      <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Navigate to="/issues" />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path='issues' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
            <Route path='issues/new' element={<ProtectedRoute><Issue /></ProtectedRoute>} />
            <Route path='issues/:id' element={<ProtectedRoute><EditIssue /></ProtectedRoute>} />

            <Route path='*' element={<Navigate to="/issues" />} />
          </Route>

          <Route path="*" element={<div>404</div>} />
      </Routes>
    </AuthContextProvider>
  )
}

const ProtectedRoute = ({ children }) => {
  const {isLogged } = useAuth();

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default App
