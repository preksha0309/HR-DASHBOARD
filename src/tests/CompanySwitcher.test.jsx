import { render, screen, fireEvent } from '@testing-library/react';
import { DashboardProvider, useDashboard } from '../context/DashboardContext';
import CompanySwitcher from '../frontend/components/CompanySwitcher';



jest.mock('../context/DashboardContext', () => ({
  ...jest.requireActual('../context/DashboardContext'),
  useDashboard: jest.fn(),
}));

describe('CompanySwitcher', () => {
  const mockDispatch = jest.fn();
  const mockState = {
    companies: [
      { id: '1', name: 'TechCorp' },
      { id: '2', name: 'HealthInc' },
    ],
    selectedTenant: '1',
  };

  beforeEach(() => {
    useDashboard.mockReturnValue({
      state: mockState,
      dispatch: mockDispatch,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders company switcher with correct options', () => {
    render(
      <DashboardProvider>
        <CompanySwitcher />
      </DashboardProvider>,
    );

    expect(screen.getByLabelText('Select Company')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'TechCorp' })).toHaveValue('1');
    expect(screen.getByRole('option', { name: 'HealthInc' })).toHaveValue('2');
  });

  test('changes selected tenant on selection', () => {
    render(
      <DashboardProvider>
        <CompanySwitcher />
      </DashboardProvider>,
    );

    const select = screen.getByLabelText('Select Company');
    fireEvent.change(select, { target: { value: '2' } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_SELECTED_TENANT',
      payload: '2',
    });
  });

  test('displays correct selected tenant', () => {
    render(
      <DashboardProvider>
        <CompanySwitcher />
      </DashboardProvider>,
    );

    const select = screen.getByLabelText('Select Company');
    expect(select).toHaveValue('1');
  });
});