export const mockApi = {
  companies: [
    { id: '1', name: 'TechCorp' },
    { id: '2', name: 'HealthInc' },
  ],
  employees: {
    '1': [
      { id: 'e1', name: 'John Doe', department: 'Engineering', designation: 'Developer', status: 'Active' },
      { id: 'e2', name: 'Jane Smith', department: 'HR', designation: 'Manager', status: 'On Leave' },
      { id: 'e3', name: 'Bob Johnson', department: 'Sales', designation: 'Executive', status: 'Active' },
    ],
    '2': [
      { id: 'e4', name: 'Alice Brown', department: 'Medical', designation: 'Nurse', status: 'Active' },
      { id: 'e5', name: 'Mike Wilson', department: 'Admin', designation: 'Coordinator', status: 'Active' },
    ],
  },
  leaveBalances: {
    '1': { available: 15, used: 5 },
    '2': { available: 20, used: 3 },
  },
  announcements: {
    '1': [
      { id: 'a1', message: 'Team meeting on Friday', author: 'HR', timestamp: '2025-05-10T10:00:00Z' },
      { id: 'a2', message: 'New policy update', author: 'Admin', timestamp: '2025-05-09T09:00:00Z' },
    ],
    '2': [
      { id: 'a3', message: 'Health checkup scheduled', author: 'Medical', timestamp: '2025-05-11T08:00:00Z' },
    ],
  },
  fetchData: async (tenantId) => ({
    employees: mockApi.employees[tenantId] || [],
    leaveBalances: mockApi.leaveBalances[tenantId] || { available: 0, used: 0 },
    announcements: mockApi.announcements[tenantId] || [],
  }),
};