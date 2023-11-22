
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const SalesReport = () => {

  const [report, setReport] = useState({});

  useEffect(() => {
    // Call API to get sales report data
    const fetchReport = async () => {
      const response = await fetch('/api/sales/report');
      const data = await response.json();
      setReport(data);
    };  
    fetchReport();
  }, []);

  return (
    <div>
      <h1>Sales Report</h1>
      
      <BarChart width={600} height={400} data={report.data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="revenue" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default SalesReport;