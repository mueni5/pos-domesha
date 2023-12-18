import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import SalesPage from './SalesPage';

const SalesReport = () => {
  const [report, setReport] = useState({
    data: [
      { name: 'January', revenue: 1500 },
      { name: 'February', revenue: 2200 },
      { name: 'March', revenue: 1800 },
      { name: 'April', revenue: 2800 },
      { name: 'May', revenue: 3200 },
      { name: 'June', revenue: 2100 },
    ],
  });

  useEffect(() => {
    // Simulate API call to get sales report data
    // For demonstration purposes, using dummy data directly in state
    // In a real scenario, you would fetch data from an API endpoint
  }, []); // No dependencies to prevent infinite loop (componentDidMount)

  return (
    <div>
      <h1>Sales Report</h1>
      
      <BarChart width={600} height={400} data={report.data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default SalesReport;
