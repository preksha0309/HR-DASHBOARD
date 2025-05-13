
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useDashboard } from './context/DashboardContext';
import ProtectedRoute from './frontend/components/ProtectedRoute';

const Dashboard = lazy(() => import('./frontend/components/Dashboard'));
const Login = lazy(() => import('./frontend/components/Login'));

const App = () => {
  const { state } = useDashboard();
  const { user } = state;

  return (
    <div className="min-h-screen bg-gray-100">
      <Suspense fallback={<div className="p-6">Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute role={user?.role || 'employee'}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;