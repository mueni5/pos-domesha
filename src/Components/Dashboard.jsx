import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Menu from './Menu';
import Cashier from './Cashier';

import SalesPage from './SalesPage';
import SalesReport from './SalesReport';

function Dashboard({ userRole }) {
  const [isShiftStarted, setIsShiftStarted] = useState(false);
  const [shiftHistory, setShiftHistory] = useState([]);
  const navigate = useNavigate();

  const handleStartShift = () => {
    const shiftStart = new Date();
    setIsShiftStarted(true);
    setShiftHistory([...shiftHistory, { start: shiftStart, end: null }]);
    navigate('/dashboard');
  };

  const handleEndShift = () => {
    const shiftEnd = new Date();
    setIsShiftStarted(false);
    const updatedHistory = shiftHistory.map((shift) =>
      shift.end === null ? { ...shift, end: shiftEnd } : shift
    );
    setShiftHistory(updatedHistory);
  };

  const renderContentBasedOnRole = () => {
    switch (userRole) {
      case 'waiter':
      case 'bartender':
        return <Menu />;
      case 'cashier':
        return <Cashier />;
      case 'admin':
        return <SalesReport />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <img
        className='s-image'
        src="/Toast glass.jpeg"
        alt="food"
        style={{ width: '200px', height: '200px' }}
      />

      {isShiftStarted ? (
        <ShiftInfo
          start={shiftHistory[shiftHistory.length - 1].start}
          end={shiftHistory[shiftHistory.length - 1].end}
          onEndShift={handleEndShift}
        />
      ) : (
        <button onClick={handleStartShift}>Start Shift</button>
      )}

      {renderContentBasedOnRole()}

      {/* Display Shift History */}
      <h2>Shift History</h2>
      <ul>
        {shiftHistory.map((shift, index) => (
          <li key={index}>
            {`Shift ${index + 1}: Started - ${shift.start.toLocaleString()}, Ended - ${
              shift.end ? shift.end.toLocaleString() : 'Ongoing'
            }`}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShiftInfo({ start, end, onEndShift }) {
  return (
    <>
      <p>Started: {start.toLocaleString()}</p>
      <p>Ended: {end ? end.toLocaleString() : 'Ongoing'}</p>
      <button onClick={onEndShift}>End Shift</button>
    </>
  );
}

export default Dashboard;
