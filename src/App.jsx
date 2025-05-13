import React, { useState, useEffect } from 'react';
import CompanySwitcher from './frontend/components/CompanySwitcher';
import EmployeeList from './frontend/components/EmployeeList';
import LeaveBalance from './frontend/components/LeaveBalance';
import AnnouncementsFeed from './frontend/components/AnnouncementsFeed';
import ErrorBoundary from './frontend/components/ErrorBoundary';
import { mockApi } from './frontend/services/mockApi';

const App = () => {
  const [selectedTenant, setSelectedTenant] = useState(mockApi.companies[0].id);
  const [data, setData] = useState({
    employees: [],
    leaveBalances: { available: 0, used: 0 },
    announcements: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    mockApi.fetchData(selectedTenant).then((result) => {
      setData(result);
      setLoading(false);
    }).catch((err) => {
      console.error('Fetch error:', err);
      setLoading(false);
    });
  }, [selectedTenant]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">HR Dashboard</h1>
          <CompanySwitcher
            companies={mockApi.companies}
            selectedTenant={selectedTenant}
            setSelectedTenant={setSelectedTenant}
          />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <EmployeeList employees={data.employees} />
                <AnnouncementsFeed announcements={data.announcements} />
              </div>
              <LeaveBalance leaveBalances={data.leaveBalances} />
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;