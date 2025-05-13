import { useDashboard } from '../../context/DashboardContext';

const CompanySwitcher = () => {
  const { state, dispatch } = useDashboard();
  const { companies, selectedTenant } = state;

  const handleChange = (e) => {
    dispatch({ type: 'SET_SELECTED_TENANT', payload: e.target.value });
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700">Select Company</label>
      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={selectedTenant}
        onChange={handleChange}
      >
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CompanySwitcher;