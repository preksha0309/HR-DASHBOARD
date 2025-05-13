import React, { useState } from 'react';

const EmployeeList = ({ employees }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const paginatedEmployees = employees.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Employee List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedEmployees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{employee.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.department}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.designation}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:bg-gray-300"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:bg-gray-300"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeList;