import { mockApi } from '../services/mockApi';

describe('mockApi', () => {
  test('fetchDashboardData returns correct data for valid tenant', async () => {
    const tenantId = '1';
    const result = await mockApi.fetchDashboardData(tenantId);

    expect(result).toEqual({
      employees: expect.arrayContaining([
        expect.objectContaining({ id: 'e1', name: 'John Doe' }),
        expect.objectContaining({ id: 'e2', name: 'Jane Smith' }),
        expect.objectContaining({ id: 'e3', name: 'Bob Johnson' }),
      ]),
      leaveBalances: { available: 15, used: 5 },
      announcements: expect.arrayContaining([
        expect.objectContaining({ id: 'a1', message: 'Team meeting on Friday' }),
        expect.objectContaining({ id: 'a2', message: 'New policy update' }),
      ]),
    });
  });

  test('fetchDashboardData returns empty data for invalid tenant', async () => {
    const tenantId = 'invalid';
    const result = await mockApi.fetchDashboardData(tenantId);

    expect(result).toEqual({
      employees: [],
      leaveBalances: { available: 0, used: 0 },
      announcements: [],
    });
  });

  test('fetchDashboardData simulates API delay', async () => {
    const tenantId = '1';
    const start = Date.now();
    await mockApi.fetchDashboardData(tenantId);
    const duration = Date.now() - start;

    expect(duration).toBeGreaterThanOrEqual(1000); // 1000ms delay
  });
});