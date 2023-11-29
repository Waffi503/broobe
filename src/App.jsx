import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Layout from './layout/layout';
import Dashboard from './pages/dashboard';
function App() {

  return (
    <>
    <Routes>
        <Route element={<Layout />} >
          <Route index element={<ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

        </Route>

        <Route path="*" element={<div>404</div>} />
    </Routes>
    </>
  )
}

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default App
