import { createContext, useContext, useReducer, useEffect } from 'react';
import { mockApi } from '../frontend/services/mockApi';

const DashboardContext = createContext();

const initialState = {
  companies: [],
  selectedTenant: '1',
  data: {
    employees: [],
    leaveBalances: { available: 0, used: 0 },
    announcements: [],
  },
  loading: false,
  user: null,
};


const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COMPANIES':
      return { ...state, companies: action.payload };
    case 'SET_SELECTED_TENANT':
      return { ...state, selectedTenant: action.payload };
    case 'SET_DASHBOARD_DATA':
      return { ...state, data: action.payload, loading: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  useEffect(() => {
    const fetchCompanies = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const companies = await mockApi.fetchCompanies();
        dispatch({ type: 'SET_COMPANIES', payload: companies });
      } catch (error) {
        console.error('Fetch companies error:', error);
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    fetchCompanies();
  }, []);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);