import React, { useState } from 'react';
import Menu from './Menu';
import Cashier from './Cashier';
import Admin from './Admin';

function Dashboard({ userRole }) {
  const [isShiftStarted, setIsShiftStarted] = useState(false);
  const [shiftStart, setShiftStart] = useState(null);
  const [shiftEnd, setShiftEnd] = useState(null);

  const handleStartShift = () => {
    setIsShiftStarted(true);
    setShiftStart(new Date());
  };

  const handleEndShift = () => {
    setIsShiftStarted(false);
    setShiftEnd(new Date());
  };

  const renderContentBasedOnRole = () => {
    switch (userRole) {
      case 'waiter':
      case 'bartender':
        return <Menu />;
      case 'cashier':
        return <Cashier />;
      case 'admin':
        return <Admin />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>

      {isShiftStarted ? (
        <ShiftInfo start={shiftStart} end={shiftEnd} onEndShift={handleEndShift} />
      ) : (
        <button onClick={handleStartShift}>Start Shift</button>
      )}

      {renderContentBasedOnRole()}
    </div>
  );
}

function ShiftInfo({ start, end, onEndShift }) {
  return (
    <>
      <p>Started: {start.toLocaleString()}</p>
      <button onClick={onEndShift}>End Shift</button>
    </>
  );
}

export default Dashboard;
