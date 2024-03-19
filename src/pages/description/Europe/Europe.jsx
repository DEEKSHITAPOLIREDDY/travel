import React from 'react'
import { useLocation } from 'react-router-dom';

const Europe = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get('destination');
  const fees = searchParams.get('fees');
  const grade = searchParams.get('grade');

  return (
    <div className="africa-container">
      <h2 className="africa-title">Booking Details for Africa</h2>
      <div className="africa-details">
        <p>Destination: {destination}</p>
        <p>Fees: {fees}</p>
        <p>Grade: {grade}</p>
      </div>
    </div>
  );
}

export default Europe;