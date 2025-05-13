import { useEffect } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { mockApi } from '../services/mockApi';
import CompanySwitcher from './CompanySwitcher';
import EmployeeList from './EmployeeList';
import LeaveBalance from './LeaveBalance';
import AnnouncementsFeed from './AnnouncementsFeed';
import ErrorBoundary from './ErrorBoundary';

const Dashboard = () => {
  const { state, dispatch } = useDashboard();
  const { selectedTenant, data, loading } = state;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const result = await mockApi.fetchDashboardData(selectedTenant);
        dispatch({ type: 'SET_DASHBOARD_DATA', payload: result });
      } catch (error) {
        console.error('Fetch dashboard data error:', error);
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    fetchData();
  }, [selectedTenant, dispatch]);

  return (
    <ErrorBoundary>
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">HR Dashboard</h1>
        <CompanySwitcher />
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <ErrorBoundary>
                <EmployeeList employees={data.employees} />
              </ErrorBoundary>
              <ErrorBoundary>
                <AnnouncementsFeed announcements={data.announcements} />
              </ErrorBoundary>
            </div>
            <ErrorBoundary>
              <LeaveBalance leaveBalances={data.leaveBalances} />
            </ErrorBoundary>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;