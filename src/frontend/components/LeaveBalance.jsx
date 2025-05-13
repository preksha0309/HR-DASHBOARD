import { PieChart, Pie, Cell, Legend } from 'recharts';
import { memo } from 'react';

const LeaveBalance = ({ leaveBalances }) => {
  const data = [
    { name: 'Available', value: leaveBalances.available >= 0 ? leaveBalances.available : 0 },
    { name: 'Used', value: leaveBalances.used >= 0 ? leaveBalances.used : 0 },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Leave Balance</h2>
      {data.every((item) => item.value === 0) ? (
        <div className="animate-pulse h-40 bg-gray-200 rounded"></div>
      ) : (
        <PieChart width={300} height={200}>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? '#82ca9d' : '#ff7300'} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      )}
    </div>
  );
};

export default memo(LeaveBalance);