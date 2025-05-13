import { render, screen } from '@testing-library/react';
import LeaveBalance from '../frontend/components/LeaveBalance';

describe('LeaveBalance', () => {
  test('renders leave balance with valid data', () => {
    const leaveBalances = { available: 15, used: 5 };
    render(<LeaveBalance leaveBalances={leaveBalances} />);

    expect(screen.getByText('Leave Balance')).toBeInTheDocument();
    expect(screen.getByText('Available')).toBeInTheDocument();
    expect(screen.getByText('Used')).toBeInTheDocument();
  });

  test('handles invalid data by showing zero values', () => {
    const leaveBalances = { available: -5, used: null };
    render(<LeaveBalance leaveBalances={leaveBalances} />);

    expect(screen.getByText('Leave Balance')).toBeInTheDocument();
    const pieChart = screen.getByTestId('recharts-pie-chart', { hidden: true });
    expect(pieChart).toBeInTheDocument();
  });

  test('displays loading skeleton when data is all zeros', () => {
    const leaveBalances = { available: 0, used: 0 };
    render(<LeaveBalance leaveBalances={leaveBalances} />);

    expect(screen.getByText('Leave Balance')).toBeInTheDocument();
    expect(screen.getByTestId('skeleton-loader', { hidden: true })).toBeInTheDocument();
  });
});