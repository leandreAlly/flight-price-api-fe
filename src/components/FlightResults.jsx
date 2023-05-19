import React from "react";

const FlightResults = ({ results }) => {
  return (
    <div className='mt-4'>
      <h2 className='mb-3'>Flight Results</h2>
      <ul className='list-group'>
        {Object.entries(results).map(([company, price]) => (
          <li
            key={company}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            <strong>{company}</strong>
            <span className='badge bg-primary rounded-pill'>{price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightResults;
